(function initializeCatalog() {
const products = [
  { id: 1, name: 'Colar Elo do Sol', category: 'colares', price: 89.9, oldPrice: 119.9, badge: 'MAIS AMADO', image: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=900&q=85', description: 'Um colar dourado de elos delicados que traz um brilho especial para todos os seus dias.', featured: true },
  { id: 2, name: 'Brinco Gota de Luz', category: 'brincos', price: 59.9, oldPrice: null, badge: 'NOVO', image: 'https://images.unsplash.com/photo-1727791865934-5a72e29f5345?auto=format&fit=crop&w=900&q=85', description: 'Brincos luminosos com formato de gota: leves, charmosos e perfeitos do café ao jantar.', featured: true },
  { id: 3, name: 'Pulseira Laço Dourado', category: 'pulseiras', price: 69.9, oldPrice: 84.9, badge: null, image: 'https://images.unsplash.com/photo-1708221235482-a6e2a807198f?auto=format&fit=crop&w=900&q=85', description: 'Uma pulseira graciosa de acabamento dourado que combina delicadeza com personalidade.', featured: true },
  { id: 4, name: 'Anel Aurora', category: 'aneis', price: 49.9, oldPrice: null, badge: null, image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=900&q=85', description: 'Um anel marcante na medida certa, com design atemporal para usar sozinho ou em composições.', featured: true },
  { id: 5, name: 'Colar Coração Guardado', category: 'colares', price: 79.9, oldPrice: null, badge: 'NOVO', image: 'https://images.unsplash.com/photo-1705326452390-3ecf6070595f?auto=format&fit=crop&w=900&q=85', description: 'Um pequeno coração dourado para levar junto as pessoas e os momentos que fazem bem.', featured: false },
  { id: 6, name: 'Argola Serena', category: 'brincos', price: 54.9, oldPrice: 69.9, badge: 'QUERIDINHO', image: 'https://images.unsplash.com/photo-1701777892740-88419a701472?auto=format&fit=crop&w=900&q=85', description: 'Argolas clássicas de presença delicada, feitas para acompanhar você sem pedir ocasião.', featured: true },
  { id: 7, name: 'Mix de Pulseiras Florir', category: 'pulseiras', price: 99.9, oldPrice: null, badge: null, image: 'https://images.unsplash.com/photo-1679156271456-d6068c543ee7?auto=format&fit=crop&w=900&q=85', description: 'Um conjunto versátil para brincar com texturas e deixar cada movimento mais bonito.', featured: false },
  { id: 8, name: 'Anel Solitário Brisa', category: 'aneis', price: 64.9, oldPrice: null, badge: 'NOVO', image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&w=900&q=85', description: 'Minimalista e delicado, com um detalhe luminoso que conquista logo no primeiro olhar.', featured: false },
  { id: 9, name: 'Colar Camadas de Afeto', category: 'colares', price: 119.9, oldPrice: 149.9, badge: 'EDIÇÃO ESPECIAL', image: 'https://images.unsplash.com/photo-1705326454924-f6777522b030?auto=format&fit=crop&w=900&q=85', description: 'O efeito de camadas que você ama em uma composição pronta para completar o seu look.', featured: true },
  { id: 10, name: 'Brinco Flor de Amora', category: 'brincos', price: 74.9, oldPrice: null, badge: null, image: 'https://images.unsplash.com/photo-1701777892770-df3bf8006fd8?auto=format&fit=crop&w=900&q=85', description: 'Inspirado na delicadeza das flores, este brinco acrescenta um toque romântico sem exageros.', featured: false },
  { id: 11, name: 'Pulseira Elos do Tempo', category: 'pulseiras', price: 84.9, oldPrice: null, badge: null, image: 'https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?auto=format&fit=crop&w=900&q=85', description: 'Elos luminosos e design confortável para dar mais charme aos gestos cotidianos.', featured: false },
  { id: 12, name: 'Anéis Encontro', category: 'aneis', price: 89.9, oldPrice: 109.9, badge: 'CONJUNTO', image: 'https://images.unsplash.com/photo-1573575154350-35e29dfd6cdc?auto=format&fit=crop&w=900&q=85', description: 'Um conjunto de anéis delicados que fica lindo combinado e igualmente especial separado.', featured: true },
  { id: 13, name: 'Conjunto Presente de Sol', category: 'conjuntos', price: 139.9, oldPrice: 169.9, badge: 'PARA PRESENTEAR', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=85', description: 'Colar e brincos escolhidos para combinar. Uma surpresa cheia de brilho em uma embalagem especial.', featured: true },
  { id: 14, name: 'Brinco Ponto de Luz', category: 'brincos', price: 39.9, oldPrice: null, badge: null, image: 'https://images.unsplash.com/photo-1705326454933-9685fc6888e1?auto=format&fit=crop&w=900&q=85', description: 'Pequeno no tamanho, grande no charme. Seu novo favorito para usar todos os dias.', featured: false },
  { id: 15, name: 'Colar Lua Mansa', category: 'colares', price: 94.9, oldPrice: null, badge: 'NOVO', image: 'https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?auto=format&fit=crop&w=900&q=85', description: 'Um pingente delicado inspirado na lua, feito para iluminar suas combinações favoritas.', featured: false },
];

const freeShippingThresholdCents = 19900;
const shippingCostCents = 1490;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products: new Map(products.map(product => [
      product.id,
      { title: product.name, priceCents: Math.round(product.price * 100) }
    ])),
    freeShippingThresholdCents,
    shippingCostCents
  };
} else {
  window.AMORA_CATALOG = { products, freeShippingThresholdCents, shippingCostCents };
}
})();
