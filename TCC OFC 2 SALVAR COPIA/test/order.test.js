const test = require('node:test');
const assert = require('node:assert/strict');
const catalog = require('../catalog');
const { calculateOrder } = require('../order');

const customer = { name: 'Ana d’Ávila', email: 'ana@example.com' };
const address = {
  cep: '01310-100',
  street: 'Avenida Paulista',
  number: '123',
  neighborhood: 'Bela Vista',
  city: 'São Paulo',
  state: 'sp',
  giftWrap: true,
  giftMessage: 'Com carinho!'
};

test('catalog contains the 15 Amora pieces with integer cent prices', () => {
  assert.equal(catalog.products.size, 15);
  for (const [id, product] of catalog.products) {
    assert.ok(Number.isInteger(id));
    assert.ok(Number.isInteger(product.priceCents));
    assert.ok(product.title);
  }
});

test('server calculates authoritative product prices and standard shipping', () => {
  const result = calculateOrder({
    items: [{ id: 1, quantity: 1, price: 0, title: 'Preço adulterado' }],
    address
  }, customer);

  assert.equal(result.subtotalCents, 8990);
  assert.equal(result.shippingCents, 1490);
  assert.equal(result.totalCents, 10480);
  assert.equal(result.items[0].title, 'Colar Elo do Sol');
  assert.equal(result.items[0].unitPriceCents, 8990);
  assert.deepEqual(result.address, {
    name: 'Ana d’Ávila',
    cep: address.cep,
    street: address.street,
    number: address.number,
    complement: '',
    neighborhood: address.neighborhood,
    city: address.city,
    state: 'SP',
    giftWrap: true,
    giftMessage: 'Com carinho!'
  });
});

test('server grants free shipping at the configured threshold', () => {
  const result = calculateOrder({
    items: [{ id: 1, quantity: 3 }],
    address
  }, customer);

  assert.equal(result.subtotalCents, 26970);
  assert.equal(result.shippingCents, 0);
  assert.equal(result.totalCents, 26970);
});

test('server rejects invalid products, quantities, and delivery addresses', () => {
  assert.equal(calculateOrder({ items: [], address }, customer).error, 'Carrinho inválido.');
  assert.match(calculateOrder({ items: [{ id: 999, quantity: 1 }], address }, customer).error, /produto ou uma quantidade inválida/);
  assert.match(calculateOrder({ items: [{ id: 1, quantity: 21 }], address }, customer).error, /produto ou uma quantidade inválida/);
  assert.match(calculateOrder({ items: [{ id: 1, quantity: 1 }], address: { ...address, cep: 'inválido' } }, customer).error, /endereço de entrega válido/);
});

test('server rejects oversized gift notes and malformed gift options', () => {
  assert.match(calculateOrder({
    items: [{ id: 1, quantity: 1 }],
    address: { ...address, giftMessage: 'a'.repeat(181) }
  }, customer).error, /recado para presente/);
  assert.match(calculateOrder({
    items: [{ id: 1, quantity: 1 }],
    address: { ...address, giftWrap: 'yes' }
  }, customer).error, /embalagem para presente/);
});
