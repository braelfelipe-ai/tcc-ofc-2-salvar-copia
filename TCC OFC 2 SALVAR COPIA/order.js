const { products, freeShippingThresholdCents, shippingCostCents } = require('./catalog');

function isNonEmptyString(value, maxLength = 200) {
  return typeof value === 'string' && value.trim().length > 0 && value.trim().length <= maxLength;
}

function calculateOrder(body, authenticatedCustomer) {
  if (!body || !Array.isArray(body.items) || body.items.length < 1 || body.items.length > 50) {
    return { error: 'Carrinho inválido.' };
  }

  const address = body.address;
  const requiredAddressFields = ['street', 'number', 'city', 'state', 'cep'];
  if (!address || requiredAddressFields.some(field => !isNonEmptyString(address[field], 120)) ||
      !isNonEmptyString(address.neighborhood, 120) ||
      !/^\d{5}-?\d{3}$/.test(address.cep.trim()) ||
      !/^[a-z]{2}$/i.test(address.state.trim())) {
    return { error: 'Informe um endereço de entrega válido.' };
  }
  if (typeof address.giftMessage !== 'undefined' &&
      (typeof address.giftMessage !== 'string' || address.giftMessage.length > 180)) {
    return { error: 'O recado para presente deve ter até 180 caracteres.' };
  }
  if (typeof address.giftWrap !== 'undefined' && typeof address.giftWrap !== 'boolean') {
    return { error: 'A opção de embalagem para presente é inválida.' };
  }

  const items = [];
  for (const rawItem of body.items) {
    const id = Number(rawItem && rawItem.id);
    const quantity = Number(rawItem && rawItem.quantity);
    const product = products.get(id);
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      return { error: 'Há um produto ou uma quantidade inválida no carrinho.' };
    }
    const selectedSize = rawItem.selectedSize == null ? null : String(rawItem.selectedSize).slice(0, 20);
    items.push({
      id,
      title: product.title,
      quantity,
      selectedSize,
      unitPriceCents: product.priceCents,
      lineTotalCents: product.priceCents * quantity
    });
  }

  const subtotalCents = items.reduce((sum, item) => sum + item.lineTotalCents, 0);
  const discountCents = 0;
  let shippingCents = subtotalCents >= freeShippingThresholdCents ? 0 : shippingCostCents;

  return {
    customer: { name: authenticatedCustomer.name, email: authenticatedCustomer.email },
    address: {
      name: String(address.name || authenticatedCustomer.name).trim().slice(0, 120),
      cep: address.cep.trim(),
      street: address.street.trim(),
      number: address.number.trim(),
      complement: String(address.complement || '').trim().slice(0, 120),
      neighborhood: address.neighborhood.trim(),
      city: address.city.trim(),
      state: address.state.trim().toUpperCase(),
      giftWrap: address.giftWrap === true,
      giftMessage: String(address.giftMessage || '').trim()
    },
    items,
    subtotalCents,
    discountCents: 0,
    shippingCents,
    totalCents: subtotalCents - discountCents + shippingCents
  };
}

module.exports = { calculateOrder };
