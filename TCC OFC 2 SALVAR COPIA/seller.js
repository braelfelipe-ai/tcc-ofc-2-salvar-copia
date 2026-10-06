const loginPanel = document.getElementById('loginPanel');
const ordersPanel = document.getElementById('ordersPanel');
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const loginError = document.getElementById('loginError');
const dashboardError = document.getElementById('dashboardError');
const logoutButton = document.getElementById('logoutButton');
const refreshButton = document.getElementById('refreshButton');
const ordersList = document.getElementById('ordersList');

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function formatMoney(cents) {
  return (Number(cents) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(date));
}

function showLogin(error = '') {
  loginPanel.hidden = false;
  ordersPanel.hidden = true;
  logoutButton.hidden = true;
  loginError.textContent = error;
  loginError.hidden = !error;
}

function statusLabel(status) {
  return status === 'paid' ? 'Pago — conferido pelo vendedor' : 'Aguardando pagamento';
}

function renderOrders(orders) {
  if (!orders.length) {
    ordersList.innerHTML = '<p class="muted">Nenhum pedido ainda.</p>';
    return;
  }

  ordersList.innerHTML = orders.map(order => {
    const address = order.address || {};
    const items = Array.isArray(order.items) ? order.items : [];
    return `
      <article class="order">
        <div class="order-head">
          <div>
            <strong>ID do pedido</strong>
            <div class="order-id">${escapeHtml(order.id)}</div>
            <p class="muted" style="margin:6px 0 0">Criado ${escapeHtml(formatDate(order.created_at))}</p>
          </div>
          <div>
            <div class="amount">${escapeHtml(formatMoney(order.total_cents))}</div>
            <span class="${order.status === 'paid' ? 'paid' : 'pending'}">${escapeHtml(statusLabel(order.status))}</span>
          </div>
        </div>
        <div class="order-details">
          <div>
            <strong>Cliente</strong>
            <p>${escapeHtml(order.customer_name)}</p>
            <p>${escapeHtml(order.customer_email)}</p>
          </div>
          <div>
            <strong>Entrega</strong>
            <p>${escapeHtml(address.street)}, ${escapeHtml(address.number)} ${escapeHtml(address.complement)}</p>
            <p>${escapeHtml(address.neighborhood)} · ${escapeHtml(address.city)}/${escapeHtml(address.state)}</p>
            <p>CEP ${escapeHtml(address.cep)}</p>
            <p>${address.giftWrap ? 'Embalagem para presente solicitada.' : 'Sem embalagem para presente.'}</p>
            ${address.giftMessage ? `<p><strong>Recado:</strong> ${escapeHtml(address.giftMessage)}</p>` : ''}
          </div>
          <div>
            <strong>Itens</strong>
            <ul class="items">${items.map(item => `
              <li>${escapeHtml(item.title)}${item.selectedSize ? ` — tam. ${escapeHtml(item.selectedSize)}` : ''} × ${escapeHtml(item.quantity)}</li>
            `).join('')}</ul>
          </div>
        </div>
        <p><strong>Subtotal:</strong> ${escapeHtml(formatMoney(order.subtotal_cents))} · <strong>Frete:</strong> ${escapeHtml(formatMoney(order.shipping_cents))}</p>
        <p><strong>Identificador Pix:</strong> <span class="order-id">${escapeHtml(order.pix_txid || '—')}</span></p>
        ${order.status === 'pending' ? `
          <button type="button" data-confirm-order="${escapeHtml(order.id)}" data-confirm-total="${escapeHtml(order.total_cents)}">Conferi no banco — marcar como pago</button>
        ` : `<p class="muted">Pagamento conferido ${escapeHtml(formatDate(order.paid_at))}</p>`}
      </article>`;
  }).join('');
}

async function loadOrders() {
  dashboardError.hidden = true;
  const response = await fetch('/api/seller/orders');
  if (response.status === 401) return showLogin('Sua sessão expirou. Entre novamente.');
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.error || 'Não foi possível carregar os pedidos.');
    if (ordersPanel.hidden) showLogin(error.message);
    throw error;
  }
  loginPanel.hidden = true;
  ordersPanel.hidden = false;
  logoutButton.hidden = false;
  renderOrders(data.orders);
}

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  loginButton.disabled = true;
  loginError.hidden = true;
  try {
    const response = await fetch('/api/seller/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: document.getElementById('sellerPassword').value })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Não foi possível entrar.');
    document.getElementById('sellerPassword').value = '';
    await loadOrders();
  } catch (error) {
    showLogin(error.message);
  } finally {
    loginButton.disabled = false;
  }
});

refreshButton.addEventListener('click', async () => {
  refreshButton.disabled = true;
  try {
    await loadOrders();
  } catch (error) {
    dashboardError.textContent = error.message;
    dashboardError.hidden = false;
  } finally {
    refreshButton.disabled = false;
  }
});

ordersList.addEventListener('click', async event => {
  const button = event.target.closest('[data-confirm-order]');
  if (!button) return;
  const orderId = button.dataset.confirmOrder;
  if (!window.confirm(`Confirme que ${formatMoney(button.dataset.confirmTotal)} foi creditado no extrato do banco para o pedido ${orderId}?`)) return;

  button.disabled = true;
  dashboardError.hidden = true;
  try {
    const response = await fetch(`/api/seller/orders/${encodeURIComponent(orderId)}/confirm-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ confirmedReceived: true })
    });
    const data = response.status === 204 ? {} : await response.json();
    if (!response.ok) throw new Error(data.error || 'Não foi possível confirmar o pagamento.');
    await loadOrders();
  } catch (error) {
    dashboardError.textContent = error.message;
    dashboardError.hidden = false;
    button.disabled = false;
  }
});

logoutButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/seller/logout', { method: 'POST' });
    if (!response.ok) throw new Error('Não foi possível encerrar a sessão.');
    showLogin();
  } catch (error) {
    dashboardError.textContent = error.message;
    dashboardError.hidden = false;
  }
});

loadOrders().catch(error => {
  dashboardError.textContent = error.message;
  dashboardError.hidden = false;
});
