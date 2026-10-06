if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const crypto = require('node:crypto');
const path = require('node:path');
const { promisify } = require('node:util');
const express = require('express');
const { rateLimit } = require('express-rate-limit');
const { Pool } = require('pg');
const QRCode = require('qrcode');
const { products } = require('./catalog');
const { calculateOrder } = require('./order');

const app = express();
const port = Number(process.env.PORT || 3000);
const baseUrl = (process.env.RENDER_EXTERNAL_URL || process.env.APP_BASE_URL || `http://localhost:${port}`).replace(/\/+$/, '');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const orderIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const sellerCookieName = 'uf_seller_session';
const customerCookieName = 'uf_customer_session';
const scrypt = promisify(crypto.scrypt);

if (baseUrl.startsWith('https://')) app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.set({
    'Content-Security-Policy': [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://viacep.com.br",
      ...(process.env.NODE_ENV === 'production' ? ['upgrade-insecure-requests'] : [])
    ].join('; '),
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
  });
  if (process.env.NODE_ENV === 'production') {
    res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  if (req.path.startsWith('/api/')) res.set('Cache-Control', 'no-store');
  next();
});
app.use(express.json({ limit: '32kb' }));

function isNonEmptyString(value, maxLength = 200) {
  return typeof value === 'string' && value.trim().length > 0 && value.trim().length <= maxLength;
}

function badRequest(res, message) {
  return res.status(400).json({ error: message });
}

function tlv(id, value) {
  return `${id}${String(Buffer.byteLength(value, 'utf8')).padStart(2, '0')}${value}`;
}

function crc16Ccitt(value) {
  let crc = 0xffff;
  for (const byte of Buffer.from(value, 'utf8')) {
    crc ^= byte << 8;
    for (let bit = 0; bit < 8; bit++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function normalizePixMerchantField(value, maxLength) {
  return value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9 $%*+\-./:]/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function createPixPayload({ amountCents, txid }) {
  const merchantName = normalizePixMerchantField(process.env.PIX_RECEIVER_NAME, 25);
  const merchantCity = normalizePixMerchantField(process.env.PIX_RECEIVER_CITY, 15);
  if (!merchantName || !merchantCity) {
    throw new Error('O nome do recebedor ou a cidade não podem ser usados no QR Pix.');
  }

  const merchantAccount = tlv('00', 'BR.GOV.BCB.PIX') + tlv('01', process.env.PIX_KEY.trim());
  const additionalData = tlv('05', txid);
  const payload =
    tlv('00', '01') +
    tlv('01', '11') +
    tlv('26', merchantAccount) +
    tlv('52', '0000') +
    tlv('53', '986') +
    tlv('54', (amountCents / 100).toFixed(2)) +
    tlv('58', 'BR') +
    tlv('59', merchantName) +
    tlv('60', merchantCity) +
    tlv('62', additionalData) +
    '6304';

  return `${payload}${crc16Ccitt(payload)}`;
}

function parseCookies(header = '') {
  return Object.fromEntries(header.split(';').map(cookie => {
    const separator = cookie.indexOf('=');
    return separator < 0
      ? ['', '']
      : [cookie.slice(0, separator).trim(), cookie.slice(separator + 1).trim()];
  }).filter(([name]) => name));
}

function signSellerSession(value) {
  return crypto.createHmac('sha256', process.env.SESSION_SECRET).update(value).digest('hex');
}

function signCustomerSession(value) {
  return crypto.createHmac('sha256', process.env.SESSION_SECRET).update(`customer:${value}`).digest('hex');
}

function getCustomerSessionId(req) {
  const token = parseCookies(req.get('cookie'))[customerCookieName];
  if (!token) return null;

  const signatureSeparator = token.lastIndexOf('.');
  if (signatureSeparator < 1) return null;
  const value = token.slice(0, signatureSeparator);
  const signature = token.slice(signatureSeparator + 1);
  const [customerId, expiresAt, nonce] = value.split('.');
  if (!orderIdPattern.test(customerId) || !/^\d+$/.test(expiresAt) ||
      !/^[a-f0-9]{32}$/i.test(nonce) || Number(expiresAt) <= Date.now() ||
      !/^[a-f0-9]{64}$/i.test(signature)) return null;

  const expected = Buffer.from(signCustomerSession(value), 'hex');
  const actual = Buffer.from(signature, 'hex');
  return crypto.timingSafeEqual(expected, actual) ? customerId : null;
}

async function requireCustomer(req, res, next) {
  const customerId = getCustomerSessionId(req);
  if (!customerId) return res.status(401).json({ error: 'Entre na sua conta para continuar.' });

  try {
    const result = await pool.query(
      'SELECT id, name, email, phone, cpf FROM customers WHERE id = $1',
      [customerId]
    );
    if (!result.rowCount) return res.status(401).json({ error: 'Sua sessão expirou. Entre novamente.' });
    req.customer = result.rows[0];
    next();
  } catch (error) {
    console.error('Falha ao validar sessão do cliente:', error.message);
    res.status(500).json({ error: 'Não foi possível validar sua sessão.' });
  }
}

async function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const derivedKey = await scrypt(password, salt, 64, { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 });
  return `scrypt$${salt.toString('hex')}$${derivedKey.toString('hex')}`;
}

async function verifyPassword(password, storedHash) {
  const [, saltHex, keyHex] = String(storedHash).split('$');
  if (!/^[a-f0-9]{32}$/i.test(saltHex || '') || !/^[a-f0-9]{128}$/i.test(keyHex || '')) return false;
  const actual = await scrypt(password, Buffer.from(saltHex, 'hex'), 64, {
    N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024
  });
  return crypto.timingSafeEqual(actual, Buffer.from(keyHex, 'hex'));
}

function setCustomerSession(res, customerId) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const value = `${customerId}.${expiresAt}.${crypto.randomBytes(16).toString('hex')}`;
  const token = `${value}.${signCustomerSession(value)}`;
  res.cookie(customerCookieName, token, {
    httpOnly: true,
    secure: baseUrl.startsWith('https://'),
    sameSite: 'strict',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

function clearCustomerSession(res) {
  res.clearCookie(customerCookieName, {
    httpOnly: true,
    secure: baseUrl.startsWith('https://'),
    sameSite: 'strict',
    path: '/'
  });
}

function isSellerAuthenticated(req) {
  const token = parseCookies(req.get('cookie'))[sellerCookieName];
  if (!token) return false;

  const separator = token.lastIndexOf('.');
  if (separator < 1) return false;
  const value = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  const [expiresAt, nonce] = value.split('.');
  if (!/^\d+$/.test(expiresAt) || !/^[a-f0-9]{64}$/i.test(signature) ||
      !/^[a-f0-9]{32}$/i.test(nonce) || Number(expiresAt) <= Date.now()) return false;

  const expected = Buffer.from(signSellerSession(value), 'hex');
  const actual = Buffer.from(signature, 'hex');
  return crypto.timingSafeEqual(expected, actual);
}

function requireSeller(req, res, next) {
  if (!isSellerAuthenticated(req)) return res.status(401).json({ error: 'Entre no painel do vendedor.' });
  next();
}

function requireSameOrigin(req, res, next) {
  let origin;
  try {
    origin = new URL(req.get('origin') || '').origin;
  } catch {
    return res.status(403).json({ error: 'Origem da solicitação não permitida.' });
  }
  if (origin !== new URL(baseUrl).origin) return res.status(403).json({ error: 'Origem da solicitação não permitida.' });
  next();
}

const sellerLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas tentativas. Aguarde 15 minutos e tente novamente.' }
});

const customerAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas tentativas. Aguarde 15 minutos e tente novamente.' }
});

const checkoutLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitos pedidos em pouco tempo. Aguarde alguns minutos e tente novamente.' }
});

const orderStatusLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 120,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas consultas de pedido. Aguarde um minuto e tente novamente.' }
});

const customerOrdersLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas consultas de pedidos. Aguarde um minuto e tente novamente.' }
});

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok' });
  } catch (error) {
    console.error('Falha no health check do banco:', error.message);
    res.status(503).json({ status: 'unavailable' });
  }
});

app.post('/api/customer/register', requireSameOrigin, customerAuthLimiter, async (req, res) => {
  const name = req.body?.name;
  const email = req.body?.email;
  const password = req.body?.password;
  if (!isNonEmptyString(name, 120) || !/^[\p{L}\p{M} .'\u2019-]+$/u.test(name.trim())) {
    return badRequest(res, 'Informe um nome válido, usando apenas letras.');
  }
  if (typeof email !== 'string' || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.trim().includes('..')) {
    return badRequest(res, 'Informe um endereço de e-mail válido.');
  }
  if (typeof password !== 'string' || password.length < 8 || Buffer.byteLength(password, 'utf8') > 128) {
    return badRequest(res, 'A senha deve ter entre 8 e 128 bytes.');
  }

  try {
    const passwordHash = await hashPassword(password);
    const result = await pool.query(
      `INSERT INTO customers (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, phone, cpf`,
      [name.trim(), email.trim().toLowerCase(), passwordHash]
    );
    const customer = result.rows[0];
    setCustomerSession(res, customer.id);
    res.status(201).json({ customer });
  } catch (error) {
    if (error.code === '23505') return res.status(409).json({ error: 'Este e-mail já tem uma conta.' });
    console.error('Falha ao criar conta de cliente:', error.message);
    res.status(500).json({ error: 'Não foi possível criar sua conta.' });
  }
});

app.post('/api/customer/login', requireSameOrigin, customerAuthLimiter, async (req, res) => {
  const email = req.body?.email;
  const password = req.body?.password;
  if (typeof email !== 'string' || email.length > 254 ||
      typeof password !== 'string' || password.length > 128) {
    return badRequest(res, 'Informe seu e-mail e senha.');
  }

  try {
    const result = await pool.query(
      'SELECT id, name, email, phone, cpf, password_hash FROM customers WHERE email = $1',
      [email.trim().toLowerCase()]
    );
    const customer = result.rows[0];
    if (!customer || !await verifyPassword(password, customer.password_hash)) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }
    setCustomerSession(res, customer.id);
    delete customer.password_hash;
    res.json({ customer });
  } catch (error) {
    console.error('Falha no login do cliente:', error.message);
    res.status(500).json({ error: 'Não foi possível entrar na sua conta.' });
  }
});

app.get('/api/customer/session', requireCustomer, (req, res) => {
  res.json({ customer: req.customer });
});

app.get('/api/customer/orders', requireCustomer, customerOrdersLimiter, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, status, total_cents, created_at
       FROM orders
       WHERE customer_email = $1
       ORDER BY created_at DESC
       LIMIT 30`,
      [req.customer.email]
    );
    res.json({ orders: result.rows });
  } catch (error) {
    console.error('Falha ao carregar pedidos do cliente:', error.message);
    res.status(500).json({ error: 'Não foi possível carregar seus pedidos.' });
  }
});

app.post('/api/customer/logout', requireSameOrigin, (_req, res) => {
  clearCustomerSession(res);
  res.sendStatus(204);
});

app.put('/api/customer/profile', requireSameOrigin, requireCustomer, async (req, res) => {
  const { name, email, phone = '', cpf = '' } = req.body || {};
  if (!isNonEmptyString(name, 120) || !/^[\p{L}\p{M} .'\u2019-]+$/u.test(name.trim())) {
    return badRequest(res, 'Informe um nome válido, usando apenas letras.');
  }
  if (typeof email !== 'string' || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return badRequest(res, 'Informe um e-mail válido.');
  }
  if (typeof phone !== 'string' || phone.length > 30 || typeof cpf !== 'string' || cpf.length > 20) {
    return badRequest(res, 'Telefone ou CPF inválido.');
  }

  try {
    const result = await pool.query(
      `UPDATE customers
       SET name = $1, email = $2, phone = $3, cpf = $4, updated_at = NOW()
       WHERE id = $5
       RETURNING id, name, email, phone, cpf`,
      [name.trim(), email.trim().toLowerCase(), phone.trim(), cpf.trim(), req.customer.id]
    );
    res.json({ customer: result.rows[0] });
  } catch (error) {
    if (error.code === '23505') return res.status(409).json({ error: 'Este e-mail já está em uso.' });
    console.error('Falha ao atualizar perfil do cliente:', error.message);
    res.status(500).json({ error: 'Não foi possível atualizar seu perfil.' });
  }
});

app.post('/api/customer/change-password', requireSameOrigin, requireCustomer, async (req, res) => {
  const currentPassword = req.body?.currentPassword;
  const newPassword = req.body?.newPassword;
  if (typeof currentPassword !== 'string' || Buffer.byteLength(currentPassword, 'utf8') > 128 ||
      typeof newPassword !== 'string' || newPassword.length < 8 ||
      Buffer.byteLength(newPassword, 'utf8') > 128) {
    return badRequest(res, 'A nova senha deve ter entre 8 e 128 bytes.');
  }

  try {
    const result = await pool.query('SELECT password_hash FROM customers WHERE id = $1', [req.customer.id]);
    if (!result.rowCount || !await verifyPassword(currentPassword, result.rows[0].password_hash)) {
      return res.status(401).json({ error: 'A senha atual está incorreta.' });
    }
    const passwordHash = await hashPassword(newPassword);
    await pool.query(
      'UPDATE customers SET password_hash = $1, updated_at = NOW() WHERE id = $2',
      [passwordHash, req.customer.id]
    );
    res.json({ updated: true });
  } catch (error) {
    console.error('Falha ao alterar senha do cliente:', error.message);
    res.status(500).json({ error: 'Não foi possível alterar sua senha.' });
  }
});

app.post('/api/checkout', requireSameOrigin, requireCustomer, checkoutLimiter, async (req, res) => {
  const order = calculateOrder(req.body, req.customer);
  if (order.error) return badRequest(res, order.error);

  const id = crypto.randomUUID();
  const txid = id.replace(/-/g, '').slice(0, 25).toUpperCase();
  try {
    const pixPayload = createPixPayload({ amountCents: order.totalCents, txid });
    const qrCode = await QRCode.toDataURL(pixPayload, {
      errorCorrectionLevel: 'M',
      margin: 2,
      width: 280
    });

    await pool.query(
      `INSERT INTO orders
       (id, customer_name, customer_email, address, items, coupon_code,
        subtotal_cents, discount_cents, shipping_cents, total_cents, pix_txid, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'pending')`,
      [
        id,
        order.customer.name,
        order.customer.email,
        JSON.stringify(order.address),
        JSON.stringify(order.items),
        order.couponCode,
        order.subtotalCents,
        order.discountCents,
        order.shippingCents,
        order.totalCents,
        txid
      ]
    );

    res.status(201).json({
      orderId: id,
      subtotalCents: order.subtotalCents,
      discountCents: order.discountCents,
      shippingCents: order.shippingCents,
      totalCents: order.totalCents,
      pixPayload,
      qrCode,
      receiverName: process.env.PIX_RECEIVER_NAME
    });
  } catch (error) {
    console.error('Falha ao criar pedido Pix:', error.message);
    res.status(500).json({ error: 'Não foi possível gerar o pedido Pix. Tente novamente.' });
  }
});

app.get('/api/orders/:id/status', requireCustomer, orderStatusLimiter, async (req, res) => {
  if (!orderIdPattern.test(req.params.id)) return res.status(404).json({ error: 'Pedido não encontrado.' });
  try {
    const result = await pool.query(
      'SELECT id, status, total_cents, pix_txid, paid_at, created_at FROM orders WHERE id = $1 AND customer_email = $2',
      [req.params.id, req.customer.email]
    );
    if (!result.rowCount) return res.status(404).json({ error: 'Pedido não encontrado.' });
    const order = result.rows[0];
    const response = {
      id: order.id,
      status: order.status,
      totalCents: order.total_cents,
      paidAt: order.paid_at,
      createdAt: order.created_at
    };
    if (req.query.pix === '1' && order.status === 'pending') {
      response.pixPayload = createPixPayload({ amountCents: order.total_cents, txid: order.pix_txid });
      response.qrCode = await QRCode.toDataURL(response.pixPayload, {
        errorCorrectionLevel: 'M',
        margin: 2,
        width: 280
      });
      response.receiverName = process.env.PIX_RECEIVER_NAME;
    }
    res.json(response);
  } catch (error) {
    console.error('Falha ao consultar pedido:', error.message);
    res.status(500).json({ error: 'Não foi possível consultar o pedido.' });
  }
});

app.post('/api/seller/login', requireSameOrigin, sellerLoginLimiter, (req, res) => {
  const password = req.body?.password;
  if (typeof password !== 'string' || password.length > 512) {
    return res.status(400).json({ error: 'Informe a senha do vendedor.' });
  }

  const receivedDigest = crypto.createHash('sha256').update(password).digest();
  const expectedDigest = crypto.createHash('sha256').update(process.env.SELLER_PASSWORD).digest();
  if (!crypto.timingSafeEqual(receivedDigest, expectedDigest)) {
    return res.status(401).json({ error: 'Senha incorreta.' });
  }

  const expiresAt = Date.now() + 8 * 60 * 60 * 1000;
  const value = `${expiresAt}.${crypto.randomBytes(16).toString('hex')}`;
  const token = `${value}.${signSellerSession(value)}`;
  res.cookie(sellerCookieName, token, {
    httpOnly: true,
    secure: baseUrl.startsWith('https://'),
    sameSite: 'strict',
    path: '/api/seller',
    maxAge: 8 * 60 * 60 * 1000
  });
  res.json({ authenticated: true });
});

app.post('/api/seller/logout', requireSameOrigin, (_req, res) => {
  res.clearCookie(sellerCookieName, {
    httpOnly: true,
    secure: baseUrl.startsWith('https://'),
    sameSite: 'strict',
    path: '/api/seller'
  });
  res.sendStatus(204);
});

app.get('/api/seller/session', requireSeller, (_req, res) => res.json({ authenticated: true }));

app.get('/api/seller/orders', requireSeller, async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, customer_name, customer_email, address, items, subtotal_cents,
              discount_cents, shipping_cents, total_cents, pix_txid, status, created_at, paid_at
       FROM orders
       ORDER BY CASE WHEN status = 'pending' THEN 0 ELSE 1 END, created_at DESC
       LIMIT 200`
    );
    res.json({ orders: result.rows });
  } catch (error) {
    console.error('Falha ao carregar pedidos do vendedor:', error.message);
    res.status(500).json({ error: 'Não foi possível carregar os pedidos.' });
  }
});

app.post('/api/seller/orders/:id/confirm-payment', requireSameOrigin, requireSeller, async (req, res) => {
  if (!orderIdPattern.test(req.params.id)) return res.status(404).json({ error: 'Pedido não encontrado.' });
  if (req.body?.confirmedReceived !== true) {
    return badRequest(res, 'Confirme que verificou o crédito no extrato do banco.');
  }

  try {
    const result = await pool.query(
      `UPDATE orders
       SET status = 'paid', paid_at = NOW(), updated_at = NOW()
       WHERE id = $1 AND status = 'pending'
       RETURNING id, status, paid_at`,
      [req.params.id]
    );
    if (!result.rowCount) {
      const existing = await pool.query('SELECT id, status FROM orders WHERE id = $1', [req.params.id]);
      if (!existing.rowCount) return res.status(404).json({ error: 'Pedido não encontrado.' });
      return res.status(409).json({ error: `Este pedido não está pendente (status: ${existing.rows[0].status}).` });
    }
    res.json({ order: result.rows[0] });
  } catch (error) {
    console.error('Falha ao confirmar pagamento do pedido:', error.message);
    res.status(500).json({ error: 'Não foi possível atualizar o pedido.' });
  }
});

app.get('/vendedor', (_req, res) => res.sendFile(path.join(__dirname, 'seller.html')));
app.get('/seller.js', (_req, res) => res.sendFile(path.join(__dirname, 'seller.js')));
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
for (const asset of ['amora-store.js', 'catalog.js', 'styles.css']) {
  app.get(`/${asset}`, (_req, res) => res.sendFile(path.join(__dirname, asset)));
}

app.use((error, _req, res, _next) => {
  console.error('Erro inesperado no servidor:', error.message);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

async function start() {
  if (!process.env.DATABASE_URL) throw new Error('Configure DATABASE_URL.');
  if (!isNonEmptyString(process.env.PIX_KEY, 77) || /\s/.test(process.env.PIX_KEY)) {
    throw new Error('Configure uma PIX_KEY válida, sem espaços.');
  }
  if (!isNonEmptyString(process.env.PIX_RECEIVER_NAME, 25) ||
      !isNonEmptyString(process.env.PIX_RECEIVER_CITY, 15)) {
    throw new Error('Configure PIX_RECEIVER_NAME (até 25 caracteres) e PIX_RECEIVER_CITY (até 15 caracteres).');
  }
  if (!isNonEmptyString(process.env.SELLER_PASSWORD, 512) || process.env.SELLER_PASSWORD.length < 16) {
    throw new Error('Configure uma SELLER_PASSWORD com pelo menos 16 caracteres.');
  }
  if (!isNonEmptyString(process.env.SESSION_SECRET, 512) || process.env.SESSION_SECRET.length < 32) {
    throw new Error('Configure um SESSION_SECRET com pelo menos 32 caracteres.');
  }
  if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
    throw new Error('APP_BASE_URL precisa ser uma URL HTTP ou HTTPS.');
  }
  if (process.env.NODE_ENV === 'production' && !baseUrl.startsWith('https://')) {
    throw new Error('APP_BASE_URL precisa usar HTTPS em produção.');
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id UUID PRIMARY KEY,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      address JSONB NOT NULL,
      items JSONB NOT NULL,
      coupon_code TEXT,
      subtotal_cents INTEGER NOT NULL CHECK (subtotal_cents >= 0),
      discount_cents INTEGER NOT NULL CHECK (discount_cents >= 0),
      shipping_cents INTEGER NOT NULL CHECK (shipping_cents >= 0),
      total_cents INTEGER NOT NULL CHECK (total_cents >= 0),
      pix_txid TEXT UNIQUE,
      status TEXT NOT NULL CHECK (status IN ('pending', 'paid', 'rejected', 'cancelled', 'refunded', 'chargeback', 'disputed', 'failed')),
      paid_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    ALTER TABLE orders ADD COLUMN IF NOT EXISTS pix_txid TEXT;
    ALTER TABLE orders ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ;
    CREATE UNIQUE INDEX IF NOT EXISTS orders_pix_txid_idx ON orders (pix_txid) WHERE pix_txid IS NOT NULL;
    CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders (created_at DESC);
    CREATE TABLE IF NOT EXISTS customers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      cpf TEXT NOT NULL DEFAULT '',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  app.listen(port, () => console.log(`Amora rodando em ${baseUrl}`));
}

start().catch(error => {
  console.error('Não foi possível iniciar o servidor:', error.message);
  process.exitCode = 1;
});
