const {
  products,
  freeShippingThresholdCents,
  shippingCostCents
} = window.AMORA_CATALOG;

const categories = [
  { id: 'todos', label: 'Todas as peças' },
  { id: 'colares', label: 'Colares' },
  { id: 'brincos', label: 'Brincos' },
  { id: 'pulseiras', label: 'Pulseiras' },
  { id: 'aneis', label: 'Anéis' },
  { id: 'conjuntos', label: 'Conjuntos' },
];

const storageKeys = { cart: 'amora-cart', favorites: 'amora-favorites' };
let toastTimer;
let accountMode = 'login';
let account = null;
let accountSessionReady = Promise.resolve();
let checkoutAfterLogin = false;
let activeOrderId = null;
let paymentPollTimer = null;
let paymentPollAttempts = 0;
const readStorage = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    console.error(`Não foi possível recuperar os dados salvos de ${key}.`);
    showToast('Não foi possível recuperar algumas informações salvas neste navegador.');
    return fallback;
  }
};

const savedCart = readStorage(storageKeys.cart, []);
let cart = Array.isArray(savedCart)
  ? savedCart.filter(item => products.some(product => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 20)
  : [];
const savedFavorites = readStorage(storageKeys.favorites, []);
let favorites = Array.isArray(savedFavorites)
  ? [...new Set(savedFavorites.filter(id => products.some(product => product.id === id)))]
  : [];
let activeCategory = 'todos';
let searchTerm = '';
let favoritesOnly = false;
let returnFocusElement = null;

const elements = {
  productGrid: document.getElementById('productGrid'),
  filterList: document.getElementById('filterList'),
  shopTitle: document.getElementById('shopTitle'),
  resultsCount: document.getElementById('resultsCount'),
  emptyState: document.getElementById('emptyState'),
  resetFilters: document.getElementById('resetFilters'),
  cartDrawer: document.getElementById('cartDrawer'),
  overlay: document.getElementById('overlay'),
  cartItems: document.getElementById('cartItems'),
  cartEmpty: document.getElementById('cartEmpty'),
  cartFooter: document.getElementById('cartFooter'),
  productDialog: document.getElementById('productDialog'),
  checkoutDialog: document.getElementById('checkoutDialog'),
};

function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}

async function requestApi(url, options = {}) {
  if (window.location.protocol === 'file:') {
    throw new Error('Acesse a loja pelo servidor publicado para usar contas, pedidos e pagamento Pix.');
  }
  const headers = new Headers(options.headers || {});
  if (options.body) headers.set('Content-Type', 'application/json');

  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers,
      credentials: 'same-origin',
    });
  } catch (error) {
    console.error(`Não foi possível conectar à API em ${url}.`, error);
    throw new Error('Não foi possível conectar à loja. Confira sua conexão e tente novamente.');
  }

  let payload = null;
  if (!response.ok) {
    try {
      payload = await response.json();
    } catch {
      throw new Error(`O serviço da loja não está disponível (HTTP ${response.status}). Tente novamente.`);
    }
    throw new Error(payload?.error || 'Não foi possível concluir a solicitação.');
  }
  if (response.status !== 204) {
    try {
      payload = await response.json();
    } catch (error) {
      console.error(`A API em ${url} retornou uma resposta inválida.`, error);
      throw new Error('A loja retornou uma resposta inválida. Tente novamente.');
    }
  }
  return payload;
}

function showRequestError(error) {
  showToast(error instanceof Error ? error.message : 'Não foi possível concluir a solicitação.');
}

function saveState() {
  try {
    localStorage.setItem(storageKeys.cart, JSON.stringify(cart));
    localStorage.setItem(storageKeys.favorites, JSON.stringify(favorites));
    return true;
  } catch (error) {
    console.error('Não foi possível salvar a sacola e as peças favoritas.', error);
    showToast('Não foi possível salvar as alterações neste navegador.');
    return false;
  }
}

function getVisibleProducts() {
  let visible = [...products];
  if (activeCategory !== 'todos') visible = visible.filter(product => product.category === activeCategory);
  if (favoritesOnly) visible = visible.filter(product => favorites.includes(product.id));
  if (searchTerm) {
    const normalizedSearch = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    visible = visible.filter(product =>
      `${product.name} ${product.category} ${product.description}`
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(normalizedSearch),
    );
  }

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'price-asc') visible.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') visible.sort((a, b) => b.price - a.price);
  if (sort === 'newest') visible.sort((a, b) => b.id - a.id);
  if (sort === 'featured') visible.sort((a, b) => Number(b.featured) - Number(a.featured));
  return visible;
}

function renderFilters() {
  const focusedFilter = document.activeElement instanceof HTMLElement
    ? document.activeElement.dataset.filter
    : null;
  elements.filterList.innerHTML = categories.map(category => `
    <button class="filter-chip${category.id === activeCategory ? ' active' : ''}"
      type="button" data-filter="${category.id}" aria-pressed="${category.id === activeCategory}">
      ${category.label}
    </button>`).join('');
  if (focusedFilter) elements.filterList.querySelector(`[data-filter="${focusedFilter}"]`)?.focus();
}

function renderProducts() {
  const visible = getVisibleProducts();
  const currentCategory = categories.find(category => category.id === activeCategory);
  const focusedFavorite = document.activeElement instanceof HTMLElement
    ? document.activeElement.closest('[data-favorite]')?.dataset.favorite
    : null;
  elements.shopTitle.innerHTML = favoritesOnly
    ? 'Suas peças <em>favoritas</em>'
    : activeCategory === 'todos' && !searchTerm
      ? 'Joias que <em>encantam</em>'
      : `${currentCategory?.label ?? 'Busca'} <em>Amora</em>`;
  elements.resultsCount.setAttribute('role', 'status');
  elements.resultsCount.setAttribute('aria-live', 'polite');
  elements.resultsCount.setAttribute('aria-atomic', 'true');
  elements.resultsCount.textContent = `${visible.length} ${visible.length === 1 ? 'peça encontrada' : 'peças encontradas'}`;
  elements.productGrid.innerHTML = visible.map((product, index) => {
    const isFavorite = favorites.includes(product.id);
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    return `
      <article class="product-card" aria-labelledby="productTitle${product.id}">
        <div class="product-image-wrap">
          <button class="image-open-button" type="button" data-open-product="${product.id}" aria-label="Ver detalhes de ${product.name}">
            <img class="product-image" src="${product.image}" alt="${product.name}" loading="${index < 4 ? 'eager' : 'lazy'}" fetchpriority="${index === 0 ? 'high' : 'auto'}" decoding="async">
          </button>
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          ${discount ? `<span class="discount-badge">-${discount}%</span>` : ''}
          <button class="favorite-button${isFavorite ? ' is-favorite' : ''}" type="button" data-favorite="${product.id}" aria-label="${isFavorite ? 'Remover' : 'Adicionar'} ${product.name} ${isFavorite ? 'dos' : 'aos'} favoritos" aria-pressed="${isFavorite}">${isFavorite ? '♥' : '♡'}</button>
          <button class="quick-view" type="button" data-open-product="${product.id}" aria-label="Conhecer ${product.name}">Conheça a peça <span aria-hidden="true">↗</span></button>
        </div>
        <div class="product-info">
          <span class="product-category">${categoryLabel(product.category)}</span>
          <h3 id="productTitle${product.id}">${product.name}</h3>
          <div class="product-price">${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}<strong>${formatPrice(product.price)}</strong></div>
          <button class="add-button" type="button" data-add-to-cart="${product.id}">Adicionar à sacola <span aria-hidden="true">+</span></button>
        </div>
      </article>`;
  }).join('');
  if (focusedFavorite) elements.productGrid.querySelector(`[data-favorite="${focusedFavorite}"]`)?.focus();
  elements.emptyState.hidden = visible.length > 0;
  elements.productGrid.hidden = visible.length === 0;
  elements.resetFilters.hidden = !favoritesOnly && !searchTerm && activeCategory === 'todos';
  renderFilters();
  updateBadges();
}

function categoryLabel(id) {
  return categories.find(category => category.id === id)?.label ?? 'Joias';
}

function updateBadges() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cartCount').textContent = itemCount;
  document.getElementById('favoritesCount').textContent = favorites.length;
  document.getElementById('cartButton').setAttribute('aria-label', `Abrir sacola (${itemCount} ${itemCount === 1 ? 'peça' : 'peças'})`);
  document.getElementById('favoritesButton').setAttribute('aria-label', `Ver favoritos (${favorites.length})`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function addToCart(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;
  const cartItem = cart.find(item => item.id === product.id);
  if (cartItem && cartItem.quantity < 20) cartItem.quantity += 1;
  else if (cartItem) {
    showToast('Você atingiu o limite de 20 unidades desta peça.');
    return;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }
  saveState();
  renderCart();
  showToast(`${product.name} chegou à sua sacola ♡`);
}

function toggleFavorite(productId) {
  const id = Number(productId);
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  saveState();
  renderProducts();
  showToast(favorites.includes(id) ? 'Guardamos essa peça nas suas favoritas ♡' : 'Peça removida das favoritas');
}

function changeQuantity(productId, adjustment) {
  const item = cart.find(cartItem => cartItem.id === Number(productId));
  if (!item) return;
  if (adjustment > 0 && item.quantity >= 20) {
    showToast('Você atingiu o limite de 20 unidades desta peça.');
    return;
  }
  item.quantity += adjustment;
  if (item.quantity < 1) cart = cart.filter(cartItem => cartItem.id !== Number(productId));
  saveState();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== Number(productId));
  saveState();
  renderCart();
}

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = getCartSubtotal();
  document.getElementById('drawerItemCount').textContent = itemCount ? `(${itemCount})` : '';
  document.getElementById('cartSubtotal').textContent = formatPrice(total);
  document.getElementById('shippingMessage').textContent = total >= freeShippingThresholdCents / 100
    ? 'Oba! Seu pedido tem frete grátis ♡'
    : total > 0
      ? `Faltam ${formatPrice(freeShippingThresholdCents / 100 - total)} para ganhar frete grátis.`
      : '';
  const shippingProgress = document.getElementById('shippingProgress');
  shippingProgress.style.width = `${Math.min(total / (freeShippingThresholdCents / 100) * 100, 100)}%`;
  shippingProgress.parentElement.setAttribute('aria-valuenow', Math.min(total, freeShippingThresholdCents / 100).toFixed(2));
  elements.cartEmpty.hidden = itemCount > 0;
  elements.cartItems.hidden = itemCount === 0;
  elements.cartFooter.hidden = itemCount === 0;
  elements.cartItems.innerHTML = cart.map(item => {
    const product = products.find(candidate => candidate.id === item.id);
    if (!product) return '';
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="">
        <div class="cart-item-info"><span class="product-category">${categoryLabel(product.category)}</span><h3>${product.name}</h3><strong>${formatPrice(product.price)}</strong>
          <div class="quantity-control"><button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Diminuir quantidade">−</button><span>${item.quantity}</span><button type="button" data-quantity="${product.id}" data-change="1" aria-label="Aumentar quantidade">+</button></div>
        </div>
        <button class="remove-item" type="button" data-remove="${product.id}" aria-label="Remover ${product.name}">×</button>
      </article>`;
  }).join('');
  updateBadges();
}

function openCart() {
  renderCart();
  returnFocusElement = document.activeElement;
  elements.cartDrawer.inert = false;
  elements.cartDrawer.classList.add('open');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
  elements.overlay.classList.add('visible');
  document.body.classList.add('drawer-open');
  document.getElementById('closeCart').focus();
}

function closeCart() {
  elements.cartDrawer.classList.remove('open');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
  elements.cartDrawer.inert = true;
  elements.overlay.classList.remove('visible');
  document.body.classList.remove('drawer-open');
  if (returnFocusElement instanceof HTMLElement) returnFocusElement.focus();
  returnFocusElement = null;
}

function openProduct(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;
  const dialogContent = document.getElementById('productDialogContent');
  dialogContent.innerHTML = `
    <img class="dialog-product-image" src="${product.image}" alt="${product.name}">
    <div class="dialog-product-info">
      <span class="eyebrow eyebrow-muted">${categoryLabel(product.category)}</span>
      <h2>${product.name}</h2>
      <div class="product-price">${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}<strong>${formatPrice(product.price)}</strong></div>
      <p>${product.description}</p>
      <p class="dialog-note">Uma peça especial, embalada com carinho para chegar até você. ♡</p>
      <button class="button button-primary dialog-add" type="button" data-add-to-cart="${product.id}">Adicionar à sacola <span aria-hidden="true">↗</span></button>
    </div>`;
  elements.productDialog.showModal();
}

async function openCheckout() {
  if (!cart.length) return;
  closeCart();
  await accountSessionReady;
  if (!account) {
    checkoutAfterLogin = true;
    openAccount();
    showToast('Entre ou crie sua conta para continuar com segurança.');
    return;
  }
  const summary = cart.map(item => {
    const product = products.find(candidate => candidate.id === item.id);
    return product ? `<div><span>${item.quantity} × ${product.name}</span><strong>${formatPrice(product.price * item.quantity)}</strong></div>` : '';
  }).join('');
  const subtotal = getCartSubtotal();
  const shipping = subtotal >= freeShippingThresholdCents / 100 ? 0 : shippingCostCents / 100;
  const total = (Math.round(subtotal * 100) + Math.round(shipping * 100)) / 100;
  document.getElementById('checkoutSummary').innerHTML = `${summary}<div><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div><div><span>Frete</span><strong>${shipping ? formatPrice(shipping) : 'Grátis'}</strong></div><div class="checkout-total checkout-grand-total"><span>Total do pedido</span><strong>${formatPrice(total)}</strong></div>`;
  const checkoutForm = document.getElementById('checkoutForm');
  if (account) {
    if (!checkoutForm.elements.name.value) checkoutForm.elements.name.value = account.name;
    if (!checkoutForm.elements.email.value) checkoutForm.elements.email.value = account.email;
  }
  elements.checkoutDialog.showModal();
}

function getCartSubtotal() {
  const subtotalCents = cart.reduce((sum, item) => {
    const product = products.find(candidate => candidate.id === item.id);
    return sum + (product ? Math.round(product.price * 100) * item.quantity : 0);
  }, 0);
  return subtotalCents / 100;
}

function updateAccountUI() {
  const signedIn = Boolean(account);
  document.getElementById('accountForm').hidden = signedIn;
  document.getElementById('accountModeToggle').hidden = signedIn;
  document.getElementById('accountSignedIn').hidden = !signedIn;
  document.getElementById('accountEyebrow').textContent = signedIn ? 'SEU PERFIL AMORA' : 'BEM-VINDA À AMORA';
  document.getElementById('accountTitle').innerHTML = signedIn ? 'Que bom ter você <em>aqui</em>' : 'Seu cantinho <em>especial</em>';
  document.getElementById('accountIntro').hidden = signedIn;
  document.getElementById('accountWelcome').textContent = signedIn ? `Olá, ${account.name}! Sua conta está conectada.` : '';
  document.getElementById('accountButton').setAttribute('aria-label', signedIn ? `Perfil de ${account.name}` : 'Entrar na sua conta');
  document.getElementById('accountButton').classList.toggle('is-active', signedIn);
}

function setAccountMode(mode) {
  accountMode = mode;
  const registration = mode === 'register';
  const nameField = document.getElementById('accountNameField');
  const password = document.querySelector('#accountForm [name="password"]');
  nameField.hidden = !registration;
  nameField.querySelector('input').required = registration;
  password.autocomplete = registration ? 'new-password' : 'current-password';
  document.getElementById('accountTitle').innerHTML = registration ? 'Crie seu perfil <em>Amora</em>' : 'Seu cantinho <em>especial</em>';
  document.getElementById('accountIntro').textContent = registration
    ? 'Crie sua conta para acompanhar seus pedidos e comprar com tranquilidade.'
    : 'Entre ou crie sua conta Amora para acompanhar pedidos e finalizar sua compra.';
  document.getElementById('accountEyebrow').textContent = registration ? 'UM MIMO SÓ SEU' : 'BEM-VINDA À AMORA';
  document.getElementById('accountForm').querySelector('.account-submit').innerHTML = registration
    ? 'Criar minha conta <span aria-hidden="true">↗</span>'
    : 'Entrar na minha conta <span aria-hidden="true">↗</span>';
  document.getElementById('accountModeToggle').innerHTML = registration
    ? 'Já tem uma conta? <strong>Entrar</strong>'
    : 'Ainda não tem conta? <strong>Criar conta</strong>';
  password.value = '';
}

async function openAccount() {
  await accountSessionReady;
  updateAccountUI();
  if (!account) setAccountMode('login');
  document.getElementById('accountDialog').showModal();
  if (account) loadCustomerOrders();
}

async function loadCustomerOrders() {
  const message = document.getElementById('customerOrdersMessage');
  const list = document.getElementById('customerOrderList');
  message.textContent = 'Carregando seus pedidos...';
  list.replaceChildren();
  try {
    const result = await requestApi('/api/customer/orders');
    if (!result.orders.length) {
      message.textContent = 'Seus próximos pedidos aparecerão aqui.';
      return;
    }
    message.textContent = '';
    result.orders.forEach(order => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.customerOrder = order.id;
      button.className = 'customer-order-button';
      const orderText = document.createElement('span');
      orderText.textContent = `Pedido ${order.id.slice(0, 8).toUpperCase()}`;
      const status = document.createElement('strong');
      status.textContent = order.status === 'paid' ? 'Pago' : 'Aguardando Pix';
      const total = document.createElement('span');
      total.textContent = formatPrice(order.total_cents / 100);
      button.append(orderText, status, total);
      item.append(button);
      list.append(item);
    });
  } catch (error) {
    message.textContent = 'Não foi possível carregar seus pedidos.';
    showRequestError(error);
  }
}

async function openSavedCustomerOrder(orderId) {
  document.getElementById('accountDialog').close();
  try {
    const result = await requestApi(`/api/orders/${encodeURIComponent(orderId)}/status?pix=1`);
    activeOrderId = result.id;
    document.getElementById('orderReference').textContent = result.id;
    document.getElementById('copyPixButton').disabled = false;
    document.getElementById('orderTitle').innerHTML = result.status === 'paid'
      ? 'Pagamento <em>confirmado</em>'
      : 'Seu Pix está <em>pronto</em>';
    document.getElementById('orderConfirmationText').textContent = result.status === 'paid'
      ? `O pagamento de ${formatPrice(result.totalCents / 100)} foi confirmado pela loja.`
      : `Pague ${formatPrice(result.totalCents / 100)} para ${result.receiverName} usando o QR Code ou código Pix.`;
    document.getElementById('orderPaymentStatus').textContent = result.status === 'paid'
      ? 'Pagamento confirmado pela loja.'
      : 'Aguardando confirmação do pagamento pela loja.';
    const qr = document.getElementById('paymentQr');
    const codeLabel = document.getElementById('pixCodeLabel');
    const copyButton = document.getElementById('copyPixButton');
    qr.hidden = !result.qrCode;
    codeLabel.hidden = !result.pixPayload;
    copyButton.hidden = !result.pixPayload;
    if (result.qrCode) qr.src = result.qrCode;
    if (result.pixPayload) document.getElementById('pixCode').value = result.pixPayload;
    document.getElementById('orderDialog').showModal();
    if (result.status === 'pending') startPaymentStatusPolling();
  } catch (error) {
    showRequestError(error);
  }
}

function restoreCustomerSession() {
  if (window.location.protocol === 'file:') return Promise.resolve();
  return requestApi('/api/customer/session')
    .then(result => {
      account = result.customer;
      updateAccountUI();
    })
    .catch(error => {
      if (error.message !== 'Entre na sua conta para continuar.') {
        console.error('Não foi possível restaurar a sessão da conta.', error);
      }
    });
}

function startPaymentStatusPolling() {
  clearInterval(paymentPollTimer);
  paymentPollAttempts = 0;
  paymentPollTimer = setInterval(() => {
    paymentPollAttempts += 1;
    checkPaymentStatus();
    if (paymentPollAttempts >= 20) {
      clearInterval(paymentPollTimer);
      paymentPollTimer = null;
    }
  }, 15000);
}

async function checkPaymentStatus() {
  if (!activeOrderId) return;
  const button = document.getElementById('checkPaymentButton');
  button.disabled = true;
  try {
    const result = await requestApi(`/api/orders/${encodeURIComponent(activeOrderId)}/status`);
    if (result.status === 'paid') {
      document.getElementById('orderTitle').innerHTML = 'Pagamento <em>confirmado</em>';
      document.getElementById('orderConfirmationText').textContent =
        'A loja confirmou o recebimento do seu Pix. Em breve, seu pedido seguirá para preparação.';
      document.getElementById('orderPaymentStatus').textContent = 'Pagamento confirmado pela loja.';
      clearInterval(paymentPollTimer);
      paymentPollTimer = null;
    } else {
      document.getElementById('orderPaymentStatus').textContent =
        'Ainda aguardando confirmação do Pix pela loja. A confirmação é feita após conferência do crédito no banco.';
    }
  } catch (error) {
    showRequestError(error);
  } finally {
    button.disabled = false;
  }
}

function chooseCategory(category) {
  activeCategory = categories.some(item => item.id === category) ? category : 'todos';
  favoritesOnly = false;
  document.getElementById('favoritesButton').classList.remove('is-active');
  document.getElementById('favoritesButton').setAttribute('aria-pressed', 'false');
  renderProducts();
}

document.addEventListener('click', event => {
  const customerOrder = event.target.closest('[data-customer-order]');
  if (customerOrder) {
    openSavedCustomerOrder(customerOrder.dataset.customerOrder);
    return;
  }
  const filter = event.target.closest('[data-filter]');
  if (filter) {
    chooseCategory(filter.dataset.filter);
    return;
  }
  const categoryLink = event.target.closest('[data-category-link]');
  if (categoryLink) {
    chooseCategory(categoryLink.dataset.categoryLink);
    document.getElementById('mainNav').classList.remove('menu-open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
    document.getElementById('menuToggle').setAttribute('aria-label', 'Abrir menu');
    return;
  }
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favorite);
    return;
  }
  const addButton = event.target.closest('[data-add-to-cart]');
  if (addButton) {
    event.stopPropagation();
    addToCart(addButton.dataset.addToCart);
    if (elements.productDialog.open) elements.productDialog.close();
    return;
  }
  const quantityButton = event.target.closest('[data-quantity]');
  if (quantityButton) {
    changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
    return;
  }
  const removeButton = event.target.closest('[data-remove]');
  if (removeButton) {
    removeFromCart(removeButton.dataset.remove);
    return;
  }
  const productCard = event.target.closest('[data-open-product]');
  if (productCard) {
    openProduct(productCard.dataset.openProduct);
    return;
  }
  if (event.target.closest('[data-close-dialog]')) {
    event.target.closest('dialog').close();
    return;
  }
  if (event.target.closest('#mainNav a')) {
    const mainNav = document.getElementById('mainNav');
    const menuToggle = document.getElementById('menuToggle');
    mainNav.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  }
});

document.getElementById('searchInput').addEventListener('input', event => {
  searchTerm = event.target.value.trim();
  favoritesOnly = false;
  document.getElementById('favoritesButton').classList.remove('is-active');
  document.getElementById('favoritesButton').setAttribute('aria-pressed', 'false');
  renderProducts();
});

document.getElementById('sortSelect').addEventListener('change', renderProducts);
document.getElementById('cartButton').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('continueShopping').addEventListener('click', closeCart);
elements.overlay.addEventListener('click', closeCart);
document.getElementById('checkoutButton').addEventListener('click', openCheckout);

document.getElementById('favoritesButton').addEventListener('click', () => {
  favoritesOnly = !favoritesOnly;
  activeCategory = 'todos';
  searchTerm = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('favoritesButton').classList.toggle('is-active', favoritesOnly);
  document.getElementById('favoritesButton').setAttribute('aria-pressed', String(favoritesOnly));
  renderProducts();
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  document.getElementById('loja').scrollIntoView({ behavior });
});

document.getElementById('resetFilters').addEventListener('click', () => {
  favoritesOnly = false;
  activeCategory = 'todos';
  searchTerm = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('favoritesButton').classList.remove('is-active');
  document.getElementById('favoritesButton').setAttribute('aria-pressed', 'false');
  renderProducts();
});

document.getElementById('menuToggle').addEventListener('click', event => {
  const isOpen = document.getElementById('mainNav').classList.toggle('menu-open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
  event.currentTarget.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.getElementById('accountButton').addEventListener('click', openAccount);
document.getElementById('accountModeToggle').addEventListener('click', () => {
  setAccountMode(accountMode === 'login' ? 'register' : 'login');
});
document.getElementById('accountForm').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const registration = accountMode === 'register';
  const endpoint = registration ? '/api/customer/register' : '/api/customer/login';
  const body = {
    email: form.elements.email.value.trim().toLowerCase(),
    password: form.elements.password.value,
  };
  if (registration) body.name = form.elements.name.value.trim();
  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;
  try {
    const result = await requestApi(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    account = result.customer;
    const continueToCheckout = checkoutAfterLogin;
    checkoutAfterLogin = false;
    form.reset();
    updateAccountUI();
    document.getElementById('accountDialog').close();
    showToast(registration ? 'Sua conta Amora foi criada ♡' : 'Que bom ter você de volta ♡');
    if (continueToCheckout) {
      openCart();
      openCheckout();
    }
  } catch (error) {
    showRequestError(error);
  } finally {
    submitButton.disabled = false;
  }
});
document.getElementById('accountLogout').addEventListener('click', async () => {
  try {
    await requestApi('/api/customer/logout', { method: 'POST' });
    account = null;
    updateAccountUI();
    document.getElementById('accountDialog').close();
    showToast('Você saiu da sua conta.');
  } catch (error) {
    showRequestError(error);
  }
});
document.getElementById('accountDialog').addEventListener('close', () => {
  if (!account) checkoutAfterLogin = false;
});

document.getElementById('newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('newsletterMessage').textContent = 'Obrigada pelo carinho! Esta prévia não envia mensagens.';
  event.currentTarget.reset();
});

document.querySelector('[name="giftWrap"]').addEventListener('change', event => {
  document.getElementById('giftMessageLabel').hidden = !event.currentTarget.checked;
});

document.getElementById('checkoutForm').addEventListener('submit', async event => {
  event.preventDefault();
  if (!cart.length) {
    elements.checkoutDialog.close();
    showToast('Sua sacola está vazia. Escolha uma peça para continuar.');
    return;
  }
  const form = event.currentTarget;
  const checkoutButton = form.querySelector('[type="submit"]');
  checkoutButton.disabled = true;
  try {
    const result = await requestApi('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
        address: {
          cep: form.elements.cep.value.trim(),
          street: form.elements.street.value.trim(),
          number: form.elements.number.value.trim(),
          complement: form.elements.complement.value.trim(),
          neighborhood: form.elements.neighborhood.value.trim(),
          city: form.elements.city.value.trim(),
          state: form.elements.state.value.trim().toUpperCase(),
          giftWrap: form.elements.giftWrap.checked,
          giftMessage: form.elements.giftWrap.checked ? form.elements.giftMessage.value.trim() : '',
        },
      }),
    });
    const total = result.totalCents / 100;
    const qr = document.getElementById('paymentQr');
    qr.src = result.qrCode;
    qr.hidden = false;
    document.getElementById('pixCode').value = result.pixPayload;
    document.getElementById('pixCodeLabel').hidden = false;
    document.getElementById('copyPixButton').hidden = false;
    document.getElementById('orderTitle').innerHTML = 'Seu Pix está <em>pronto</em>';
    document.getElementById('orderConfirmationText').textContent =
      `Pedido criado. Pague ${formatPrice(total)} para ${result.receiverName} usando o QR Code ou o código Pix abaixo.`;
    document.getElementById('orderReference').textContent = result.orderId;
    document.getElementById('orderPaymentStatus').textContent =
      'Aguardando pagamento. O pedido só será separado após o crédito ser confirmado pela loja.';
    document.getElementById('copyPixButton').disabled = false;
    activeOrderId = result.orderId;
    cart = [];
    saveState();
    renderCart();
    elements.checkoutDialog.close();
    form.reset();
    document.getElementById('giftMessageLabel').hidden = true;
    document.getElementById('orderDialog').showModal();
    startPaymentStatusPolling();
  } catch (error) {
    showRequestError(error);
  } finally {
    checkoutButton.disabled = false;
  }
});

document.getElementById('closeOrderDialog').addEventListener('click', () => {
  document.getElementById('orderDialog').close();
});
document.getElementById('orderDialog').addEventListener('close', () => {
  clearInterval(paymentPollTimer);
  paymentPollTimer = null;
});
document.getElementById('copyPixButton').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(document.getElementById('pixCode').value);
    button.textContent = 'Código Pix copiado';
  } catch (error) {
    console.error('Não foi possível copiar o código Pix.', error);
    showToast('Não foi possível copiar. Selecione e copie o código Pix manualmente.');
  }
});
document.getElementById('checkPaymentButton').addEventListener('click', checkPaymentStatus);

document.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallback) return;
  image.dataset.fallback = 'true';
  const label = image.alt || 'Amora';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720"><rect width="600" height="720" fill="#f3e9e5"/><circle cx="300" cy="280" r="92" fill="none" stroke="#b99362" stroke-width="3"/><path d="M260 280c20-29 60-29 80 0-20 30-60 30-80 0Z" fill="none" stroke="#702d3d" stroke-width="3"/><text x="300" y="430" fill="#702d3d" font-family="Georgia,serif" font-size="35" text-anchor="middle">${label.replace(/[<>&"']/g, '')}</text><text x="300" y="485" fill="#a0776c" font-family="Arial,sans-serif" font-size="16" letter-spacing="5" text-anchor="middle">AMORA</text></svg>`;
  image.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}, true);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && elements.cartDrawer.classList.contains('open')) closeCart();
  if (event.key === 'Escape' && document.getElementById('mainNav').classList.contains('menu-open')) {
    const menuToggle = document.getElementById('menuToggle');
    document.getElementById('mainNav').classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.focus();
  }
  if (event.key === 'Tab' && elements.cartDrawer.classList.contains('open')) {
    const focusable = [...elements.cartDrawer.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])')]
      .filter(element => !element.closest('[hidden]') && !element.closest('[inert]'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

elements.cartDrawer.inert = true;
document.getElementById('currentYear').textContent = new Date().getFullYear();
accountSessionReady = restoreCustomerSession();
renderProducts();
renderCart();
