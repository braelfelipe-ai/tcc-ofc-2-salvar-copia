const products = [
  { id:1,  name:'Air Max 90 Premium',       category:'tenis',     gender:'masculino', price:599.99, originalPrice:799.99, description:'Tênis clássico icônico com amortecimento Air Max de alta responsividade. Cabedal em couro premium, solado em borracha resistente e lingueta acolchoada para conforto total.', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'], rating:4.8, reviews:245, badge:'25% OFF',    featured:true,  bestseller:true,  stock:12, sizes:['38','39','40','41','42','43','44'], colors:['Preto','Branco','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','Branco':'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'} },
  { id:2,  name:'Nike Zoom Pegasus 40',      category:'tenis',     gender:'masculino', price:549.99, originalPrice:749.99, description:'Amortecimento Zoom Air responsivo, ideal para corridas de longa distância. Cabedal em mesh respirável e solado com entressola React.', image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80', images:['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'], rating:4.7, reviews:189, badge:'NOVO', featured:true, bestseller:false, stock:8, sizes:['38','39','40','41','42','43'], colors:['Azul','Preto'],
    colorImages:{'Azul':'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'} },
  { id:3,  name:'Camiseta Dri-FIT Pro',      category:'camisetas', gender:'masculino', price:149.99, originalPrice:199.99, description:'Tecnologia Dri-FIT para máxima respirabilidade durante o treino. Tecido ultra-leve, costura plana e proteção UV 50+.', image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', images:['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80'], rating:4.6, reviews:156, badge:null, featured:true, bestseller:false, stock:25, sizes:['P','M','G','GG'], colors:['Preto','Branco','Azul'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80','Branco':'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','Azul':'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80'} },
  { id:4,  name:'Short Training Elite',      category:'shorts',    gender:'masculino', price:179.99, originalPrice:249.99, description:'Short de treino com tecnologia anti-odor, elástico interno e bolso lateral com zíper.', image:'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80', images:['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80'], rating:4.5, reviews:201, badge:'PROMOÇÃO', featured:false, bestseller:false, stock:18, sizes:['P','M','G','GG'], colors:['Preto','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80'} },
  { id:5,  name:'Moletom Essentials Heavy',  category:'hoodies',   gender:'masculino', price:299.99, originalPrice:399.99, description:'Moletom de algodão 400g com capuz, bolso canguru e ribana dupla nas mangas. Caimento oversized e acabamento premium.', image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80', images:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80'], rating:4.7, reviews:267, badge:null, featured:true, bestseller:false, stock:15, sizes:['P','M','G','GG'], colors:['Preto','Cinza','Branco'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80','Branco':'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80'} },
  { id:6,  name:'Legging Sculpt Pro',        category:'calcas',    gender:'feminino',  price:249.99, originalPrice:349.99, description:'Legging cintura alta com suporte máximo, tecido sculpt compressivo e bolso lateral.', image:'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80', images:['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'], rating:4.8, reviews:421, badge:'BEST SELLER', featured:true, bestseller:true, stock:22, sizes:['PP','P','M','G'], colors:['Preto','Roxo','Azul'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80','Roxo':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80','Azul':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80'} },
  { id:7,  name:'Tênis Revolution 7 Fem.',   category:'tenis',     gender:'feminino',  price:279.99, originalPrice:399.99, description:'Tênis leve e confortável para uso diário. Cabedal em mesh respirável, palmilha removível e solado antiderrapante.', image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80', images:['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'], rating:4.6, reviews:178, badge:'30% OFF', featured:false, bestseller:false, stock:10, sizes:['35','36','37','38','39','40'], colors:['Rosa','Branco','Preto'],
    colorImages:{'Rosa':'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80','Branco':'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80','Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'} },
  { id:8,  name:'Boné Futura Washed',        category:'acessorios',gender:'unissex',   price:99.99,  originalPrice:149.99, description:'Boné estruturado com lavagem especial, ajuste traseiro de metal e bordado frontal em relevo.', image:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80', images:['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80'], rating:4.5, reviews:134, badge:null, featured:false, bestseller:false, stock:35, sizes:['Único'], colors:['Preto','Branco','Bege'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80','Branco':'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80','Bege':'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80'} },
  { id:9,  name:'Mochila Elite Pro 30L',     category:'acessorios',gender:'unissex',   price:349.99, originalPrice:499.99, description:'Mochila premium 30 litros com compartimento acolchoado para notebook 15", alças ergonômicas e sistema de ventilação nas costas.', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'], rating:4.7, reviews:289, badge:null, featured:false, bestseller:false, stock:12, sizes:['Único'], colors:['Preto','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'} },
  { id:10, name:'Camiseta Sport Fit Fem.',   category:'camisetas', gender:'feminino',  price:89.99,  originalPrice:129.99, description:'Camiseta fitness com corte feminino, recortes laterais e tecido micro-perfurado para máxima ventilação.', image:'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80', images:['https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80'], rating:4.5, reviews:203, badge:null, featured:false, bestseller:false, stock:30, sizes:['PP','P','M','G'], colors:['Rosa','Branco','Azul'],
    colorImages:{'Rosa':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80','Branco':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80','Azul':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'} },
  { id:11, name:'Tênis Air Force 1 Low',     category:'tenis',     gender:'unissex',   price:699.99, originalPrice:899.99, description:'O clássico que nunca sai de moda. Cabedal em couro legítimo, solado Air e palmilha de espuma para conforto o dia todo.', image:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80', images:['https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80'], rating:4.9, reviews:512, badge:'LANÇAMENTO', featured:true, bestseller:false, stock:20, sizes:['36','37','38','39','40','41','42','43'], colors:['Branco','Preto'],
    colorImages:{'Branco':'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80','Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'} },
  { id:12, name:'Relógio GPS Sport Pro',     category:'acessorios',gender:'unissex',   price:899.99, originalPrice:1199.99, description:'Smartwatch esportivo com GPS integrado, monitor cardíaco, 20 modos de esporte e bateria de 14 dias.', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'], rating:4.9, reviews:342, badge:'PREMIUM', featured:true, bestseller:false, stock:7, sizes:['Único'], colors:['Preto','Grafite','Azul'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','Grafite':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','Azul':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'} },
  { id:13, name:'Tênis Urban Street',        category:'tenis',     gender:'unissex',   price:319.99, originalPrice:459.99, description:'Estilo urbano com conforto de corrida. Solado EVA ultra-leve, palmilha anatômica e cabedal vulcanizado com detalhe vintage.', image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80', images:['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80'], rating:4.5, reviews:234, badge:null, featured:false, bestseller:false, stock:17, sizes:['37','38','39','40','41','42'], colors:['Bege','Branco','Preto'],
    colorImages:{'Bege':'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80','Branco':'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80','Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'} },
  { id:14, name:'Camiseta Oversize Graphic', category:'camisetas', gender:'unissex',   price:129.99, originalPrice:179.99, description:'Camiseta oversized com estampa gráfica exclusiva em serigrafia, tecido 100% algodão penteado.', image:'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80', images:['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80'], rating:4.6, reviews:312, badge:'NOVO', featured:true, bestseller:false, stock:28, sizes:['P','M','G','GG','3G'], colors:['Preto','Branco','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80','Branco':'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80'} },
  { id:15, name:'Conjunto Treino Fem.',      category:'calcas',    gender:'feminino',  price:319.99, originalPrice:449.99, description:'Kit top nadador + legging combinando, tecido sculpt 4-way stretch, costura reforçada e proteção UV 50+.', image:'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80', images:['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'], rating:4.8, reviews:298, badge:'KIT ESPECIAL', featured:false, bestseller:true, stock:14, sizes:['PP','P','M','G'], colors:['Preto','Roxo Escuro','Verde Oliva'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80','Roxo Escuro':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80','Verde Oliva':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80'} },
  { id:16, name:'Garrafa Térmica 750ml',     category:'acessorios',gender:'unissex',   price:119.99, originalPrice:169.99, description:'Garrafa térmica em inox 304 com parede dupla, mantém bebidas frias 24h e quentes 12h. Tampa rosqueável e bico flip-top.', image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80', images:['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80'], rating:4.8, reviews:456, badge:'TOP SELLER', featured:false, bestseller:true, stock:45, sizes:['750ml'], colors:['Preto Matte','Prata','Azul Navy'],
    colorImages:{'Preto Matte':'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80','Prata':'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80','Azul Navy':'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80'} },
  { id:17, name:'Tênis Adidas Forum Low',    category:'tenis',     gender:'unissex',   price:459.99, originalPrice:599.99, description:'Ícone do streetwear dos anos 80 repaginado. Cabedal em couro premium, palmilha EVA com amortecimento e sistema de velcro decorativo na cano.', image:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80', images:['https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80'], rating:4.7, reviews:198, badge:'NOVO', featured:true, bestseller:false, stock:14, sizes:['37','38','39','40','41','42','43'], colors:['Branco','Preto','Vermelho'],
    colorImages:{'Branco':'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80','Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','Vermelho':'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'} },
  { id:18, name:'Calça Cargo Tática',        category:'calcas',    gender:'masculino', price:279.99, originalPrice:389.99, description:'Calça cargo com 8 bolsos funcionais, tecido ripstop resistente, cintura ajustável e design tático urbano.', image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80'], rating:4.6, reviews:143, badge:null, featured:false, bestseller:false, stock:20, sizes:['38','40','42','44','46'], colors:['Verde Militar','Preto','Bege'],
    colorImages:{'Verde Militar':'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80','Preto':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80','Bege':'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80'} },
  { id:19, name:'Top Esportivo Strappy',     category:'camisetas', gender:'feminino',  price:119.99, originalPrice:169.99, description:'Top nadador com alças cruzadas nas costas, sustentação média, tecido compressivo e proteção UV 50+. Ideal para treinos e yoga.', image:'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80', images:['https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80'], rating:4.5, reviews:231, badge:'MAIS VENDIDO', featured:false, bestseller:true, stock:33, sizes:['PP','P','M','G'], colors:['Preto','Rosa Neon','Azul Petróleo'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80','Rosa Neon':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80','Azul Petróleo':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'} },
  { id:20, name:'Tênis Chunky Platform',     category:'tenis',     gender:'feminino',  price:389.99, originalPrice:519.99, description:'Solado tratorado de 5cm com visual bold e moderno. Cabedal em couro sintético premium, forro acolchoado e cadarço duplo.', image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80', images:['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80'], rating:4.8, reviews:167, badge:'TENDÊNCIA', featured:true, bestseller:false, stock:9, sizes:['35','36','37','38','39'], colors:['Preto','Branco','Nude'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','Branco':'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80','Nude':'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80'} },
  { id:21, name:'Moletom Zip-Up Oversized',  category:'hoodies',   gender:'unissex',   price:349.99, originalPrice:479.99, description:'Moletom aberto com zíper YKK, capuz com cordão, dois bolsos laterais e tecido fleece pesado 380g. Caimento oversized perfeito para layering.', image:'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80', images:['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80'], rating:4.7, reviews:189, badge:null, featured:true, bestseller:false, stock:22, sizes:['P','M','G','GG','3G'], colors:['Cinza Mescla','Preto','Off-White'],
    colorImages:{'Cinza Mescla':'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80','Preto':'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80','Off-White':'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80'} },
  { id:22, name:'Shorts Ciclista Slim',      category:'shorts',    gender:'feminino',  price:139.99, originalPrice:199.99, description:'Short ciclista com cós largo de 10cm, tecido suplex liso com compressão leve, costuras planas e acabamento impecável para uso diário ou treino.', image:'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80', images:['https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80'], rating:4.6, reviews:312, badge:'PROMOÇÃO', featured:false, bestseller:true, stock:40, sizes:['PP','P','M','G','GG'], colors:['Preto','Marsala','Verde Militar'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80','Marsala':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80','Verde Militar':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'} },
  { id:23, name:'Camiseta Básica Premium',   category:'camisetas', gender:'masculino', price:79.99,  originalPrice:119.99, description:'Camiseta 100% algodão penteado 30/1 com tingimento reativo, gola careca dupla e costura lateral. O básico que nunca decepciona.', image:'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80', images:['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80'], rating:4.4, reviews:521, badge:'33% OFF', featured:false, bestseller:true, stock:60, sizes:['P','M','G','GG','3G'], colors:['Branco','Preto','Cinza','Azul Marinho','Verde'],
    colorImages:{'Branco':'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','Preto':'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80','Azul Marinho':'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80','Verde':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80'} },
  { id:24, name:'Tênis Running Ultra',       category:'tenis',     gender:'masculino', price:649.99, originalPrice:849.99, description:'Amortecimento de última geração com entressola BOOST, cabedal Primeknit respirável e placa de fibra de carbono para máximo retorno de energia.', image:'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80', images:['https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80'], rating:4.9, reviews:88, badge:'PREMIUM', featured:true, bestseller:false, stock:6, sizes:['39','40','41','42','43','44'], colors:['Preto/Laranja','Branco/Azul'],
    colorImages:{'Preto/Laranja':'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80','Branco/Azul':'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'} },
  { id:25, name:'Jaqueta Corta-Vento',       category:'hoodies',   gender:'masculino', price:399.99, originalPrice:549.99, description:'Jaqueta leve impermeável com capuz dobra no colarinho, zíper YKK, bolsos com zíper e logo refletivo. Ideal para corrida e ciclismo urbano.', image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80', images:['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80'], rating:4.7, reviews:134, badge:'NOVO', featured:false, bestseller:false, stock:18, sizes:['P','M','G','GG'], colors:['Preto','Azul Royal','Verde Lima'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80','Azul Royal':'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','Verde Lima':'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80'} },
  { id:26, name:'Bolsa Shoulder Bag',        category:'acessorios',gender:'unissex',   price:189.99, originalPrice:269.99, description:'Shoulder bag compacta em couro vegano com alça ajustável, dois compartimentos internos e fechamento magnético. Perfeita para o dia a dia.', image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80'], rating:4.6, reviews:276, badge:null, featured:false, bestseller:false, stock:25, sizes:['Único'], colors:['Preto','Marrom','Bege'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80','Marrom':'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80','Bege':'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80'} },
  { id:27, name:'Legging Camuflada',         category:'calcas',    gender:'feminino',  price:199.99, originalPrice:279.99, description:'Legging cintura alta com estampa camuflada exclusiva, tecido compressivo dupla camada, bolso lateral e costura lateral reforçada.', image:'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80', images:['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'], rating:4.5, reviews:198, badge:'20% OFF', featured:false, bestseller:false, stock:27, sizes:['PP','P','M','G'], colors:['Camuflado Verde','Camuflado Cinza','Preto'],
    colorImages:{'Camuflado Verde':'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80','Camuflado Cinza':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80','Preto':'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80'} },
  { id:28, name:'Tênis Skate Pro Old School', category:'tenis',    gender:'unissex',   price:249.99, originalPrice:349.99, description:'Solado vulcanizado reforçado, palmilha Ultracush HD para absorção de impacto e cabedal em camurça premium. O parceiro ideal para o skate.', image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80', images:['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80'], rating:4.7, reviews:345, badge:null, featured:true, bestseller:true, stock:30, sizes:['37','38','39','40','41','42','43'], colors:['Preto','Azul Marinho','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','Azul Marinho':'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'} },
  { id:29, name:'Camiseta Tie-Dye Urban',    category:'camisetas', gender:'unissex',   price:109.99, originalPrice:159.99, description:'Tie-dye artesanal com cada peça única. Tecido 100% algodão ringspun, cores com fixação a frio resistentes a lavagem e caimento levemente oversized.', image:'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80', images:['https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80'], rating:4.4, reviews:267, badge:'EXCLUSIVO', featured:false, bestseller:false, stock:15, sizes:['P','M','G','GG'], colors:['Azul/Verde','Rosa/Roxo','Amarelo/Laranja'],
    colorImages:{'Azul/Verde':'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80','Rosa/Roxo':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80','Amarelo/Laranja':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80'} },
  { id:30, name:'Mochila Slim Notebook 15"', category:'acessorios',gender:'unissex',   price:229.99, originalPrice:319.99, description:'Mochila slim para notebook 15", compartimento frontal organizador, alças acolchoadas, saída USB lateral e tecido resistente a água.', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'], rating:4.6, reviews:189, badge:null, featured:false, bestseller:false, stock:20, sizes:['Único'], colors:['Preto','Grafite','Azul Marinho'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','Grafite':'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','Azul Marinho':'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'} },
  { id:31, name:'Short Tactel Leve',         category:'shorts',    gender:'masculino', price:99.99,  originalPrice:149.99, description:'Short em tactel ultra-leve com forro interno, cós elástico com cadarço, dois bolsos laterais e acabamento premium para praia ou treino.', image:'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80', images:['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80'], rating:4.3, reviews:412, badge:'33% OFF', featured:false, bestseller:true, stock:50, sizes:['P','M','G','GG'], colors:['Preto','Azul','Vinho','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80','Azul':'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80','Vinho':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'} },
  { id:32, name:'Óculos Esportivo UV400',    category:'acessorios',gender:'unissex',   price:149.99, originalPrice:219.99, description:'Armação leve em TR90 flexível, lentes polarizadas com proteção UV400, revestimento espelhado e estojo rígido incluso.', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80', images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80'], rating:4.5, reviews:156, badge:null, featured:false, bestseller:false, stock:28, sizes:['Único'], colors:['Preto Fumê','Azul Espelhado','Dourado'],
    colorImages:{'Preto Fumê':'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80','Azul Espelhado':'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80','Dourado':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'} },
  { id:33, name:'Calça Jogger Moletom',      category:'calcas',    gender:'masculino', price:219.99, originalPrice:299.99, description:'Jogger em moletom 320g com elástico no tornozelo, dois bolsos laterais e um traseiro, cordão ajustável no cós e caimento slim moderno.', image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80'], rating:4.6, reviews:234, badge:null, featured:false, bestseller:false, stock:22, sizes:['P','M','G','GG'], colors:['Cinza Mescla','Preto','Bordo'],
    colorImages:{'Cinza Mescla':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80','Preto':'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80','Bordo':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80'} },
  { id:34, name:'Tênis Slip-On Canvas',      category:'tenis',     gender:'unissex',   price:179.99, originalPrice:249.99, description:'Slip-on em canvas lavável, elástico lateral para fácil calce, palmilha removível Memory Foam e solado de borracha antiderrapante. Leve e prático.', image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80', images:['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80'], rating:4.4, reviews:302, badge:'MAIS VENDIDO', featured:false, bestseller:true, stock:38, sizes:['36','37','38','39','40','41','42'], colors:['Preto','Branco','Navy'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','Branco':'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80','Navy':'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80'} },
  { id:35, name:'Camiseta Polo Dry-Fit',     category:'camisetas', gender:'masculino', price:159.99, originalPrice:219.99, description:'Polo em piquet dry-fit com proteção UV 40+, três botões contrastantes, gola e punhos em ribana e corte regular de alta costura.', image:'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80', images:['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80'], rating:4.5, reviews:178, badge:null, featured:false, bestseller:false, stock:24, sizes:['P','M','G','GG'], colors:['Branco','Preto','Azul Marinho','Verde'],
    colorImages:{'Branco':'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','Preto':'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80','Azul Marinho':'https://images.unsplash.com/photo-1503342452485-86b1cd2f6ef4?w=600&q=80','Verde':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80'} },
  { id:36, name:'Pulseira Esportiva Smart',  category:'acessorios',gender:'unissex',   price:299.99, originalPrice:429.99, description:'Pulseira fitness com monitor cardíaco, contador de passos, sono e calorias, notificações do smartphone e resistência à água ATM5. Bateria de 7 dias.', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'], rating:4.6, reviews:234, badge:'NOVO', featured:true, bestseller:false, stock:12, sizes:['Único'], colors:['Preto','Azul','Rosa'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','Azul':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','Rosa':'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'} },
  { id:37, name:'Jaqueta Jeans Destroyed',   category:'hoodies',   gender:'unissex',   price:329.99, originalPrice:469.99, description:'Jaqueta jeans com efeito destroyed e puídos artesanais, lavagem stone, bolsos frontais e internos e caimento reto oversize.', image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80', images:['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80'], rating:4.6, reviews:145, badge:'TENDÊNCIA', featured:true, bestseller:false, stock:11, sizes:['P','M','G','GG'], colors:['Azul Claro','Azul Escuro','Preto'],
    colorImages:{'Azul Claro':'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80','Azul Escuro':'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80','Preto':'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80'} },
  { id:38, name:'Short Feminino Ciclista Pb',category:'shorts',    gender:'feminino',  price:129.99, originalPrice:179.99, description:'Ciclista longo com cós franzido e detalhe de franzido lateral, tecido ponto roma leve e confortável, ideal para o dia a dia casual.', image:'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80', images:['https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80'], rating:4.5, reviews:289, badge:null, featured:false, bestseller:false, stock:35, sizes:['PP','P','M','G'], colors:['Preto','Branco','Nude'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80','Branco':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80','Nude':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'} },
  { id:39, name:'Tênis Trail Running GTX',   category:'tenis',     gender:'masculino', price:729.99, originalPrice:949.99, description:'Gore-Tex waterproof, solado Vibram com travas multiangulares, proteção na ponta e tornozelo reforçado. Para trilhas e terrenos desafiadores.', image:'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80', images:['https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80'], rating:4.9, reviews:67, badge:'PREMIUM', featured:true, bestseller:false, stock:5, sizes:['39','40','41','42','43'], colors:['Laranja/Preto','Verde/Cinza'],
    colorImages:{'Laranja/Preto':'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80','Verde/Cinza':'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80'} },
  { id:40, name:'Calça Wide Leg Feminina',   category:'calcas',    gender:'feminino',  price:239.99, originalPrice:329.99, description:'Wide leg de alfaiataria em crepe com cós de elástico embutido, pernas largas e comprimento ideal para usar com tênis ou salto.', image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80'], rating:4.7, reviews:178, badge:'NOVO', featured:false, bestseller:false, stock:18, sizes:['34','36','38','40','42'], colors:['Preto','Bege','Cinza'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80','Bege':'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80','Cinza':'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=600&q=80'} },
  { id:41, name:'Toalha Microfibra Sport',   category:'acessorios',gender:'unissex',   price:59.99,  originalPrice:89.99, description:'Toalha de microfibra de secagem rápida, 70x140cm, absorção 3x superior ao algodão, leve e compacta. Acompanha bolsa com zíper.', image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80', images:['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80'], rating:4.3, reviews:398, badge:null, featured:false, bestseller:false, stock:70, sizes:['Único'], colors:['Preto','Azul','Vermelho'],
    colorImages:{'Preto':'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80','Azul':'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80','Vermelho':'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80'} },
  { id:42, name:'Moletom Cropped Feminino',  category:'hoodies',   gender:'feminino',  price:249.99, originalPrice:339.99, description:'Moletom cropped em algodão 300g com capuz, cordão e punhos em ribana. Caimento oversized e comprimento que define a cintura.', image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80', images:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80'], rating:4.8, reviews:312, badge:'MAIS VENDIDO', featured:true, bestseller:true, stock:20, sizes:['PP','P','M','G'], colors:['Rosa','Lilás','Preto','Off-White'],
    colorImages:{'Rosa':'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80','Lilás':'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80','Preto':'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80','Off-White':'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80'} }
];

const categories = [
  { id:'camisetas', name:'Camisetas',  image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id:'shorts',    name:'Shorts',     image:'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80' },
  { id:'tenis',     name:'Tênis',      image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
  { id:'hoodies',   name:'Moletons',   image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80' },
  { id:'calcas',    name:'Calças',     image:'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80' },
  { id:'acessorios',name:'Acessórios', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' }
];

/* ─── CUPONS ─── */
const COUPONS = {
  'URBAN10': { type:'percent', value:10, desc:'10% de desconto' },
  'FLOW15':  { type:'percent', value:15, desc:'15% de desconto' },
  'PROMO20': { type:'fixed',   value:20, desc:'R$ 20,00 de desconto' },
  'FRETE':   { type:'shipping',          desc:'Frete grátis' }
};

/* ─── AVALIAÇÕES INICIAIS ─── */
const INITIAL_REVIEWS = {
  1: [
    { user:'Marcos R.', city:'São Paulo, SP', rating:5, text:'Produto incrível! Qualidade premium, chegou em 2 dias. Valeu cada centavo!', date:'2026-03-15', verified:true },
    { user:'Pedro A.',  city:'Belo Horizonte, MG', rating:4, text:'Muito bom, fiquei feliz com a qualidade. Demorou 4 dias úteis.', date:'2026-02-20', verified:true }
  ],
  6: [
    { user:'Camila F.', city:'Curitiba, PR', rating:5, text:'Legging perfeita! Cintura alta que não cede, tecido premium.', date:'2026-03-20', verified:true },
    { user:'Ana S.',    city:'Porto Alegre, RS', rating:5, text:'Comprei na G e ficou ótimo. Recomendo muito!', date:'2026-03-10', verified:true }
  ],
  11: [
    { user:'Lucas A.',  city:'Salvador, BA', rating:5, text:'O clássico que nunca decepciona! Original e muito confortável.', date:'2026-04-01', verified:true },
    { user:'Julia S.',  city:'Rio de Janeiro, RJ', rating:5, text:'Presentei meu namorado e ele amou. Chegou em perfeito estado.', date:'2026-03-25', verified:true },
    { user:'Rodrigo P.',city:'Brasília, DF', rating:4, text:'Produto original, entrega rápida. Só achei o preço um pouco alto.', date:'2026-03-10', verified:false }
  ],
  12: [
    { user:'Felipe T.', city:'Florianópolis, SC', rating:5, text:'Smartwatch incrível! GPS preciso e bateria dura mesmo 14 dias.', date:'2026-04-05', verified:true }
  ]
};

const TOAST_NAMES = ['Ana S.','Carlos M.','Beatriz R.','Felipe T.','Juliana K.','Rodrigo P.','Larissa V.','Thiago N.','Camila F.','Lucas A.'];
const TOAST_CITIES = ['SP','RJ','BH','Curitiba','Porto Alegre','Salvador','Fortaleza','Recife'];

/* ─────────────────────────── SVGs ─────────────────────────── */
const HEART_ACTIVE = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#ff4d6d"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
const HEART_EMPTY  = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#bdbdbd" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

/* ─────────────────────────── ESTADO ─────────────────────────── */
let cart           = JSON.parse(localStorage.getItem('uf_cart'))     || [];
let wishlist       = JSON.parse(localStorage.getItem('uf_wishlist')) || [];
let currentUser    = JSON.parse(localStorage.getItem('uf_user'))     || null;
let orders         = JSON.parse(localStorage.getItem('uf_orders'))   || [];
let reviews        = JSON.parse(localStorage.getItem('uf_reviews'))  || {};
let recentlyViewed = JSON.parse(localStorage.getItem('uf_recent'))   || [];
let appliedCoupon  = null;
let currentFilter  = 'todos';
let currentGender  = 'todos';
let sortBy         = 'relevancia';
let priceMin       = 0;
let priceMax       = 1500;
let selectedProduct = null;
let currentSlide   = 0;
let slideInterval;
let touchStartX    = 0;
let checkoutStep   = 1;
let checkoutData   = { address: {}, payment: { method: 'pix' } };
let reviewRating   = 0;

/* merge avaliações iniciais sem sobrescrever as do usuário */
Object.keys(INITIAL_REVIEWS).forEach(pid => {
  if (!reviews[pid]) reviews[pid] = INITIAL_REVIEWS[pid];
});

/* ═══════════════════════════════════════════════════════════════
   DARK MODE
═══════════════════════════════════════════════════════════════ */
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('uf_dark_mode', isDark ? '1' : '0');
}

function initDarkMode() {
  const saved = localStorage.getItem('uf_dark_mode');
  // Se não tem preferência salva, respeita a preferência do sistema
  const prefersDark = saved !== null
    ? saved === '1'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) document.body.classList.add('dark-mode');
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
function init() {
  initDarkMode();
  renderCategories();
  renderMarketplaceCategories();
  renderSkeletons('featuredProducts', 8);
  renderSkeletons('newProducts', 8);
  setTimeout(() => { renderFeaturedProducts(); renderNewProducts(); }, 700);
  renderFilters();
  updateCartBadge();
  updateWishlistBadge();
  updateUserUI();
  setupEventListeners();
  setupSearch();
  initSlider();
  initScrollEffects();
  initCountdown();
  initSocialToast();
  initScrollReveal();
  initParticles();

  // Restaura a última página visitada e vai pro topo
  const lastPage = localStorage.getItem('uf_current_page') || 'home';
  navigateTo(lastPage);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ═══ SKELETON ═══ */
function skeletonCard() {
  return `<div class="skeleton-card"><div class="skeleton skeleton-img"></div><div class="skeleton-body"><div class="skeleton skeleton-line short"></div><div class="skeleton skeleton-line mid"></div><div class="skeleton skeleton-line full"></div><div class="skeleton skeleton-price"></div><div class="skeleton skeleton-btn"></div></div></div>`;
}
function renderSkeletons(id, n = 8) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = Array(n).fill(skeletonCard()).join('');
}

/* ═══ COUNTDOWN ═══ */
function initCountdown() {
  function tick() {
    const now = new Date(), end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const d = end - now;
    const h = String(Math.floor(d / 3600000)).padStart(2,'0');
    const m = String(Math.floor((d % 3600000) / 60000)).padStart(2,'0');
    const s = String(Math.floor((d % 60000) / 1000)).padStart(2,'0');
    const eh = document.getElementById('cdHours'), em = document.getElementById('cdMinutes'), es = document.getElementById('cdSeconds');
    if (eh) eh.textContent = h;
    if (em) em.textContent = m;
    if (es) es.textContent = s;
  }
  tick(); setInterval(tick, 1000);
}

/* ═══ SOCIAL TOAST ═══ */
let socialToastEnabled = JSON.parse(localStorage.getItem('uf_toast_enabled') ?? 'true');
function initSocialToast() { /* social toast disabled */ }
function showSocialToast() {
  if (!socialToastEnabled) return;
  const p = products[Math.floor(Math.random() * products.length)];
  const name = TOAST_NAMES[Math.floor(Math.random() * TOAST_NAMES.length)];
  const city = TOAST_CITIES[Math.floor(Math.random() * TOAST_CITIES.length)];
  const qty = Math.floor(Math.random() * 14) + 2;
  document.querySelectorAll('.social-toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'social-toast';
  toast.innerHTML = `
    <img class="toast-img" src="${p.image}" alt="${p.name}" loading="lazy">
    <div class="toast-text" style="flex:1;">
      <strong>${name} de ${city}</strong>
      <span>comprou <em>${p.name}</em></span>
      <span style="color:#22c55e;font-size:.73rem;font-weight:600;margin-top:.15rem;">há ${qty} minutos</span>
    </div>
    <button class="toast-gear-btn" title="Desativar notificações" onclick="disableSocialToast(event)" aria-label="Desativar notificações de compra">⚙️</button>
    <div class="toast-dot"></div>`;
  toast.style.cursor = 'pointer';
  toast.querySelector('.toast-text').addEventListener('click', () => { showProductDetail(p.id); removeToast(toast); });
  document.body.appendChild(toast);
  const timer = setTimeout(() => removeToast(toast), 5000);
  toast.addEventListener('mouseenter', () => clearTimeout(timer));
  setTimeout(showSocialToast, 18000 + Math.random() * 12000);
}
function disableSocialToast(e) {
  e.stopPropagation();
  socialToastEnabled = false;
  localStorage.setItem('uf_toast_enabled', 'false');
  document.querySelectorAll('.social-toast').forEach(t => removeToast(t));
  showNotification('🔕 Notificações de compra desativadas');
}
function removeToast(t) {
  if (!t.parentNode) return;
  t.classList.add('hide');
  setTimeout(() => t.remove(), 350);
}

/* ═══ SLIDER ═══ */
function initSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dc = document.getElementById('heroDots');
  dc.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dc.appendChild(dot);
  });
  startSlideTimer();
  const hero = document.getElementById('heroSection');
  hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) changeSlide(diff > 0 ? 1 : -1);
  });
}
function startSlideTimer() {
  clearInterval(slideInterval);
  const prog = document.getElementById('heroProgress');
  if (prog) { prog.style.animation = 'none'; prog.offsetHeight; prog.style.animation = ''; }
  slideInterval = setInterval(() => changeSlide(1), 5000);
}
function changeSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide'), dots = document.querySelectorAll('.hero-dot');
  slides[currentSlide].classList.remove('active'); dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active'); dots[currentSlide].classList.add('active');
  startSlideTimer();
}
function goToSlide(i) {
  const slides = document.querySelectorAll('.hero-slide'), dots = document.querySelectorAll('.hero-dot');
  slides[currentSlide].classList.remove('active'); dots[currentSlide].classList.remove('active');
  currentSlide = i;
  slides[currentSlide].classList.add('active'); dots[currentSlide].classList.add('active');
  startSlideTimer();
}

/* ═══ SCROLL ═══ */
function initScrollEffects() {
  const header = document.getElementById('mainHeader'), bt = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    bt.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
}

/* ═══ MOBILE MENU ═══ */
function openMobileMenu() {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('hamburger').classList.add('open');
  document.getElementById('navOverlay').classList.add('show');
}

function closeMobileMenu() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('show');
}

/* ═══ SEARCH ═══ */
function setupSearch() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  const clearBtn = document.getElementById('searchClear');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    clearBtn.style.display = q ? 'block' : 'none';
    if (!q) { dropdown.classList.remove('show'); return; }
    const res = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 6);
    dropdown.innerHTML = res.length
      ? res.map(p => `<div class="search-result-item" onclick="showProductDetail(${p.id});closeSearch();"><img class="search-result-img" src="${p.image}" alt="${p.name}" loading="lazy"><div><div class="search-result-name">${highlight(p.name, q)}</div><div class="search-result-price">R$ ${p.price.toFixed(2)}</div></div></div>`).join('')
      : `<div class="search-no-results">Nenhum resultado para "<strong>${q}</strong>"</div>`;
    dropdown.classList.add('show');
  });
  clearBtn.addEventListener('click', closeSearch);
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrapper')) closeSearch(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim().toLowerCase();
      if (!q) return;
      closeSearch(); navigateTo('products');
      setTimeout(() => renderProducts(products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))), 80);
    }
    if (e.key === 'Escape') closeSearch();
  });
}
function highlight(text, q) {
  return text.replace(new RegExp(`(${q})`, 'gi'), '<mark style="background:var(--accent-light);color:var(--accent);border-radius:2px;">$1</mark>');
}
function closeSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  document.getElementById('searchDropdown').classList.remove('show');
}

/* ═══ EVENT LISTENERS ═══ */
function setupEventListeners() {
  /* Mega menu */
  const navProdutos = document.getElementById('navProdutos');
  const megaMenu    = document.getElementById('megaMenu');
  if (navProdutos && megaMenu) {
    let megaTimeout;
    const openMega    = () => { clearTimeout(megaTimeout); megaMenu.classList.add('open'); navProdutos.classList.add('mega-open'); };
    const scheduleClose = () => { megaTimeout = setTimeout(closeMega, 180); };
    navProdutos.addEventListener('mouseenter', openMega);
    navProdutos.addEventListener('mouseleave', scheduleClose);
    megaMenu.addEventListener('mouseenter', () => clearTimeout(megaTimeout));
    megaMenu.addEventListener('mouseleave', scheduleClose);
    navProdutos.addEventListener('click', e => { e.preventDefault(); megaMenu.classList.toggle('open'); navProdutos.classList.toggle('mega-open'); });
  }

  document.getElementById('userIcon').addEventListener('click', () => {
    if (!currentUser) {
      // Não logado: abre modal de login direto, centralizado
      openModal();
    } else {
      document.getElementById('userDropdown').classList.toggle('active');
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.user-menu')) document.getElementById('userDropdown').classList.remove('active');
    if (!e.target.closest('.header-left') && !e.target.closest('.mega-menu')) closeMega();
  });
  document.getElementById('authModalClose').addEventListener('click', closeModal);
  document.getElementById('authModal').addEventListener('click', e => { if (e.target === document.getElementById('authModal')) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeSizeModal(); closeShareModal(); closeMega(); }
  });
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  document.getElementById('hamburger').addEventListener('click', () => {
    const isOpen = document.getElementById('mobileNav').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open', isOpen);
    document.getElementById('navOverlay').classList.toggle('show', isOpen);
  });
}

function closeMega() {
  const mm = document.getElementById('megaMenu');
  const np = document.getElementById('navProdutos');
  if (mm) mm.classList.remove('open');
  if (np) np.classList.remove('mega-open');
}

/* ═══ RENDER — HOME ═══ */
function renderCategories() {
  document.getElementById('categoriesGrid').innerHTML = categories.map(cat => `
    <div class="category-card" onclick="selectMarketplaceCategory('${cat.id}', this)">
      <div class="category-image"><img src="${cat.image}" alt="${cat.name}" loading="lazy"></div>
      <div class="category-overlay"><h3 class="category-name">${cat.name}</h3></div>
    </div>`).join('');
}

function renderMarketplaceCategories() {
  const grid = document.getElementById('marketCategoryGrid');
  if (!grid) return;
  grid.innerHTML = categories.map(cat => `
    <button class="market-category-item" onclick="selectMarketplaceCategory('${cat.id}', this)">
      <span class="market-category-image"><img src="${cat.image}" alt="${cat.name}" loading="lazy"></span>
      <span>${cat.name}</span>
    </button>`).join('');
  if (focusedFilter) elements.filterList.querySelector(`[data-filter="${focusedFilter}"]`)?.focus();
}

function renderMarketplaceCategoryProducts(category) {
  const grid = document.getElementById('marketCategoryProducts');
  const title = document.getElementById('marketCategoryTitle');
  const count = document.getElementById('marketCategoryCount');
  if (!grid) return;
  const filtered = category === 'ofertas'
    ? products.filter(p => p.originalPrice && p.originalPrice > p.price)
    : category === 'todos'
      ? products
      : products.filter(p => p.category === category);
  const categoryName = categories.find(c => c.id === category)?.name;
  if (title) title.textContent = categoryName || (category === 'ofertas' ? 'Ofertas' : 'Todos os produtos');
  if (count) count.textContent = `${filtered.length} produtos`;
  grid.innerHTML = filtered.map(createProductCard).join('');
}

function renderFeaturedProducts() {
  document.getElementById('featuredProducts').innerHTML = products.filter(p => p.featured).slice(0, 8).map(createProductCard).join('');
}
function renderNewProducts() {
  const el = document.getElementById('newProducts');
  if (el) el.innerHTML = [...products].slice(-8).reverse().map(createProductCard).join('');
}

/* ═══ FILTERS + SORT + PRICE ═══ */
function renderFilters() {
  const filtered = getFilteredProducts();
  const countEl = document.getElementById('productsCount');
  const titleEl = document.getElementById('productsTitle');
  const categoryName = categories.find(c => c.id === currentFilter)?.name;
  if (titleEl) titleEl.textContent = categoryName || (currentFilter === 'todos' ? 'Produtos' : 'Ofertas');
  if (countEl) countEl.textContent = `${filtered.length} produto${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;

  function catCount(catId) {
    return products.filter(p => {
      const catOk = catId === 'todos' ? true : p.category === catId;
      const genOk = currentGender === 'todos' || p.gender === currentGender || p.gender === 'unissex';
      const pOk   = p.price >= priceMin && p.price <= priceMax;
      return catOk && genOk && pOk;
    }).length;
  }
  function genCount(gen) {
    return products.filter(p => {
      const catOk = currentFilter === 'todos' ? true : p.category === currentFilter;
      const genOk = gen === 'todos' ? true : p.gender === gen || p.gender === 'unissex';
      const pOk   = p.price >= priceMin && p.price <= priceMax;
      return catOk && genOk && pOk;
    }).length;
  }

  const catBtns = [`<button class="filter-btn ${currentFilter === 'todos' ? 'active' : ''}" onclick="filterByCategory('todos')">Todos <span class="filter-count">${catCount('todos')}</span></button>`]
    .concat(categories.map(c => `<button class="filter-btn ${currentFilter === c.id ? 'active' : ''}" onclick="filterByCategory('${c.id}')">${c.name} <span class="filter-count">${catCount(c.id)}</span></button>`));

  const genItems = [{id:'todos',label:'Todos'},{id:'masculino',label:'Masculino'},{id:'feminino',label:'Feminino'},{id:'unissex',label:'Unissex'}];
  const genBtns = genItems.map(g => `<button class="filter-btn ${currentGender === g.id ? 'active' : ''}" onclick="filterByGender('${g.id}')">${g.label} <span class="filter-count">${genCount(g.id)}</span></button>`);

  document.getElementById('filtersContainer').innerHTML =
    `<div class="filters cat-filters">${catBtns.join('')}</div>
     <div class="filters gen-filters">${genBtns.join('')}</div>`;

  renderSidebarFilters();
  renderProducts();
}

function updatePriceFilter() { renderFilters(); }
function updateSort(val) { sortBy = val; renderFilters(); }

function getFilteredProducts() {
  let list = products.filter(p => {
    const catOk = currentFilter === 'todos' || p.category === currentFilter;
    const genOk = currentGender === 'todos' || p.gender === currentGender || p.gender === 'unissex';
    const pOk   = p.price >= priceMin && p.price <= priceMax;
    return catOk && genOk && pOk;
  });
  switch (sortBy) {
    case 'menor-preco':    list = list.sort((a,b) => a.price - b.price); break;
    case 'maior-preco':    list = list.sort((a,b) => b.price - a.price); break;
    case 'mais-avaliados': list = list.sort((a,b) => b.rating - a.rating); break;
    case 'mais-vendidos':  list = list.sort((a,b) => b.reviews - a.reviews); break;
    case 'novidades':      list = list.sort((a,b) => b.id - a.id); break;
    default: list = list.sort((a,b) => (b.featured ? 1:0) - (a.featured ? 1:0));
  }
  return list;
}

function filterByCategory(cat) { currentFilter = cat; navigateTo('products'); setTimeout(renderFilters, 80); }
function filterByGender(gender) { currentGender = gender; renderFilters(); }

/* ═══ CLEAR ALL FILTERS ═══ */
function clearAllFilters() {
  currentFilter = 'todos';
  currentGender = 'todos';
  priceMin = 0;
  priceMax = 1000;
  sortBy = 'relevancia';
  renderFilters();
}

/* ═══ SIDEBAR FILTERS ═══ */
/* Track which accordion sections are open */
let sfOpen = { categorias: true, genero: true, tamanho: false, preco: true, ordenar: false };

function sfToggle(section) {
  sfOpen[section] = !sfOpen[section];
  const body = document.getElementById('sfBody_' + section);
  const arrow = document.getElementById('sfArrow_' + section);
  if (!body) return;
  if (sfOpen[section]) {
    body.style.maxHeight = body.scrollHeight + 'px';
    body.style.opacity = '1';
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  } else {
    body.style.maxHeight = '0';
    body.style.opacity = '0';
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  }
}

function sfAccordionSection(id, label, content, defaultOpen) {
  const isOpen = sfOpen[id] !== undefined ? sfOpen[id] : defaultOpen;
  return `
    <div class="sf-accordion">
      <button class="sf-accordion-head" onclick="sfToggle('${id}')">
        <span>${label}</span>
        <svg id="sfArrow_${id}" class="sf-accordion-arrow" style="transform:rotate(${isOpen?'180':'0'}deg)" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div id="sfBody_${id}" class="sf-accordion-body" style="max-height:${isOpen?'600px':'0'};opacity:${isOpen?'1':'0'}">
        <div class="sf-accordion-inner">${content}</div>
      </div>
    </div>`;
}

function renderSidebarFilters() {
  const sb = document.getElementById('sidebarFiltersContent');
  if (!sb) return;

  const catList = [
    { id:'todos',      label:'Todos',      icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
    { id:'tenis',      label:'Tênis',       icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12l3-3 4 4 6-6 4 4"/><path d="M2 17h20"/></svg>' },
    { id:'camisetas',  label:'Camisetas',   icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46L16 2l-2 6-4-6-4 6-2-6-4.38 1.46L3 7l2-4v17h14V3l2 4z"/></svg>' },
    { id:'hoodies',    label:'Moletons',    icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M2 21h20"/><path d="M12 8V3"/><path d="M10 3H7L6 8"/><path d="M14 3h3l1 5"/></svg>' },
    { id:'calcas',     label:'Calças',      icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12l-2 20H8L6 2z"/><path d="M12 2v10"/></svg>' },
    { id:'shorts',     label:'Shorts',      icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16l-3 14H7L4 4z"/><path d="M12 4v14"/></svg>' },
    { id:'acessorios', label:'Acessórios',  icon:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M12 8V3"/><path d="M12 21v-5"/><path d="M8 12H3"/><path d="M21 12h-5"/></svg>' }
  ];
  const genList = [
    { id:'todos',     label:'Todos'     },
    { id:'masculino', label:'Masculino' },
    { id:'feminino',  label:'Feminino'  },
    { id:'unissex',   label:'Unissex'   }
  ];
  const allSizes = currentFilter === 'tenis'
    ? ['36','37','38','39','40','41','42','43']
    : ['PP','P','M','G','GG'];

  function catCount(catId) {
    return products.filter(p => {
      const catOk = catId === 'todos' ? true : p.category === catId;
      const genOk = currentGender === 'todos' || p.gender === currentGender || p.gender === 'unissex';
      return catOk && genOk;
    }).length;
  }

  const catContent = `<div class="sf-cat-list">
    ${catList.map(c => `
      <button class="sf-cat-item ${currentFilter === c.id ? 'active' : ''}" onclick="filterByCategory('${c.id}')">
        <span class="sf-cat-icon">${c.icon}</span>
        <span class="sf-cat-name">${c.label}</span>
        <span class="sf-cat-count">${catCount(c.id)}</span>
      </button>`).join('')}
  </div>`;

  const genContent = `<div class="sf-radio-list">
    ${genList.map(g => `
      <label class="sf-radio-item ${currentGender === g.id ? 'checked' : ''}">
        <input type="radio" name="sfGender" value="${g.id}" ${currentGender === g.id ? 'checked' : ''} onchange="filterByGender('${g.id}');renderSidebarFilters()">
        <span class="sf-radio-dot"></span>
        <span>${g.label}</span>
      </label>`).join('')}
  </div>`;

  const sizeContent = `<div class="sf-size-grid">
    ${allSizes.map(s => `<button class="sf-size-btn" onclick="selectSidebarSize(this,'${s}')">${s}</button>`).join('')}
  </div>`;

  const priceContent = `
    <div class="sf-dual-price">
      <div class="sf-price-vals">
        <span class="sf-price-tag">R$ <strong id="sbPriceMin">${priceMin}</strong></span>
        <span class="sf-price-sep">—</span>
        <span class="sf-price-tag">R$ <strong id="sbPriceMax">${priceMax}</strong></span>
      </div>
      <div class="sf-range-wrap" id="sfRangeWrap">
        <div class="sf-range-track">
          <div class="sf-range-fill" id="sfRangeFill"></div>
        </div>
        <div class="sf-thumb sf-thumb-min" id="sfThumbMin" tabindex="0" aria-label="Preço mínimo"></div>
        <div class="sf-thumb sf-thumb-max" id="sfThumbMax" tabindex="0" aria-label="Preço máximo"></div>
      </div>
      <div class="sf-price-extremes"><span>R$ 0</span><span>R$ 1500</span></div>
    </div>`;

  const sortContent = `
    <select class="sf-select" onchange="updateSort(this.value)">
      ${[
        ['relevancia','Relevância'],
        ['menor-preco','Menor Preço'],
        ['maior-preco','Maior Preço'],
        ['mais-avaliados','Mais Avaliados'],
        ['mais-vendidos','Mais Vendidos'],
        ['novidades','Novidades']
      ].map(o => `<option value="${o[0]}" ${sortBy===o[0]?'selected':''}>${o[1]}</option>`).join('')}
    </select>`;

  sb.innerHTML = `
    <div class="sf-header">
      <span class="sf-title-text">Filtros</span>
      <button class="sf-clear-btn" onclick="clearAllFilters()">Limpar</button>
    </div>
    ${sfAccordionSection('categorias','Categorias', catContent, true)}
    ${sfAccordionSection('genero','Gênero', genContent, true)}
    ${sfAccordionSection('tamanho','Tamanho', sizeContent, false)}
    ${sfAccordionSection('preco','Preço', priceContent, true)}
    ${sfAccordionSection('ordenar','Ordenar por', sortContent, false)}
  `;

  /* Init custom slider after DOM is updated */
  requestAnimationFrame(sfInitSlider);
}

function sfUpdatePrice(handle, val) {
  if (handle === 'min') {
    priceMin = Math.min(val, priceMax - 50);
  } else {
    priceMax = Math.max(val, priceMin + 50);
  }
  const minEl = document.getElementById('sbPriceMin');
  const maxEl = document.getElementById('sbPriceMax');
  if (minEl) minEl.textContent = priceMin;
  if (maxEl) maxEl.textContent = priceMax;
  sfUpdatePriceFill();
  renderFilters();
}

function sfUpdatePriceFill() {
  const fill = document.getElementById('sfRangeFill');
  if (!fill) return;
  const pct1 = (priceMin / 1500) * 100;
  const pct2 = (priceMax / 1500) * 100;
  fill.style.left = pct1 + '%';
  fill.style.width = (pct2 - pct1) + '%';
}

/* ── Custom dual-thumb slider (no native input range) ── */
function sfInitSlider() {
  const wrap  = document.getElementById('sfRangeWrap');
  const tMin  = document.getElementById('sfThumbMin');
  const tMax  = document.getElementById('sfThumbMax');
  if (!wrap || !tMin || !tMax) return;

  sfUpdatePriceFill();
  sfPositionThumbs();

  function sfPositionThumbs() {
    const pMin = (priceMin / 1500) * 100;
    const pMax = (priceMax / 1500) * 100;
    if (tMin) tMin.style.left = pMin + '%';
    if (tMax) tMax.style.left = pMax + '%';
    sfUpdatePriceFill();
  }

  function startDrag(e, which) {
    e.preventDefault();
    const track = wrap.querySelector('.sf-range-track');
    const rect  = track.getBoundingClientRect();
    const STEP  = 50;
    const MAX   = 1500;

    function onMove(ev) {
      const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
      let pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      let raw = pct * MAX;
      let snapped = Math.round(raw / STEP) * STEP;
      snapped = Math.max(0, Math.min(MAX, snapped));

      if (which === 'min') {
        priceMin = Math.min(snapped, priceMax - STEP);
      } else {
        priceMax = Math.max(snapped, priceMin + STEP);
      }

      const minEl = document.getElementById('sbPriceMin');
      const maxEl = document.getElementById('sbPriceMax');
      if (minEl) minEl.textContent = priceMin;
      if (maxEl) maxEl.textContent = priceMax;
      sfPositionThumbs();
    }

    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup',   onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend',  onUp);
      renderFilters();
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup',   onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend',  onUp);
  }

  tMin.addEventListener('mousedown',  e => startDrag(e, 'min'));
  tMin.addEventListener('touchstart', e => startDrag(e, 'min'), { passive: false });
  tMax.addEventListener('mousedown',  e => startDrag(e, 'max'));
  tMax.addEventListener('touchstart', e => startDrag(e, 'max'), { passive: false });

  /* Click on track to jump nearest thumb */
  const track = wrap.querySelector('.sf-range-track');
  track.addEventListener('click', e => {
    const rect = track.getBoundingClientRect();
    const pct  = (e.clientX - rect.left) / rect.width;
    const val  = Math.round((pct * 1500) / 50) * 50;
    const dMin = Math.abs(val - priceMin);
    const dMax = Math.abs(val - priceMax);
    if (dMin <= dMax) {
      priceMin = Math.max(0, Math.min(val, priceMax - 50));
    } else {
      priceMax = Math.min(1500, Math.max(val, priceMin + 50));
    }
    const minEl = document.getElementById('sbPriceMin');
    const maxEl = document.getElementById('sbPriceMax');
    if (minEl) minEl.textContent = priceMin;
    if (maxEl) maxEl.textContent = priceMax;
    sfPositionThumbs();
    renderFilters();
  });
}

function selectSidebarSize(btn, size) {
  const isActive = btn.classList.contains('active');
  btn.closest('.sf-size-grid').querySelectorAll('.sf-size-btn').forEach(b => b.classList.remove('active'));
  if (!isActive) btn.classList.add('active');
}


function renderProducts(custom = null) {
  const list = custom || getFilteredProducts();
  const countEl = document.getElementById('productsCount');
  if (countEl && !custom) countEl.textContent = `${list.length} produto${list.length !== 1 ? 's' : ''} encontrado${list.length !== 1 ? 's' : ''}`;
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = Array(Math.min(list.length || 4, 8)).fill(skeletonCard()).join('');
  setTimeout(() => {
    grid.innerHTML = list.length
      ? list.map(createProductCard).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:5rem 2rem;"><div style="font-size:4rem;margin-bottom:1rem;">🔍</div><h3 style="font-size:1.4rem;margin-bottom:.5rem;">Nenhum produto encontrado</h3><p style="color:var(--gray-500);">Tente outro filtro, categoria ou faixa de preço</p></div>`;
  }, 400);
}

/* ═══ PRODUCT CARD ═══ */
function createProductCard(p) {
  const inWish = wishlist.some(w => w.id === p.id);
  const disc   = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const pRevs  = reviews[p.id] || [];
  const avgRating = pRevs.length ? (pRevs.reduce((s,r)=>s+r.rating,0)/pRevs.length).toFixed(1) : p.rating;
  const totalRevs = pRevs.length + (p.reviews || 0);
  const cardImgId = `cimg_${p.id}`;
  const hasColorImgs = p.colorImages && Object.keys(p.colorImages).length > 0;

  // Color swatches with names mapped to CSS-friendly colors
  const colorMap = {
    'Preto':'#1a1a1a','Branco':'#f5f5f5','Cinza':'#9ca3af','Azul':'#3b82f6',
    'Azul Marinho':'#1e3a5f','Azul Royal':'#2563eb','Azul Petróleo':'#0f4c5c',
    'Azul Espelhado':'#60a5fa','Azul Claro':'#bfdbfe','Azul Escuro':'#1e40af',
    'Azul Navy':'#1e3a5f','Navy':'#1e3a5f','Rosa':'#f9a8d4','Rosa Neon':'#ff2d78',
    'Roxo':'#7c3aed','Lilás':'#c4b5fd','Roxo Escuro':'#4c1d95',
    'Verde':'#16a34a','Verde Militar':'#4d6b45','Verde Oliva':'#6b7c3d','Verde Lima':'#84cc16',
    'Verde/Cinza':'#6b7c3d','Camuflado Verde':'#4d6b45','Camuflado Cinza':'#6b7280',
    'Vermelho':'#dc2626','Vinho':'#7f1d1d','Marsala':'#9b2335','Bordo':'#800020',
    'Bege':'#d4b896','Nude':'#d4a574','Marrom':'#7c5c3e','Grafite':'#4b5563',
    'Preto Matte':'#1a1a1a','Preto Fumê':'#2d2d2d','Prata':'#c0c0c0','Dourado':'#d4af37',
    'Off-White':'#f8f4ef','Cinza Mescla':'#9ca3af','Laranja/Preto':'#ea580c',
    'Preto/Laranja':'#1a1a1a','Branco/Azul':'#f5f5f5','Amarelo/Laranja':'#f59e0b',
    'Azul/Verde':'#0d9488','Rosa/Roxo':'#ec4899','Azul Petróleo':'#0f4c5c',
    'Camuflado Verde':'#4d6b45','Camuflado Cinza':'#6b7280',
  };

  const colorSwatches = p.colors?.length ? p.colors.map((c, i) => {
    const bg = colorMap[c] || '#888';
    const isLight = ['Branco','Off-White','Nude','Bege','Prata','Branco/Azul'].includes(c);
    const borderStyle = isLight ? 'border:1.5px solid #ddd;' : '';
    const img = hasColorImgs && p.colorImages[c] ? `data-img="${p.colorImages[c]}"` : '';
    return `<div class="card-color-dot ${i===0?'active':''}" title="${c}" ${img} data-cardimg="${cardImgId}" onclick="cardSwapColor(this,event)" style="background:${bg};${borderStyle}"></div>`;
  }).join('') : '';

  return `
    <div class="product-card" onclick="showProductDetail(${p.id})">
      <div class="product-image">
        <img id="${cardImgId}" src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge ${p.bestseller ? 'badge-bestseller':''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${getCatName(p.category)}</div>
        <h3 class="product-name">${p.name}</h3>
        ${colorSwatches ? `<div class="card-color-swatches" onclick="event.stopPropagation()">${colorSwatches}</div>` : ''}
        <div class="product-rating">
          <span class="stars">${renderStars(parseFloat(avgRating))}</span>
          <span style="color:var(--gray-500);font-size:.75rem;">${avgRating} (${totalRevs})</span>
        </div>
        <div class="product-price">
          <span class="current-price">R$ ${p.price.toFixed(2)}</span>
          ${p.originalPrice ? `<span class="original-price">R$ ${p.originalPrice.toFixed(2)}</span>` : ''}
          ${disc ? `<span style="font-size:.72rem;font-weight:700;color:var(--success);margin-left:auto;">-${disc}%</span>` : ''}
        </div>
      </div>
      <div class="product-actions" onclick="event.stopPropagation()">
        <button class="btn-add-cart" onclick="showProductDetail(${p.id}); event.stopPropagation();">Ver Produto</button>
        <button class="btn-favorite ${inWish?'active':''}" data-id="${p.id}" onclick="toggleWishlist(${p.id},event)" aria-label="Favorito">
          ${inWish ? HEART_ACTIVE : HEART_EMPTY}
        </button>
      </div>
    </div>`;
}

function cardSwapColor(dot, e) {
  e.stopPropagation();
  const imgId = dot.dataset.cardimg;
  const newSrc = dot.dataset.img;
  if (newSrc && imgId) {
    const img = document.getElementById(imgId);
    if (img) { img.style.opacity='0'; setTimeout(()=>{ img.src=newSrc; img.style.opacity='1'; },150); }
  }
  dot.parentElement.querySelectorAll('.card-color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}

function renderStars(r) {
  const f = Math.floor(r), h = r % 1 >= .5;
  let html = '';
  for (let i = 0; i < f; i++) html += '<span class="star full">★</span>';
  if (h) html += '<span class="star half">★</span>';
  const empty = 5 - f - (h ? 1 : 0);
  for (let i = 0; i < empty; i++) html += '<span class="star empty">☆</span>';
  return html;
}

/* ═══ RECENTLY VIEWED ═══ */
function addToRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(x => x !== id);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0, 7);
  localStorage.setItem('uf_recent', JSON.stringify(recentlyViewed));
}

/* ═══ PRODUCT DETAIL ═══ */
function showProductDetail(id) {
  selectedProduct = products.find(p => p.id === id);
  if (!selectedProduct) return;
  selectedColor = null;
  selectedSize = null;
  addToRecentlyViewed(id);
  const p = selectedProduct;
  const inWish = wishlist.some(w => w.id === p.id);
  const disc   = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const viewers = Math.floor(Math.random() * 18) + 6;
  const pRevs  = reviews[p.id] || [];
  const avgRating = pRevs.length ? (pRevs.reduce((s,r)=>s+r.rating,0)/pRevs.length).toFixed(1) : p.rating;

  const bc = document.getElementById('breadcrumbProduct');
  if (bc) bc.textContent = p.name;

  document.getElementById('productDetailContainer').innerHTML = `
    <div class="product-detail-gallery">
      <div class="product-main-image zoom-container" id="mainImage" onclick="openZoom(this.querySelector('img').src,'${p.name}')">
        <img src="${p.image}" alt="${p.name}" id="mainProductImg">
        <div class="zoom-hint"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg> Clique para zoom</div>
      </div>
      <div class="product-thumbnails" id="productThumbs">
        ${(p.images && p.images.length > 1 ? p.images : [p.image]).map((img, i) => `
          <div class="product-thumbnail ${i===0?'active':''}" onclick="changeMainImage('${img}',this)">
            <img src="${img}" alt="${p.name}" loading="lazy">
          </div>`).join('')}
      </div>
    </div>
    <div class="product-detail-main">
      ${p.badge ? `<span class="detail-badge">${p.badge}</span>` : ''}
      <div class="detail-top-row">
        <h1 class="product-detail-title">${p.name}</h1>
        <div class="detail-action-btns">
          ${p.sizes?.length ? `<button class="btn-size-guide" onclick="openSizeGuide('${p.category}')">📏 Guia</button>` : ''}
          <button class="btn-share" onclick="shareProduct(${p.id})">📤</button>
        </div>
      </div>
      <div class="product-rating">
        <span class="stars" style="font-size:1.1rem;">${renderStars(parseFloat(avgRating))}</span>
        <span style="color:var(--gray-600);margin-left:.5rem;">${avgRating} · ${(pRevs.length + p.reviews)} avaliações</span>
        <a href="#reviewsSection" style="margin-left:.75rem;font-size:.82rem;color:var(--accent);font-weight:600;text-decoration:none;">Ver avaliações →</a>
      </div>
      <div class="social-proof-bar">
        <div class="social-proof-dot"></div>
        <span> <strong>${viewers} pessoas</strong> estão vendo este produto agora</span>
      </div>
      <div class="product-detail-price">
        <span class="current-price">R$ ${p.price.toFixed(2)}</span>
        ${p.originalPrice ? `<span class="original-price">R$ ${p.originalPrice.toFixed(2)}</span>` : ''}
        ${disc ? `<span class="discount-pill">-${disc}%</span>` : ''}
      </div>
      <p style="font-size:.82rem;color:var(--gray-500);">ou 10x de <strong>R$ ${(p.price / 10).toFixed(2)}</strong> sem juros</p>
      <p class="product-detail-description">${p.description}</p>
      ${p.stock <= 5 ? `<div class="badge-group"><span class="info-badge" style="background:#fff7ed;color:#c2410c;">⚡ Últimas ${p.stock} unidades!</span></div>` : ''}
      <div class="product-options">
        ${p.colors?.length ? `
          <div>
            <label>Cor: <span id="selectedColorLabel" style="color:var(--accent);font-weight:700;">${p.colors.length > 1 ? 'Selecione' : p.colors[0]}</span></label>
            <div class="color-swatches">
              ${p.colors.map((c, ci) => `<div class="color-swatch ${p.colors.length === 1 ? 'selected' : ''}" onclick="selectColor(this,'${c}',${p.id})">${c}</div>`).join('')}
            </div>
          </div>` : ''}
        ${p.sizes?.length ? `
          <div>
            <label>Tamanho: <span id="selectedSizeLabel" style="color:var(--accent);font-weight:700;">Selecione</span> <a href="#" onclick="openSizeGuide('${p.category}');return false;" style="color:var(--gray-400);font-size:.75rem;font-weight:600;text-decoration:none;margin-left:.4rem;">Ver guia →</a></label>
            <div class="size-options">
              ${p.sizes.map(s => `<div class="size-option" onclick="selectSize(this,'${s}')">${s}</div>`).join('')}
            </div>
          </div>` : ''}
      </div>
      <div class="product-detail-actions">
        <button class="btn-add-cart btn-add-cart-detail" id="btnAddToCartDetail" onclick="addToCartDetail()">
          🛒 ${p.sizes?.length ? 'Selecione tamanho e cor' : 'Adicionar ao Carrinho'}
        </button>
        <button class="btn-favorite ${inWish?'active':''}" data-id="${p.id}" onclick="toggleWishlist(${p.id},event)" aria-label="Favorito">
          ${inWish ? HEART_ACTIVE : HEART_EMPTY}
        </button>
      </div>
      <div class="badge-group" style="margin-top:1rem;">
        <span class="info-badge">🚚 Frete GRÁTIS acima de R$ 299</span>
        <span class="info-badge">💳 10x sem juros</span>
        <span class="info-badge">↩️ 30 dias para devolver</span>
      </div>
    </div>`;

  // Auto-selecionar se só uma cor
  if (p.colors?.length === 1) {
    selectedColor = p.colors[0];
  }
  if (!p.sizes?.length) {
    const btn = document.getElementById('btnAddToCartDetail');
    if (btn) { btn.textContent = '🛒 Adicionar ao Carrinho'; btn.classList.remove('btn-pending'); }
  }


  /* Reviews section */
  renderReviewsSection(p.id);

  /* Recently viewed */
  const recentIds = recentlyViewed.filter(x => x !== id).slice(0, 6);
  const rvSec = document.getElementById('recentlyViewedSection');
  const rvGrid = document.getElementById('recentlyViewedGrid');
  if (rvSec && rvGrid && recentIds.length) {
    const recentProds = recentIds.map(rid => products.find(x => x.id === rid)).filter(Boolean);
    rvGrid.innerHTML = recentProds.map(createProductCard).join('');
    rvSec.style.display = 'block';
  } else if (rvSec) rvSec.style.display = 'none';

  /* Related */
  const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  const relEl = document.getElementById('relatedProducts'), relSec = document.getElementById('relatedSection');
  if (relEl && related.length) { relEl.innerHTML = related.map(createProductCard).join(''); if (relSec) relSec.style.display = 'block'; }
  else if (relSec) relSec.style.display = 'none';

  navigateTo('productDetail');
  setTimeout(() => {
    injectBackBar('productDetail');
    initMobileGallerySwipe();
  }, 60);
}

let selectedColor = null;
let selectedSize = null;

function selectColor(el, color, productId) {
  el.parentElement.querySelectorAll('.color-swatch').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedColor = color;
  const lbl = document.getElementById('selectedColorLabel');
  if (lbl) lbl.textContent = color;
  // Mudar imagem se o produto tiver imagens por cor
  const p = products.find(x => x.id === productId);
  if (p && p.colorImages && p.colorImages[color]) {
    const img = document.getElementById('mainProductImg');
    if (img) img.src = p.colorImages[color];
  }
  updateCartBtnState();
}

function selectSize(el, size) {
  el.parentElement.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedSize = size;
  const lbl = document.getElementById('selectedSizeLabel');
  if (lbl) lbl.textContent = size;
  updateCartBtnState();
}

function updateCartBtnState() {
  if (!selectedProduct) return;
  const btn = document.getElementById('btnAddToCartDetail');
  if (!btn) return;
  const needsSize = selectedProduct.sizes?.length > 0;
  const needsColor = selectedProduct.colors?.length > 0;
  const hasSize = !needsSize || selectedSize;
  const hasColor = !needsColor || selectedColor;
  if (hasSize && hasColor) {
    btn.textContent = '🛒 Adicionar ao Carrinho';
    btn.style.opacity = '1';
    btn.style.background = '';
  } else {
    const missing = [];
    if (needsSize && !selectedSize) missing.push('tamanho');
    if (needsColor && !selectedColor) missing.push('cor');
    btn.textContent = `⚠️ Selecione ${missing.join(' e ')}`;
    btn.style.opacity = '0.7';
    btn.style.background = 'var(--gray-700)';
  }
}

function selectOpt(el, type) {
  el.parentElement.querySelectorAll('.size-option, .color-swatch').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

function openZoom(src, alt) {
  const overlay = document.createElement('div');
  overlay.className = 'zoom-overlay';
  overlay.innerHTML = `
    <div class="zoom-modal">
      <button class="zoom-close" onclick="this.closest('.zoom-overlay').remove()">×</button>
      <img src="${src}" alt="${alt}" class="zoom-img">
      <p style="text-align:center;color:rgba(255,255,255,.6);font-size:.8rem;margin-top:.5rem;">${alt}</p>
    </div>`;
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  document.body.appendChild(overlay);
}

function changeMainImage(src, thumb) {
  const img = document.getElementById('mainProductImg');
  if (img) img.src = src;
  document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}


/* ═══ REVIEWS ═══ */
function renderReviewsSection(pid) {
  const pRevs = reviews[pid] || [];
  const revSec = document.getElementById('reviewsSection');
  const revCon = document.getElementById('reviewsContainer');
  if (!revSec || !revCon) return;
  revSec.style.display = 'block';

  const avg = pRevs.length ? (pRevs.reduce((s,r)=>s+r.rating,0)/pRevs.length) : 0;
  const counts = [5,4,3,2,1].map(star => pRevs.filter(r=>r.rating===star).length);

  const summaryHTML = pRevs.length ? `
    <div class="reviews-summary">
      <div class="reviews-avg">
        <div class="reviews-avg-num">${avg.toFixed(1)}</div>
        <div class="reviews-avg-stars">${renderStars(avg)}</div>
        <div class="reviews-avg-count">${pRevs.length} avaliação${pRevs.length!==1?'ões':''}</div>
      </div>
      <div class="reviews-bars">
        ${[5,4,3,2,1].map((star,i) => `
          <div class="reviews-bar-row">
            <span class="reviews-bar-label">${star}★</span>
            <div class="reviews-bar-track"><div class="reviews-bar-fill" style="width:${pRevs.length?((counts[i]/pRevs.length)*100):0}%"></div></div>
            <span class="reviews-bar-count">${counts[i]}</span>
          </div>`).join('')}
      </div>
    </div>` : '';

  const filterBtns = pRevs.length ? `
    <div class="review-filters" id="reviewFilters">
      <button class="review-filter-btn active" onclick="filterReviews(0,${pid},this)">Todas</button>
      ${[5,4,3].filter(s=>counts[[5,4,3,2,1].indexOf(s)]>0).map(s=>
        `<button class="review-filter-btn" onclick="filterReviews(${s},${pid},this)">${s} estrelas</button>`
      ).join('')}
    </div>` : '';

  const reviewsList = `<div class="reviews-list" id="reviewsList">${renderReviewItems(pRevs)}</div>`;

  const formHTML = `
    <div class="review-form-card">
      <h4>✏️ ${currentUser ? 'Deixe sua avaliação' : 'Faça login para avaliar'}</h4>
      ${currentUser ? `
        <div class="star-rating-input" id="starInput">
          ${[1,2,3,4,5].map(s=>`<span onclick="setReviewRating(${s})" data-star="${s}">☆</span>`).join('')}
        </div>
        <textarea class="review-textarea" id="reviewText" placeholder="Conte sua experiência com este produto..." rows="3"></textarea>
        <button class="btn-submit-review" onclick="submitReview(${pid})">Publicar Avaliação</button>
      ` : `<button class="btn-primary" onclick="openModal()" style="margin-top:.5rem;">Fazer Login</button>`}
    </div>`;

  revCon.innerHTML = summaryHTML + filterBtns + reviewsList + formHTML;
  reviewRating = 0;
}

function renderReviewItems(list) {
  if (!list.length) return `<div style="text-align:center;padding:2rem;color:var(--gray-500);">Nenhuma avaliação ainda. Seja o primeiro! 🌟</div>`;
  return list.map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-author">
          <div class="review-avatar">${r.user.charAt(0)}</div>
          <div>
            <div class="review-author-name">${r.user}</div>
            <div class="review-author-city">${r.city}</div>
          </div>
          ${r.verified ? `<span class="review-verified">✓ Compra verificada</span>` : ''}
        </div>
        <div style="text-align:right;">
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>`).join('');
}

function filterReviews(star, pid, btn) {
  const pRevs = reviews[pid] || [];
  const filtered = star === 0 ? pRevs : pRevs.filter(r => r.rating === star);
  document.getElementById('reviewsList').innerHTML = renderReviewItems(filtered);
  document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function setReviewRating(star) {
  reviewRating = star;
  const stars = document.querySelectorAll('#starInput span');
  stars.forEach((s, i) => {
    s.textContent = i < star ? '★' : '☆';
    s.classList.toggle('active', i < star);
    s.style.color = i < star ? '#f59e0b' : 'var(--gray-300)';
  });
}

function submitReview(pid) {
  if (!currentUser) { showNotification('⚠️ Faça login para avaliar', 'warn'); return; }
  if (!reviewRating) { showNotification('⚠️ Selecione uma nota', 'warn'); return; }
  const text = document.getElementById('reviewText')?.value.trim();
  if (!text || text.length < 10) { showNotification('⚠️ Escreva ao menos 10 caracteres', 'warn'); return; }

  const newReview = {
    user: currentUser.name,
    city: 'Brasil',
    rating: reviewRating,
    text,
    date: new Date().toLocaleDateString('pt-BR'),
    verified: true
  };
  if (!reviews[pid]) reviews[pid] = [];
  reviews[pid].unshift(newReview);
  localStorage.setItem('uf_reviews', JSON.stringify(reviews));
  showNotification('⭐ Avaliação publicada! Obrigado!');
  reviewRating = 0;
  renderReviewsSection(pid);
}

/* ═══ SIZE GUIDE ═══ */
function openSizeGuide(category) {
  const modal = document.getElementById('sizeModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  sgTab(category === 'tenis' ? 'calcados' : 'roupas', modal.querySelector('.sg-tab'));
}
function closeSizeModal() {
  document.getElementById('sizeModal').classList.remove('active');
  document.body.style.overflow = '';
}
function sgTab(type, btn) {
  document.querySelectorAll('.sg-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const el = document.getElementById('sgContent');
  if (type === 'calcados') {
    el.innerHTML = `
      <table class="size-guide-table">
        <thead><tr><th>BR</th><th>US (M)</th><th>US (F)</th><th>EU</th><th>cm</th></tr></thead>
        <tbody>
          <tr><td>35</td><td>4</td><td>5</td><td>35</td><td>22</td></tr>
          <tr><td>36</td><td>4.5</td><td>5.5</td><td>36</td><td>22.7</td></tr>
          <tr><td>37</td><td>5</td><td>6</td><td>37</td><td>23.3</td></tr>
          <tr><td>38</td><td>6</td><td>7</td><td>38</td><td>24</td></tr>
          <tr><td>39</td><td>7</td><td>8</td><td>39</td><td>24.7</td></tr>
          <tr><td>40</td><td>7.5</td><td>8.5</td><td>40</td><td>25.3</td></tr>
          <tr><td>41</td><td>8</td><td>9</td><td>41</td><td>26</td></tr>
          <tr><td>42</td><td>9</td><td>10</td><td>42</td><td>26.7</td></tr>
          <tr><td>43</td><td>10</td><td>11</td><td>43</td><td>27.3</td></tr>
          <tr><td>44</td><td>11</td><td>12</td><td>44</td><td>28</td></tr>
        </tbody>
      </table>
      <p style="margin-top:1rem;font-size:.82rem;color:var(--gray-500);">💡 Meça o comprimento do seu pé e escolha o tamanho mais próximo.</p>`;
  } else {
    el.innerHTML = `
      <table class="size-guide-table">
        <thead><tr><th>Tam.</th><th>Busto (cm)</th><th>Cintura (cm)</th><th>Quadril (cm)</th></tr></thead>
        <tbody>
          <tr><td>PP</td><td>76–82</td><td>60–66</td><td>84–90</td></tr>
          <tr><td>P</td><td>84–90</td><td>68–74</td><td>92–98</td></tr>
          <tr><td>M</td><td>92–98</td><td>76–82</td><td>100–106</td></tr>
          <tr><td>G</td><td>100–106</td><td>84–90</td><td>108–114</td></tr>
          <tr><td>GG</td><td>108–114</td><td>92–98</td><td>116–122</td></tr>
          <tr><td>3G</td><td>116–122</td><td>100–106</td><td>124–130</td></tr>
        </tbody>
      </table>
      <p style="margin-top:1rem;font-size:.82rem;color:var(--gray-500);">💡 Prefira o maior tamanho se sua medida estiver entre dois números.</p>`;
  }
}

/* ═══ SHARE ═══ */
function shareProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById('shareModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  const url = `${window.location.href.split('?')[0]}?produto=${id}`;
  const waMsg = encodeURIComponent(`Olha que incrível! ${p.name} por R$ ${p.price.toFixed(2)} na Urban Flow! ${url}`);
  document.getElementById('shareContent').innerHTML = `
    <div class="share-product-preview">
      <img class="share-product-img" src="${p.image}" alt="${p.name}">
      <div>
        <div style="font-weight:700;font-size:.9rem;">${p.name}</div>
        <div style="color:var(--accent);font-weight:800;">R$ ${p.price.toFixed(2)}</div>
      </div>
    </div>
    <div class="share-options">
      <button class="share-btn whatsapp" onclick="window.open('https://wa.me/?text=${waMsg}','_blank')">
        <span style="font-size:1.4rem;">💬</span> Compartilhar no WhatsApp
      </button>
      <button class="share-btn copy" onclick="copyShareLink('${url}',this)">
        <span style="font-size:1.4rem;">🔗</span> Copiar link do produto
      </button>
    </div>`;
}
function copyShareLink(url, btn) {
  navigator.clipboard.writeText(url).then(() => {
    btn.innerHTML = '<span style="font-size:1.4rem;">✅</span> Link copiado!';
    setTimeout(() => { btn.innerHTML = '<span style="font-size:1.4rem;">🔗</span> Copiar link do produto'; }, 2000);
  }).catch(() => showNotification('⚠️ Não foi possível copiar', 'warn'));
}
function closeShareModal() {
  document.getElementById('shareModal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ═══ WISHLIST TOGGLE (sem scroll/jump) ═══ */
function toggleWishlist(id, e) {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  const idx = wishlist.findIndex(w => w.id === id);
  const p = products.find(x => x.id === id);
  if (!p) return;
  let added = false;
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(p);
    added = true;
  }
  localStorage.setItem('uf_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  // Atualiza apenas o botão clicado sem re-renderizar tudo
  document.querySelectorAll(`.btn-favorite[data-id="${id}"]`).forEach(btn => {
    const inWish = wishlist.some(w => w.id === id);
    btn.classList.toggle('active', inWish);
    btn.innerHTML = inWish ? HEART_ACTIVE : HEART_EMPTY;
  });
  showNotification(added ? '❤️ Adicionado aos favoritos!' : '💔 Removido dos favoritos');
}

/* ═══ CART ═══ */
function addToCartDetail() {
  if (!selectedProduct) return;
  const needsSize = selectedProduct.sizes?.length > 0;
  const needsColor = selectedProduct.colors?.length > 0;
  if (needsSize && !selectedSize) { showNotification('⚠️ Selecione um tamanho', 'warn'); return; }
  if (needsColor && !selectedColor) { showNotification('⚠️ Selecione uma cor', 'warn'); return; }
  addCartItem({ ...selectedProduct, quantity: 1, selectedSize: selectedSize || null, selectedColor: selectedColor || selectedProduct.colors?.[0] || null });
}
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  addCartItem({ ...p, quantity: 1, selectedSize: p.sizes?.[0] || null, selectedColor: p.colors?.[0] || null });
}
function addCartItem(item) {
  const idx = cart.findIndex(c => c.id === item.id && c.selectedSize === item.selectedSize);
  idx > -1 ? cart[idx].quantity++ : cart.push({ ...item });
  saveCart(); updateCartBadge(); showNotification('🛒 Adicionado ao carrinho!');
}

function getCartTotals() {
  const sub = cart.reduce((s,i) => s+i.price*i.quantity, 0);
  let discount = 0;
  let shipping = sub >= 299 ? 0 : 29.90;
  if (appliedCoupon) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent')  discount = sub * c.value / 100;
    if (c.type === 'fixed')    discount = Math.min(c.value, sub);
    if (c.type === 'shipping') shipping = 0;
  }
  const total = sub - discount + shipping;
  return { sub, discount, shipping, total };
}

function renderCart() {
  const el = document.getElementById('cartContainer');
  if (!cart.length) {
    appliedCoupon = null;
    el.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:4rem;margin-bottom:1.5rem;">🛒</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Explore nossos produtos e adicione ao carrinho</p>
        <button class="btn-primary" onclick="navigateTo('products')">Ver Produtos</button>
      </div>`;
    return;
  }

  const { sub, discount, shipping, total } = getCartTotals();
  const pct = Math.min((sub / 299) * 100, 100);

  el.innerHTML = `
    <div class="cart-grid">
      <div>
        <div class="cart-items">
          ${cart.map((item, i) => `
            <div class="cart-item">
              <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
              <div class="cart-item-info">
                <h3>${item.name}</h3>
                ${item.selectedSize  ? `<p>Tamanho: <strong>${item.selectedSize}</strong></p>` : ''}
                ${item.selectedColor ? `<p>Cor: <strong>${item.selectedColor}</strong></p>`    : ''}
                <p style="color:var(--accent);font-weight:700;">R$ ${item.price.toFixed(2)} / un.</p>
              </div>
              <div class="cart-item-actions">
                <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                <div class="quantity-controls">
                  <button onclick="updateQty(${i}, -1)">−</button>
                  <span style="font-weight:700;min-width:1.5rem;text-align:center;">${item.quantity}</span>
                  <button onclick="updateQty(${i},  1)">+</button>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${i})">🗑 Remover</button>
              </div>
            </div>`).join('')}
        </div>
      </div>
      <div class="cart-summary">
        <h3>Resumo do Pedido</h3>
        <div class="cart-summary-row"><span>Subtotal (${cart.reduce((s,i)=>s+i.quantity,0)} itens)</span><span>R$ ${sub.toFixed(2)}</span></div>
        ${discount > 0 ? `<div class="cart-summary-row" style="color:var(--success);"><span>🎟 Desconto (${appliedCoupon})</span><span>-R$ ${discount.toFixed(2)}</span></div>` : ''}
        <div class="cart-summary-row">
          <span>Frete</span>
          <span>${shipping === 0 ? '<strong style="color:var(--success);">✓ GRÁTIS</strong>' : `R$ ${shipping.toFixed(2)}`}</span>
        </div>
        ${sub < 299 && shipping > 0 ? `
          <div style="margin:.25rem 0 .75rem;">
            <p style="font-size:.82rem;color:var(--gray-600);margin-bottom:.4rem;">Faltam <strong>R$ ${(299-sub).toFixed(2)}</strong> para frete grátis 🚚</p>
            <div class="shipping-bar"><div class="shipping-bar-fill" style="width:${pct}%"></div></div>
          </div>` : ''}

        <!-- CUPOM -->
        <div style="margin:1rem 0;">
          <p class="coupon-hint">🎟 Cupons disponíveis: URBAN10 · FLOW15 · PROMO20 · FRETE</p>
          ${appliedCoupon
            ? `<div class="coupon-applied">
                 <span>✅ Cupom <strong>${appliedCoupon}</strong> — ${COUPONS[appliedCoupon].desc}</span>
                 <button class="btn-remove-coupon" onclick="removeCoupon()">✕</button>
               </div>`
            : `<div class="coupon-field">
                 <input type="text" id="couponInput" placeholder="Digite seu cupom" oninput="this.value=this.value.toUpperCase()">
                 <button class="btn-apply-coupon" onclick="applyCoupon()">Aplicar</button>
               </div>`}
        </div>

        <div class="cart-summary-row">
          <strong>Total</strong>
          <strong style="color:var(--accent);font-size:1.6rem;">R$ ${total.toFixed(2)}</strong>
        </div>
        <button class="btn-checkout" onclick="checkout()">Finalizar Compra →</button>
        <button onclick="navigateTo('products')" style="width:100%;padding:.85rem;background:none;border:2px solid var(--gray-200);border-radius:var(--radius-sm);cursor:pointer;font-weight:600;font-size:.85rem;font-family:inherit;margin-top:.75rem;transition:var(--transition);">← Continuar Comprando</button>
      </div>
    </div>`;
}

function applyCoupon() {
  const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
  if (!code) return;
  if (COUPONS[code]) {
    appliedCoupon = code;
    showNotification(`🎟 Cupom "${code}" aplicado! ${COUPONS[code].desc}`);
    renderCart();
  } else {
    showNotification('⚠️ Cupom inválido ou expirado', 'warn');
  }
}
function removeCoupon() { appliedCoupon = null; showNotification('Cupom removido'); renderCart(); }

function updateQty(i, d) {
  cart[i].quantity += d;
  if (cart[i].quantity <= 0) cart.splice(i, 1);
  saveCart(); updateCartBadge(); renderCart();
}
function removeFromCart(i) {
  cart.splice(i, 1);
  saveCart(); updateCartBadge(); renderCart();
  showNotification('Produto removido');
}

/* ═══ WISHLIST render ═══ */
function renderWishlist() {
  const el = document.getElementById('wishlistContainer');
  if (!wishlist.length) {
    el.innerHTML = `<div class="cart-empty"><div style="font-size:4rem;margin-bottom:1.5rem;">❤️</div><h3>Sua lista está vazia</h3><p>Salve produtos clicando no coração ❤️</p><button class="btn-primary" onclick="navigateTo('products')">Explorar Produtos</button></div>`;
    return;
  }
  el.innerHTML = `<div class="products-grid">${wishlist.map(createProductCard).join('')}</div>`;
}

/* ═══════════════════════════════════════════════════════════════
   CHECKOUT — 3 passos: Endereço → Pagamento → Confirmação
═══════════════════════════════════════════════════════════════ */
function checkout() {
  if (!currentUser) { showNotification('⚠️ Faça login para finalizar', 'warn'); openModal(); return; }
  if (!cart.length) { showNotification('⚠️ Seu carrinho está vazio', 'warn'); return; }
  checkoutStep = 1;
  checkoutData = { address: {}, payment: { method: 'pix' } };
  navigateTo('checkout');
}

function renderCheckout() {
  renderCheckoutStepper();
  renderCheckoutSidebar();
  renderCheckoutStep();
}

function renderCheckoutStepper() {
  const steps = [
    { label:'Endereço', icon:'📍' },
    { label:'Pagamento', icon:'💳' },
    { label:'Confirmação', icon:'✅' }
  ];
  document.getElementById('checkoutStepper').innerHTML = steps.map((s, i) => {
    const num = i + 1;
    const cls = num < checkoutStep ? 'done' : num === checkoutStep ? 'active' : '';
    return `
      ${i > 0 ? `<div class="cstep-line"></div>` : ''}
      <div class="cstep ${cls}">
        <div class="cstep-num">${num < checkoutStep ? '✓' : num}</div>
        <span>${s.label}</span>
      </div>`;
  }).join('');
}

function renderCheckoutSidebar() {
  const { sub, discount, shipping, total } = getCartTotals();
  document.getElementById('checkoutSidebar').innerHTML = `
    <div class="checkout-order-title">🛒 Resumo do Pedido</div>
    <div class="checkout-order-items">
      ${cart.map(item => `
        <div class="checkout-order-item">
          <img class="checkout-order-img" src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="checkout-order-item-name">${item.name} × ${item.quantity}</div>
          <div class="checkout-order-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
        </div>`).join('')}
    </div>
    <hr class="checkout-order-divider">
    <div class="checkout-order-row"><span>Subtotal</span><span>R$ ${sub.toFixed(2)}</span></div>
    ${discount > 0 ? `<div class="checkout-order-row" style="color:var(--success);"><span>Desconto</span><span>-R$ ${discount.toFixed(2)}</span></div>` : ''}
    <div class="checkout-order-row"><span>Frete</span><span>${shipping===0?'<span style="color:var(--success);font-weight:700;">GRÁTIS</span>':`R$ ${shipping.toFixed(2)}`}</span></div>
    <div class="checkout-order-total"><span>Total</span><span style="color:var(--accent);">R$ ${total.toFixed(2)}</span></div>
    <div style="margin-top:1.5rem;font-size:.78rem;color:var(--gray-500);display:flex;flex-direction:column;gap:.4rem;">
      <span>🔒 Pagamento 100% seguro</span>
      <span>📦 Entrega em 3–8 dias úteis</span>
      <span>↩️ 30 dias para devolução</span>
    </div>`;
}

function renderCheckoutStep() {
  const main = document.getElementById('checkoutMain');
  if (checkoutStep === 1) renderAddressStep(main);
  else if (checkoutStep === 2) renderPaymentStep(main);
  else renderConfirmationStep(main);
}

function renderAddressStep(main) {
  const a = checkoutData.address;
  main.innerHTML = `
    <div class="checkout-section-title">📍 Endereço de Entrega</div>
    <div class="checkout-form-grid">
      <div class="checkout-form-group full">
        <label>Nome Completo</label>
        <input class="checkout-input" id="chkName" type="text" value="${a.name||currentUser?.name||''}" placeholder="Seu nome completo">
      </div>
      <div class="checkout-form-group">
        <label>CPF</label>
        <input class="checkout-input" id="chkCpf" type="text" value="${a.cpf||''}" placeholder="000.000.000-00" maxlength="14" oninput="fmtCpf(this)">
      </div>
      <div class="checkout-form-group">
        <label>Telefone</label>
        <input class="checkout-input" id="chkPhone" type="text" value="${a.phone||''}" placeholder="(11) 99999-9999" maxlength="15" oninput="fmtPhone(this)">
      </div>
      <div class="checkout-form-group full">
        <label>CEP</label>
        <div class="cep-row">
          <input class="checkout-input" id="chkCep" type="text" value="${a.cep||''}" placeholder="00000-000" maxlength="9" oninput="fmtCep(this)">
          <button class="btn-lookup-cep" onclick="lookupCEP()">🔍 Buscar</button>
        </div>
        <span class="cep-loading" id="cepStatus"></span>
      </div>
      <div class="checkout-form-group full">
        <label>Rua / Logradouro</label>
        <input class="checkout-input" id="chkStreet" type="text" value="${a.street||''}" placeholder="Nome da rua">
      </div>
      <div class="checkout-form-group">
        <label>Número</label>
        <input class="checkout-input" id="chkNumber" type="text" value="${a.number||''}" placeholder="Nº">
      </div>
      <div class="checkout-form-group">
        <label>Complemento</label>
        <input class="checkout-input" id="chkComp" type="text" value="${a.complement||''}" placeholder="Apto, Bloco...">
      </div>
      <div class="checkout-form-group">
        <label>Bairro</label>
        <input class="checkout-input" id="chkNeigh" type="text" value="${a.neighborhood||''}" placeholder="Bairro">
      </div>
      <div class="checkout-form-group">
        <label>Cidade</label>
        <input class="checkout-input" id="chkCity" type="text" value="${a.city||''}" placeholder="Cidade">
      </div>
      <div class="checkout-form-group">
        <label>Estado</label>
        <input class="checkout-input" id="chkState" type="text" value="${a.state||''}" placeholder="UF" maxlength="2">
      </div>
    </div>
    <div class="checkout-nav-btns">
      <button class="btn-prev-step" onclick="navigateTo('cart')">← Voltar ao Carrinho</button>
      <button class="btn-next-step" onclick="nextCheckoutStep()">Continuar → Pagamento</button>
    </div>`;
}

async function lookupCEP() {
  const cepRaw = document.getElementById('chkCep')?.value.replace(/\D/g, '');
  const status = document.getElementById('cepStatus');
  if (cepRaw.length !== 8) { if(status) status.textContent = '⚠️ CEP inválido (8 dígitos)'; return; }
  if(status) status.textContent = '🔍 Buscando...';
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cepRaw}/json/`);
    const data = await res.json();
    if (data.erro) { if(status) status.textContent = '⚠️ CEP não encontrado'; return; }
    const setVal = (id, val) => { const el = document.getElementById(id); if(el && val) { el.value = val; el.classList.add('filled'); } };
    setVal('chkStreet', data.logradouro);
    setVal('chkNeigh', data.bairro);
    setVal('chkCity', data.localidade);
    setVal('chkState', data.uf);
    if(status) status.textContent = '✅ Endereço preenchido automaticamente!';
    document.getElementById('chkNumber')?.focus();
  } catch(e) {
    if(status) status.textContent = '⚠️ Erro ao buscar CEP';
  }
}

function fmtCpf(el) {
  let v = el.value.replace(/\D/g,'').slice(0,11);
  el.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4')
               .replace(/(\d{3})(\d{3})(\d{1,3})$/,'$1.$2.$3')
               .replace(/(\d{3})(\d{1,3})$/,'$1.$2');
}
function fmtPhone(el) {
  let v = el.value.replace(/\D/g,'').slice(0,11);
  if (v.length >= 11) el.value = v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
  else if (v.length >= 7) el.value = v.replace(/(\d{2})(\d{4,5})(\d{0,4})/,'($1) $2-$3');
  else if (v.length >= 3) el.value = v.replace(/(\d{2})(\d+)/,'($1) $2');
}
function fmtCep(el) {
  let v = el.value.replace(/\D/g,'').slice(0,8);
  el.value = v.length > 5 ? v.replace(/(\d{5})(\d+)/,'$1-$2') : v;
}

function nextCheckoutStep() {
  if (checkoutStep === 1) {
    const name  = document.getElementById('chkName')?.value.trim();
    const cep   = document.getElementById('chkCep')?.value.trim();
    const street = document.getElementById('chkStreet')?.value.trim();
    const num   = document.getElementById('chkNumber')?.value.trim();
    const city  = document.getElementById('chkCity')?.value.trim();
    const state = document.getElementById('chkState')?.value.trim();
    if (!name || !cep || !street || !num || !city || !state) {
      showNotification('⚠️ Preencha todos os campos obrigatórios', 'warn'); return;
    }
    checkoutData.address = {
      name, cpf: document.getElementById('chkCpf')?.value,
      phone: document.getElementById('chkPhone')?.value,
      cep, street, number: num,
      complement: document.getElementById('chkComp')?.value,
      neighborhood: document.getElementById('chkNeigh')?.value,
      city, state
    };
  }
  if (checkoutStep === 2) {
    processPayment(); return;
  }
  checkoutStep++;
  renderCheckoutStepper();
  renderCheckoutStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevCheckoutStep() {
  if (checkoutStep <= 1) return;
  checkoutStep--;
  renderCheckoutStepper();
  renderCheckoutStep();
}

function renderPaymentStep(main) {
  const selMethod = checkoutData.payment.method;
  main.innerHTML = `
    <div class="checkout-section-title">💳 Forma de Pagamento</div>
    <div class="payment-methods">
      <div class="payment-method ${selMethod==='pix'?'selected':''}" onclick="selectPayMethod('pix')">
        <div class="payment-method-radio"></div>
        <div class="payment-method-icon">📱</div>
        <div class="payment-method-label"><strong>PIX</strong><small>Aprovação instantânea · Sem taxas</small></div>
      </div>
      <div class="payment-method ${selMethod==='card'?'selected':''}" onclick="selectPayMethod('card')">
        <div class="payment-method-radio"></div>
        <div class="payment-method-icon">💳</div>
        <div class="payment-method-label"><strong>Cartão de Crédito / Débito</strong><small>Até 10x sem juros</small></div>
      </div>
      <div class="payment-method ${selMethod==='boleto'?'selected':''}" onclick="selectPayMethod('boleto')">
        <div class="payment-method-radio"></div>
        <div class="payment-method-icon">🏦</div>
        <div class="payment-method-label"><strong>Boleto Bancário</strong><small>Vencimento em 3 dias úteis</small></div>
      </div>
    </div>
    <div id="paymentDetailBox"></div>
    <div class="checkout-nav-btns">
      <button class="btn-prev-step" onclick="prevCheckoutStep()">← Voltar</button>
      <button class="btn-next-step" id="btnFinalize" onclick="nextCheckoutStep()">🔒 Finalizar Pedido</button>
    </div>`;
  renderPaymentDetail(selMethod);
}

function selectPayMethod(method) {
  checkoutData.payment.method = method;
  document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  renderPaymentDetail(method);
}

function renderPaymentDetail(method) {
  const box = document.getElementById('paymentDetailBox');
  if (!box) return;
  const { total } = getCartTotals();
  const pixCode = `f9c237ab-4263-4f92-91e7-bd0a9023563b${Math.random().toString(36).substr(2,32)}${total.toFixed(2).replace('.','').padStart(8,'0')}5802BR5925Urban Flow Shop6009Sao Paulo62070503***6304${Math.floor(Math.random()*9999).toString().padStart(4,'0')}`;
  const boletoCode = `link.mercadopago.com.br/boletourbanflow${Math.floor(Math.random()*9999)} ${new Date(Date.now()+3*86400000).toLocaleDateString('pt-BR')} ${total.toFixed(2)}`;

  if (method === 'pix') {
    const pixCode = "00020126580014BR.GOV.BCB.PIX0136f9c237ab-4263-4f92-91e7-bd0a9023563b5204000053039865802BR5913RICARDO PEDRO6007CATIGUA62070503***63047C5F";

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`;
    
    console.log(qrUrl);
    box.innerHTML = `
      <div class="payment-detail-box pix-box">
        <img class="pix-qr" src="${qrUrl}" alt="QR Code PIX" loading="lazy">
        <p style="font-size:.85rem;color:var(--gray-600);margin-bottom:.75rem;">Ou copie o código abaixo e cole no seu app de banco:</p>
        <div class="pix-code-box" id="pixCodeEl">${pixCode.slice(0,60)}...</div>
        <button class="btn-copy-pix" onclick="copyText('${pixCode}', this, 'PIX Copiado! ✓')">📋 Copiar Código PIX</button>
        <p style="font-size:.78rem;color:var(--gray-500);margin-top:.75rem;">⚡ Aprovação instantânea após o pagamento</p>
      </div>`;
  } else if (method === 'card') {
    box.innerHTML = `
      <div class="payment-detail-box">
        <div class="checkout-form-grid">
          <div class="checkout-form-group full">
            <label>Número do Cartão</label>
            <div class="card-input-wrap">
              <input class="checkout-input" id="cardNumber" type="text" placeholder="0000 0000 0000 0000" maxlength="19" oninput="fmtCard(this)" style="padding-right:3rem;">
              <span class="card-flag" id="cardFlag">💳</span>
            </div>
          </div>
          <div class="checkout-form-group full">
            <label>Nome no Cartão</label>
            <input class="checkout-input" id="cardName" type="text" placeholder="Igual ao cartão" oninput="this.value=this.value.toUpperCase()">
          </div>
          <div class="checkout-form-group">
            <label>Validade</label>
            <input class="checkout-input" id="cardExpiry" type="text" placeholder="MM/AA" maxlength="5" oninput="fmtExpiry(this)">
          </div>
          <div class="checkout-form-group">
            <label>CVV</label>
            <input class="checkout-input" id="cardCvv" type="text" placeholder="123" maxlength="4" oninput="this.value=this.value.replace(/\D/g,'')">
          </div>
          <div class="checkout-form-group full">
            <label>Parcelas</label>
            <select class="checkout-input" id="cardInstall">
              ${Array.from({length:10},(_,i)=>`<option value="${i+1}">${i+1}x de R$ ${(total/(i+1)).toFixed(2)} ${i===0?'(à vista)':'sem juros'}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>`;
  } else {
    box.innerHTML = `
      <div class="payment-detail-box boleto-box">
        <p style="font-size:.88rem;color:var(--gray-600);margin-bottom:1rem;">Vencimento: <strong>${new Date(Date.now()+3*86400000).toLocaleDateString('pt-BR')}</strong></p>
        <div class="boleto-barcode" id="boletoCode">${boletoCode}</div>
        <button class="btn-copy-boleto" onclick="copyText('${boletoCode}', this, 'Código Copiado! ✓')">📋 Copiar Código do Boleto</button>
        <p style="font-size:.78rem;color:var(--gray-500);margin-top:.75rem;">⚠️ Após o pagamento, pode levar até 3 dias úteis para compensar.</p>
      </div>`;
  }
}

function fmtCard(el) {
  let v = el.value.replace(/\D/g,'').slice(0,16);
  el.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
  const flag = document.getElementById('cardFlag');
  if (!flag) return;
  if (v.startsWith('4')) flag.textContent = '💳 Visa';
  else if (v.startsWith('5')) flag.textContent = '💳 Master';
  else if (v.startsWith('3')) flag.textContent = '💳 Amex';
  else flag.textContent = '💳';
}
function fmtExpiry(el) {
  let v = el.value.replace(/\D/g,'').slice(0,4);
  el.value = v.length > 2 ? v.replace(/(\d{2})(\d+)/,'$1/$2') : v;
}
function copyText(text, btn, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = successMsg;
    setTimeout(() => { btn.textContent = orig; }, 2000);
  }).catch(() => showNotification('⚠️ Não foi possível copiar', 'warn'));
}

function validateCardForm() {
  const num = document.getElementById('cardNumber')?.value.replace(/\s/g,'');
  const name = document.getElementById('cardName')?.value.trim();
  const exp = document.getElementById('cardExpiry')?.value;
  const cvv = document.getElementById('cardCvv')?.value;
  if (!num || num.length < 16) { showNotification('⚠️ Número do cartão inválido', 'warn'); return false; }
  if (!name || name.length < 3) { showNotification('⚠️ Nome no cartão inválido', 'warn'); return false; }
  if (!exp || exp.length < 5) { showNotification('⚠️ Validade inválida', 'warn'); return false; }
  if (!cvv || cvv.length < 3) { showNotification('⚠️ CVV inválido', 'warn'); return false; }
  return true;
}

function processPayment() {
  const method = checkoutData.payment.method;
  if (method === 'card' && !validateCardForm()) return;

  const { total } = getCartTotals();
  const orderId = `UF${Date.now().toString().slice(-8)}`;
  const order = {
    id: orderId, date: new Date().toLocaleDateString('pt-BR'),
    items: [...cart], total, method, status: 'processando',
    address: checkoutData.address
  };
  orders.unshift(order);
  saveOrders();
  cart = []; appliedCoupon = null;
  saveCart(); updateCartBadge();

  checkoutStep = 3;
  checkoutData.orderId = orderId;
  checkoutData.total = total;
  renderCheckoutStepper();
  renderCheckoutStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderConfirmationStep(main) {
  const methodIcons = { pix:'📱', card:'💳', boleto:'🏦' };
  const methodNames = { pix:'PIX', card:'Cartão de Crédito', boleto:'Boleto Bancário' };
  main.innerHTML = `
    <div class="checkout-confirmation">
      <span class="confirmation-icon">🎉</span>
      <div class="confirmation-title">Pedido Confirmado!</div>
      <div class="confirmation-order-num">Número do pedido: <strong>${checkoutData.orderId}</strong></div>
      <p style="color:var(--gray-600);font-size:.95rem;margin-bottom:1.5rem;">
        ${checkoutData.payment.method === 'pix'
          ? 'Aguardando confirmação do pagamento PIX. Você receberá um e-mail de confirmação.'
          : checkoutData.payment.method === 'boleto'
          ? 'Seu boleto foi gerado. Após o pagamento, você receberá a confirmação por e-mail.'
          : 'Seu pedido está sendo processado. Você receberá um e-mail de confirmação em breve.'}
      </p>
      <div class="confirmation-steps">
        <div class="confirmation-step"><div class="confirmation-step-icon">✅</div><strong>Pedido feito</strong><span>Agora</span></div>
        <div class="confirmation-step"><div class="confirmation-step-icon">📦</div><strong>Preparando</strong><span>1–2 dias</span></div>
        <div class="confirmation-step"><div class="confirmation-step-icon">🚚</div><strong>A caminho</strong><span>3–5 dias</span></div>
        <div class="confirmation-step"><div class="confirmation-step-icon">🏠</div><strong>Entregue</strong><span>5–8 dias</span></div>
      </div>
      <div style="background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:1.5rem;margin:1.5rem 0;text-align:left;">
        <div style="font-weight:700;margin-bottom:.5rem;">📍 Entregar em:</div>
        <p style="font-size:.88rem;color:var(--gray-600);">${checkoutData.address.street}, ${checkoutData.address.number} — ${checkoutData.address.neighborhood || ''}<br>${checkoutData.address.city}/${checkoutData.address.state} · CEP ${checkoutData.address.cep}</p>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary" onclick="navigateTo('home')">Continuar Comprando</button>
        <button class="btn-secondary" onclick="navigateTo('tracking')">📦 Rastrear Pedido</button>
        <button class="btn-secondary" onclick="navigateTo('profile')">👤 Meus Pedidos</button>
      </div>
    </div>`;
}

/* ═══ PROFILE ═══ */
let profileTab = 'overview';
function renderProfile() {
  const el = document.getElementById('profileContainer');
  
  if (!currentUser) {
    el.innerHTML = `
      <div style="text-align:center;padding:6rem 2rem;max-width:480px;margin:0 auto;">
        <div style="font-size:4rem;margin-bottom:1.5rem;">👤</div>
        <h2 style="font-family:var(--font-head);font-size:2.2rem;font-weight:900;margin-bottom:.8rem;">Sua conta</h2>
        <p style="color:var(--gray-500);margin-bottom:2rem;">Faça login para acessar pedidos, favoritos e configurações.</p>
        <button class="btn-primary" style="width:100%;padding:1.1rem;" onclick="openModal()">Entrar na Conta</button>
        <p style="margin-top:1rem;font-size:.88rem;color:var(--gray-500);">Não tem conta? <a onclick="switchAuthTab('register');openModal()" style="color:var(--accent);font-weight:700;cursor:pointer;">Cadastre-se grátis</a></p>
      </div>`;
    return;
  }

  const totalSpent = orders.reduce((s,o) => s + o.total, 0);
  const initials = currentUser.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();

  el.innerHTML = `
    <div class="profile-page">
      <!-- HEADER COMPACTO -->
      <div class="profile-header-card">
        <div class="profile-header-inner">
          <div class="prof-avatar">${initials}</div>
          <div class="prof-info">
            <div class="prof-name-row">
              <h1 class="prof-name">${currentUser.name}</h1>
              <span class="prof-badge-verified">✓ Verificado</span>
            </div>
            <p class="prof-email">${currentUser.email}</p>
            <span class="prof-member">Membro desde ${new Date().getFullYear()}</span>
          </div>
          <button class="prof-logout" onclick="logout()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sair
          </button>
        </div>
        <!-- STATS ROW COMPACTO -->
        <div class="prof-stats">
          <div class="prof-stat">
            <strong>R$ ${totalSpent.toFixed(0)}</strong>
            <span>Total Gasto</span>
          </div>
          <div class="prof-stat-div"></div>
          <div class="prof-stat" onclick="navigateTo('cart')" style="cursor:pointer;">
            <strong>${cart.reduce((s,i)=>s+i.quantity,0)}</strong>
            <span>Carrinho</span>
          </div>
          <div class="prof-stat-div"></div>
          <div class="prof-stat" onclick="navigateTo('wishlist')" style="cursor:pointer;">
            <strong>${wishlist.length}</strong>
            <span>Favoritos</span>
          </div>
          <div class="prof-stat-div"></div>
          <div class="prof-stat">
            <strong>${orders.length}</strong>
            <span>Pedidos</span>
          </div>
        </div>
      </div>

      <!-- TABS -->
      <div class="profile-tabs">
        <button class="profile-tab ${profileTab==='overview'?'active':''}" onclick="switchProfileTab('overview')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Visão Geral
        </button>
        <button class="profile-tab ${profileTab==='orders'?'active':''}" onclick="switchProfileTab('orders')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Meus Pedidos
        </button>
        <button class="profile-tab ${profileTab==='editProfile'?'active':''}" onclick="switchProfileTab('editProfile')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Editar Perfil
        </button>
        <button class="profile-tab ${profileTab==='security'?'active':''}" onclick="switchProfileTab('security')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Segurança
        </button>
      </div>

      <!-- TAB CONTENT -->
      <div class="profile-tab-content" id="profileTabContent">
        ${renderProfileTabContent()}
      </div>
    </div>`;
}

function switchProfileTab(tab) {
  profileTab = tab;
  document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.profile-tab').forEach(t => {
    if (t.getAttribute('onclick').includes(`'${tab}'`)) t.classList.add('active');
  });
  const content = document.getElementById('profileTabContent');
  if (content) content.innerHTML = renderProfileTabContent();
}

function renderProfileTabContent() {
  if (profileTab === 'overview') return renderProfileOverview();
  if (profileTab === 'orders') return renderProfileOrders();
  if (profileTab === 'editProfile') return renderEditProfileForm();
  if (profileTab === 'security') return renderSecurityForm();
  return '';
}

function renderProfileOverview() {
  const recentOrders = orders.slice(0,3);
  const recentProds = recentlyViewed.slice(0,4).map(id => products.find(p=>p.id===id)).filter(Boolean);
  return `
    <div class="profile-overview">
      <!-- Quick Actions -->
      <div class="po-section">
        <h3 class="po-section-title">Acesso Rápido</h3>
        <div class="po-quick-grid">
          <div class="po-quick-card" onclick="navigateTo('cart')">
            <div class="po-qc-icon">🛒</div>
            <span>Carrinho</span>
          </div>
          <div class="po-quick-card" onclick="navigateTo('wishlist')">
            <div class="po-qc-icon">❤️</div>
            <span>Favoritos</span>
          </div>
          <div class="po-quick-card" onclick="navigateTo('tracking')">
            <div class="po-qc-icon">📦</div>
            <span>Rastrear</span>
          </div>
          <div class="po-quick-card" onclick="switchProfileTab('editProfile')">
            <div class="po-qc-icon">⚙️</div>
            <span>Configurações</span>
          </div>
        </div>
      </div>
      <!-- Pedidos recentes -->
      <div class="po-section">
        <div class="po-section-header">
          <h3 class="po-section-title">Pedidos Recentes</h3>
          ${orders.length > 3 ? `<button class="po-see-all" onclick="switchProfileTab('orders')">Ver todos →</button>` : ''}
        </div>
        ${recentOrders.length ? recentOrders.map(o => `
          <div class="po-order-item" onclick="document.getElementById('trackingInput').value='${o.id}';navigateTo('tracking');trackOrder();" style="cursor:pointer;">
            <div class="po-order-left">
              <div class="po-order-id">#${o.id}</div>
              <div class="po-order-meta">${o.date} · ${o.items?.length||0} ${o.items?.length===1?'item':'itens'}</div>
            </div>
            <div class="po-order-right">
              <span class="po-order-price">R$ ${o.total?.toFixed(2)||'--'}</span>
              <span class="hype-status-pill status-${o.status||'processando'}">${o.status||'Processando'}</span>
            </div>
          </div>`).join('') : `<div class="po-empty"><p>Nenhum pedido ainda.</p><button class="btn-primary btn-sm" onclick="navigateTo('products')">Explorar Produtos</button></div>`}
      </div>
      <!-- Vistos recentemente -->
      ${recentProds.length ? `
        <div class="po-section">
          <h3 class="po-section-title">Vistos Recentemente</h3>
          <div class="po-recent-grid">
            ${recentProds.map(p => `
              <div class="po-recent-card" onclick="showProductDetail(${p.id})">
                <img src="${p.image}" alt="${p.name}">
                <div class="po-recent-info">
                  <span>${p.name}</span>
                  <strong>R$ ${p.price.toFixed(2)}</strong>
                </div>
              </div>`).join('')}
          </div>
        </div>` : ''}
    </div>`;
}

function renderProfileOrders() {
  return `
    <div class="po-section">
      <h3 class="po-section-title">Todos os Pedidos</h3>
      ${orders.length ? orders.map(o => `
        <div class="po-order-item" onclick="document.getElementById('trackingInput').value='${o.id}';navigateTo('tracking');trackOrder();" style="cursor:pointer;">
          <div class="po-order-left">
            <div class="po-order-id">#${o.id}</div>
            <div class="po-order-meta">${o.date} · ${o.items?.length||0} ${o.items?.length===1?'item':'itens'} · ${(o.payment?.method||'').toUpperCase()||'PIX'}</div>
          </div>
          <div class="po-order-right">
            <span class="po-order-price">R$ ${o.total?.toFixed(2)||'--'}</span>
            <span class="hype-status-pill status-${o.status||'processando'}">${o.status||'Processando'}</span>
          </div>
        </div>`).join('') : `<div class="po-empty"><p>Nenhum pedido ainda.</p><button class="btn-primary btn-sm" onclick="navigateTo('products')">Explorar Produtos</button></div>`}
    </div>`;
}

function renderEditProfileForm() {
  return `
    <div class="po-section">
      <h3 class="po-section-title">Editar Perfil</h3>
      <div class="profile-form">
        <div class="pf-group">
          <label class="pf-label">Nome completo</label>
          <input class="pf-input" type="text" id="editName" value="${currentUser.name}" placeholder="Seu nome">
        </div>
        <div class="pf-group">
          <label class="pf-label">E-mail</label>
          <input class="pf-input" type="email" id="editEmail" value="${currentUser.email}" placeholder="seu@email.com">
        </div>
        <div class="pf-group">
          <label class="pf-label">Telefone</label>
          <input class="pf-input" type="tel" id="editPhone" value="${currentUser.phone||''}" placeholder="(00) 00000-0000">
        </div>
        <div class="pf-group pf-group-full">
          <label class="pf-label">CPF</label>
          <input class="pf-input" type="text" id="editCpf" value="${currentUser.cpf||''}" placeholder="000.000.000-00" maxlength="14">
        </div>
        <div id="editProfileMsg"></div>
        <button class="btn-primary" onclick="saveProfileEdits()" style="margin-top:1rem;">Salvar Alterações</button>
      </div>
    </div>`;
}

function saveProfileEdits() { 
  const name = document.getElementById('editName')?.value.trim();
  const email = document.getElementById('editEmail')?.value.trim();
  const phone = document.getElementById('editPhone')?.value.trim();
  const cpf = document.getElementById('editCpf')?.value.trim();
  const msgEl = document.getElementById('editProfileMsg');
  if (!name || name.length < 2) { if (msgEl) { msgEl.innerHTML = '<div class="pf-error">Nome inválido</div>'; } return; }
  if (!email || !email.includes('@')) { if (msgEl) { msgEl.innerHTML = '<div class="pf-error">E-mail inválido</div>'; } return; }
  // Update user data
  const users = JSON.parse(localStorage.getItem('uf_users')) || [];
  const userIdx = users.findIndex(u => u.email === currentUser.email);
  currentUser = { ...currentUser, name, email, phone, cpf };
  if (userIdx > -1) { users[userIdx] = { ...users[userIdx], name, email, phone, cpf }; localStorage.setItem('uf_users', JSON.stringify(users)); }
  localStorage.setItem('uf_user', JSON.stringify(currentUser));
  updateUserUI();
  if (msgEl) msgEl.innerHTML = '<div class="pf-success">✓ Perfil atualizado!</div>';
  setTimeout(() => renderProfile(), 1500);
}

function renderSecurityForm() {
  return `
    <div class="po-section"
      <h3 class="po-section-title">Alterar Senha</h3>
      <div class="profile-form">
        <div class="pf-group pf-group-full">
          <label class="pf-label">Senha atual</label>
          <div class="pf-input-wrap">
            <input class="pf-input" type="password" id="currentPass" placeholder="Digite sua senha atual">
            <button class="pf-toggle-pass" onclick="togglePassField('currentPass',this)"></button>
          </div>
        </div>
        <div class="pf-group pf-group-full">
          <label class="pf-label">Nova senha</label>
          <div class="pf-input-wrap">
            <input class="pf-input" type="password" id="newPass" placeholder="Mínimo 6 caracteres">
            <button class="pf-toggle-pass" onclick="togglePassField('newPass',this)"></button>
          </div>
        </div>
        <div class="pf-group pf-group-full">
          <label class="pf-label">Confirmar nova senha</label>
          <div class="pf-input-wrap">
            <input class="pf-input" type="password" id="confirmPass" placeholder="Repita a nova senha">
            <button class="pf-toggle-pass" onclick="togglePassField('confirmPass',this)"></button>
          </div>
        </div>
        <div id="securityMsg"></div>
        <button class="btn-primary" onclick="changePassword()" style="margin-top:1rem;">Alterar Senha</button>
      </div>
      <div class="pf-section-sep"></div>
      <h3 class="po-section-title" style="margin-top:2rem;color:var(--error);">Zona de Perigo</h3>
      <p style="color:var(--gray-500);font-size:.9rem;margin-bottom:1.2rem;">Encerrar sessão em todos os dispositivos ou excluir sua conta.</p>
      <div style="display:flex;gap:.8rem;flex-wrap:wrap;">
        <button onclick="logout()" style="padding:.8rem 1.5rem;background:var(--black);color:#fff;border:none;border-radius:var(--radius-sm);font-weight:700;cursor:pointer;font-family:inherit;">Encerrar Sessão</button>
      </div>
    </div>`;
}

function togglePassField(id, btn) {
  const input = document.getElementById(id);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.textContent = input.type === 'password' ? '' : '🙈';
}

function changePassword() {
  const current = document.getElementById('currentPass')?.value;
  const newP = document.getElementById('newPass')?.value;
  const confirm = document.getElementById('confirmPass')?.value;
  const msgEl = document.getElementById('securityMsg');
  const showErr = m => { if (msgEl) msgEl.innerHTML = `<div class="pf-error">${m}</div>`; };
  const showOk = m => { if (msgEl) msgEl.innerHTML = `<div class="pf-success">${m}</div>`; };
  if (!current) return showErr('⚠️ Digite sua senha atual');
  if (!newP || newP.length < 6) return showErr('⚠️ Nova senha com mínimo 6 caracteres');
  if (newP !== confirm) return showErr('⚠️ As senhas não coincidem');
  const users = JSON.parse(localStorage.getItem('uf_users')) || [];
  const userIdx = users.findIndex(u => u.email === currentUser.email);
  if (userIdx === -1 || users[userIdx].password !== current) return showErr('⚠️ Senha atual incorreta');
  users[userIdx].password = newP;
  localStorage.setItem('uf_users', JSON.stringify(users));
  showOk('✓ Senha alterada com sucesso!');
  ['currentPass','newPass','confirmPass'].forEach(id => { const el = document.getElementById(id); if (el) el.value=''; });
}


/* ═══ TRACKING ═══ */
function renderTracking() {
  document.getElementById('trackingContainer').innerHTML = `
    <div style="max-width:640px;margin:0 auto;">
      <div class="tracking-hero">
        <h2 class="section-title"> Rastrear Pedido</h2>
        <p style="color:var(--gray-500);">Insira o número do seu pedido para acompanhar a entrega</p>
      </div>
      <div class="tracking-search">
        <div class="tracking-input-row">
          <input class="tracking-input" id="trackingInput" type="text" placeholder="Ex: UF12345678" oninput="this.value=this.value.toUpperCase()">
          <button class="btn-track" onclick="trackOrder()">Rastrear</button>
        </div>
        <p style="font-size:.78rem;color:var(--gray-500);margin-top:.5rem;text-align:center;">O número do pedido está no e-mail de confirmação</p>
      </div>
      <div id="trackingResult"></div>
      ${orders.length ? `
        <div style="margin-top:2rem;">
          <p style="font-size:.88rem;font-weight:700;color:var(--gray-700);margin-bottom:.75rem;">Seus pedidos recentes:</p>
          ${orders.slice(0,3).map(o=>`
            <div style="padding:.75rem 1rem;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius-md);margin-bottom:.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="document.getElementById('trackingInput').value='${o.id}';trackOrder();">
              <div>
                <div style="font-weight:700;font-size:.88rem;">#${o.id}</div>
                <div style="font-size:.75rem;color:var(--gray-500);">${o.date}</div>
              </div>
              <span style="font-size:.78rem;font-weight:700;color:var(--accent);">Ver →</span>
            </div>`).join('')}
        </div>` : ''}
    </div>`;
}

function trackOrder() {
  const id = document.getElementById('trackingInput')?.value.trim();
  const result = document.getElementById('trackingResult');
  if (!id) { showNotification('⚠️ Digite o número do pedido', 'warn'); return; }

  const order = orders.find(o => o.id === id);
  if (!order) {
    result.innerHTML = `<div style="text-align:center;padding:2rem;background:var(--gray-50);border-radius:var(--radius-lg);border:1px solid var(--gray-200);">
      <div style="font-size:2.5rem;margin-bottom:.75rem;">🔍</div>
      <h3 style="font-size:1.1rem;margin-bottom:.4rem;">Pedido não encontrado</h3>
      <p style="color:var(--gray-500);font-size:.88rem;">Verifique o número e tente novamente</p>
    </div>`;
    return;
  }

  const steps = [
    { label: 'Pedido confirmado',    date: order.date, done: true },
    { label: 'Pagamento aprovado',   date: order.date, done: order.status !== 'processando' },
    { label: 'Preparando para envio',date: '',          done: order.status !== 'processando' },
    { label: 'Em transporte',        date: '',          done: order.status === 'enviado' || order.status === 'entregue' },
    { label: 'Entregue',             date: '',          done: order.status === 'entregue', current: order.status === 'enviado' }
  ];
  const currentIdx = steps.findIndex(s => !s.done);

  result.innerHTML = `
    <div class="tracking-order-card">
      <div class="tracking-order-header">
        <div>
          <div style="font-weight:800;font-size:1rem;">Pedido #${order.id}</div>
          <div style="font-size:.78rem;color:var(--gray-500);">${order.date} · R$ ${order.total?.toFixed(2)}</div>
        </div>
        <span class="profile-order-status status-${order.status||'processando'}">${order.status==='entregue'?'Entregue':order.status==='enviado'?'Em Transporte':'Processando'}</span>
      </div>
      <div class="tracking-timeline">
        ${steps.map((s, i) => `
          <div class="tracking-step ${s.done?'done':''} ${i===currentIdx?'current':''}">
            <div class="tracking-step-left">
              <div class="tracking-step-dot"></div>
              ${i < steps.length-1 ? `<div class="tracking-step-line"></div>` : ''}
            </div>
            <div class="tracking-step-content">
              <div class="tracking-step-label">${s.done?'✓ ':i===currentIdx?'⟳ ':''}${s.label}</div>
              ${s.date ? `<div class="tracking-step-date">${s.date}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div style="text-align:center;margin-top:1rem;">
      <p style="font-size:.82rem;color:var(--gray-500);">📍 Endereço: ${order.address?.street||''}, ${order.address?.number||''} — ${order.address?.city||''}/${order.address?.state||''}</p>
    </div>`;
}

/* ═══ NAVIGATE ═══ */
function navigateTo(page) {
  // Salva a página atual — exceto checkout e detalhe de produto
  const noRestore = ['checkout', 'productDetail'];
  localStorage.setItem('uf_current_page', noRestore.includes(page) ? 'home' : page);

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('productsPage')?.classList.toggle('category-results-mode', page === 'products' && currentFilter !== 'todos');
  const map = {
    home: 'homePage', categories: 'categoriesPage', products: 'productsPage', productDetail: 'productDetailPage',
    about: 'aboutPage', cart: 'cartPage', wishlist: 'wishlistPage',
    checkout: 'checkoutPage', profile: 'profilePage', tracking: 'trackingPage'
  };
  document.getElementById(map[page])?.classList.add('active');

  if (page === 'cart')          { renderCart();     setTimeout(()=>injectBackBar('cart'), 60); }
  else if (page === 'wishlist') { renderWishlist(); setTimeout(()=>injectBackBar('wishlist'), 60); }
  else if (page === 'about')    { renderAbout();    setTimeout(()=>injectBackBar('about'), 60); }
  else if (page === 'checkout') { renderCheckout(); setTimeout(()=>injectBackBar('checkout'), 60); }
  else if (page === 'profile')  { renderProfile();  setTimeout(()=>injectBackBar('profile'), 60); }
  else if (page === 'tracking') { renderTracking(); setTimeout(()=>injectBackBar('tracking'), 60); }
  else if (page === 'categories') { renderMarketplaceCategoryProducts(currentFilter); }
  else if (page === 'products') {
    setTimeout(() => { renderSkeletons('productsGrid', 8); setTimeout(renderFilters, 400); }, 50);
    setTimeout(()=>injectBackBar('products'), 60);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

/* ── Barra de voltar universal (desktop + mobile) ── */
function injectBackBar(page) {
  const backBarConfig = {
    productDetail: { label: 'Voltar ao Início',      action: ()=>navigateTo('home') },
    products:      { label: 'Voltar ao Início',       action: ()=>navigateTo('home') },
    cart:          { label: 'Continuar Comprando',    action: ()=>navigateTo('products') },
    wishlist:      { label: 'Voltar aos Produtos',    action: ()=>navigateTo('products') },
    profile:       { label: 'Voltar ao Início',       action: ()=>navigateTo('home') },
    tracking:      { label: 'Voltar ao Início',       action: ()=>navigateTo('home') },
    about:         { label: 'Voltar ao Início',       action: ()=>navigateTo('home') },
    checkout:      { label: 'Voltar ao Carrinho',     action: ()=>navigateTo('cart') },
  };
  const pageMap = {
    productDetail: 'productDetailPage', products: 'productsPage',
    cart: 'cartPage', wishlist: 'wishlistPage', profile: 'profilePage',
    tracking: 'trackingPage', about: 'aboutPage', checkout: 'checkoutPage'
  };
  const cfg = backBarConfig[page];
  if (!cfg) return;
  const pageEl = document.getElementById(pageMap[page]);
  if (!pageEl) return;

  // Remove barra antiga
  pageEl.querySelector('.uf-back-bar')?.remove();

  const bar = document.createElement('div');
  bar.className = 'uf-back-bar';
  bar.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg><span>${cfg.label}</span>`;
  bar.addEventListener('click', cfg.action);
  pageEl.insertBefore(bar, pageEl.firstChild);
}

/* ── Mobile gallery swipe (chamado de showProductDetail) ── */
function initMobileGallerySwipe() {
  const mainImg = document.getElementById('mainProductImg');
  const thumbs  = document.querySelectorAll('.product-thumbnail');
  if (!mainImg || !thumbs.length) return;

  if (thumbs.length > 1) {
    const gallery = document.querySelector('.product-detail-gallery');
    if (gallery && !gallery.querySelector('.gallery-swipe-hint')) {
      const hint = document.createElement('p');
      hint.className = 'gallery-swipe-hint';
      hint.textContent = '← deslize para ver mais fotos →';
      gallery.appendChild(hint);
    }
  }

  const images = Array.from(thumbs).map(t => t.querySelector('img')?.src).filter(Boolean);
  let currentIdx = 0;

  function goToImage(idx) {
    if (idx < 0) idx = images.length - 1;
    if (idx >= images.length) idx = 0;
    currentIdx = idx;
    mainImg.style.opacity = '0';
    setTimeout(() => { mainImg.src = images[currentIdx]; mainImg.style.opacity = '1'; }, 120);
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentIdx));
  }

  mainImg.style.transition = 'opacity .12s ease';
  const mainWrap = document.getElementById('mainImage');
  if (mainWrap) {
    let txStart = 0;
    mainWrap.addEventListener('touchstart', e => { txStart = e.touches[0].clientX; }, { passive: true });
    mainWrap.addEventListener('touchend',   e => {
      const diff = txStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goToImage(diff > 0 ? currentIdx + 1 : currentIdx - 1);
    }, { passive: true });
  }
}

/* ═══ ABOUT ═══ */
function renderAbout() {
  document.getElementById('aboutContainer').innerHTML = `
    <div style="max-width:1300px;margin:0 auto;">
      <div class="section-header section-header--center">
        <h2 class="section-title">Sobre a Urban Flow</h2>
        <p class="section-sub section-sub--large">Moda urbana com propósito desde 2026</p>
      </div>
      <div class="about-hero">
        <div>
          <h2 class="about-hero-title">Nossa<br>História</h2>
          <p class="about-hero-copy">A <strong class="text-highlight">Urban Flow</strong> nasceu da paixão por moda urbana e performance. Acreditamos que estilo e qualidade devem andar juntos, criando peças que acompanham o ritmo da cidade.</p>
          <p class="about-hero-copy">Desde 2026, selecionamos cada produto pensando em quem vive a cidade de forma intensa: do treino ao trabalho, da rua ao lazer. Nossa missão é proporcionar conforto, estilo e confiança para todos os momentos.</p>
          <button class="btn-primary btn-lg btn-pill" onclick="navigateTo('products')">Ver Coleção →</button>
        </div>
        <div class="about-img"><img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80" alt="Urban Flow"></div>
      </div>
      <div class="about-mission">
        <h3>Nossa Missão</h3>
        <p>Democratizar o acesso a produtos de moda urbana de alta qualidade, combinando inovação, sustentabilidade e preços acessíveis para todos os estilos de vida urbana.</p>
      </div>

      <div class="about-stats">
        ${[['100+','Clientes satisfeitos'],['15+','Produtos premium'],['4.8★','Avaliação média'],['98%','Satisfação']].map(([n,l])=>`<div class="about-stat"><div class="about-stat-num">${n}</div><p class="about-stat-label">${l}</p></div>`).join('')}
      </div>
      <div class="about-team">
        <h3>Conheça Nossa Equipe</h3>
        <div class="about-team-grid">
          <div class="about-team-member">
            <div class="about-team-avatar">👨‍💻</div>
            <div class="about-team-name">Felipe Almagro</div>
            <div class="about-team-role">Fundador & CEO</div>
          </div>
          <div class="about-team-member">
            <div class="about-team-avatar">👨‍💻</div>
            <div class="about-team-name">Matheus Oliveira</div>
            <div class="about-team-role">Designer Chefe</div>
          </div>
          <div class="about-team-member">
            <div class="about-team-avatar">👨‍💻</div>
            <div class="about-team-name">Felipe Zecchi</div>
            <div class="about-team-role">Desenvolvedor</div>
          </div>
          <div class="about-team-member">
            <div class="about-team-avatar">👨‍💻</div>
            <div class="about-team-name">Henzzo Dorta</div>
            <div class="about-team-role">Gerente de Marketing</div>
          </div>
        </div>
      </div>
      <div class="about-testimonials">
        <h3>O que nossos clientes dizem</h3>
        <div class="about-testimonials-grid">
          <div class="about-testimonial">
            <div class="about-testimonial-stars">★★★★★</div>
            <p class="about-testimonial-text">"A Urban Flow transformou minha experiência de compras online. Produtos de qualidade, entrega rápida e atendimento excepcional!"</p>
            <div class="about-testimonial-author">Marcos R., São Paulo</div>
          </div>
          <div class="about-testimonial">
            <div class="about-testimonial-stars">★★★★★</div>
            <p class="about-testimonial-text">"Finalmente encontrei uma loja que entende moda urbana. Cada peça é pensada para o dia a dia da cidade."</p>
            <div class="about-testimonial-author">Camila F., Curitiba</div>
          </div>
          <div class="about-testimonial">
            <div class="about-testimonial-stars">★★★★★</div>
            <p class="about-testimonial-text">"Qualidade premium a preços justos. Recomendo para todos os amantes de streetwear!"</p>
            <div class="about-testimonial-author">Lucas A., Rio de Janeiro</div>
          </div>
        </div>
      </div>
      <div class="about-contact">
        <h3>Fale Conosco</h3>
        <p>📧 <a href="mailto:contato@urbanflow.com">contato@urbanflow.com</a></p>
        <p>📱 <a href="tel:+5517992680298">(17) 99268-0298</a></p>
        <div class="about-contact-actions">
          <a class="btn-whatsapp" href="https://wa.me/5517992680298" target="_blank" rel="noopener noreferrer">💬 Falar no WhatsApp</a>
        </div>
      </div>
    </div>`;
}

/* ═══ STORAGE ═══ */
function saveCart()    { localStorage.setItem('uf_cart',     JSON.stringify(cart)); }
function saveWishlist(){ localStorage.setItem('uf_wishlist', JSON.stringify(wishlist)); }
function saveOrders()  { localStorage.setItem('uf_orders',  JSON.stringify(orders)); }
function updateCartBadge() {
  const b = document.querySelector('#cartIcon .badge'), n = cart.reduce((s,i)=>s+i.quantity,0);
  b.textContent = n; b.style.display = n ? 'flex' : 'none';
}
function updateWishlistBadge() {
  const b = document.querySelector('#wishIcon .badge');
  b.textContent = wishlist.length; b.style.display = wishlist.length ? 'flex' : 'none';
}

function validateRegisterName(input) {
  const hint = document.getElementById('nameHint');
  const val = input.value.trim();
  if (!val) { hint.textContent = ''; input.classList.remove('input-ok','input-err'); return; }
  if (/^[a-zA-ZÀ-ÿ\s]+$/.test(val)) {
    hint.textContent = '✓ Nome válido'; hint.style.color = 'var(--success)';
    input.classList.add('input-ok'); input.classList.remove('input-err');
  } else {
    hint.textContent = '✗ Apenas letras, sem números'; hint.style.color = 'var(--error)';
    input.classList.add('input-err'); input.classList.remove('input-ok');
  }
}
function validateRegisterEmail(input) {
  const hint = document.getElementById('emailHint');
  const val = input.value.trim().toLowerCase();
  if (!val) { hint.textContent = ''; input.classList.remove('input-ok','input-err'); return; }
  // Gmail só aceita: letras a-z, números 0-9 e pontos no local part (não começa/termina/duplica pontos)
  // Formato exato: local@gmail.com onde local = [a-z0-9][a-z0-9.]*[a-z0-9]  ou só 1 char [a-z0-9]
  const gmailRegex = /^[a-z0-9]([a-z0-9.]*[a-z0-9])?@gmail\.com$/;
  const localPart = val.replace('@gmail.com', '');
  const hasDotDot = localPart.includes('..');
  if (gmailRegex.test(val) && !hasDotDot) {
    hint.textContent = '✓ Email válido'; hint.style.color = 'var(--success)';
    input.classList.add('input-ok'); input.classList.remove('input-err');
  } else if (!val.includes('@')) {
    hint.textContent = '✗ Digite seu @gmail.com'; hint.style.color = 'var(--error)';
    input.classList.add('input-err'); input.classList.remove('input-ok');
  } else if (!val.endsWith('@gmail.com')) {
    hint.textContent = '✗ Apenas @gmail.com é aceito'; hint.style.color = 'var(--error)';
    input.classList.add('input-err'); input.classList.remove('input-ok');
  } else if (hasDotDot) {
    hint.textContent = '✗ Gmail não permite dois pontos seguidos'; hint.style.color = 'var(--error)';
    input.classList.add('input-err'); input.classList.remove('input-ok');
  } else {
    hint.textContent = '✗ Caracteres inválidos — Gmail aceita só letras, números e pontos'; hint.style.color = 'var(--error)';
    input.classList.add('input-err'); input.classList.remove('input-ok');
  }
}

/* ═══ AUTH ═══ */
function openModal() {
  switchAuthTab('login');
  document.getElementById('authModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function openModalRegister() {
  switchAuthTab('register');
  document.getElementById('authModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('authModal').classList.remove('active');
  document.body.style.overflow = '';
  document.querySelectorAll('.error-message').forEach(e => { e.classList.remove('active'); e.textContent = ''; });
  document.getElementById('loginForm').reset();
  document.getElementById('registerForm').reset();
  resetSubmitBtn('btnLogin', 'Entrar na conta');
  resetSubmitBtn('btnRegister', 'Criar minha conta');
}
function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLogin').classList.toggle('active', isLogin);
  document.getElementById('tabRegister').classList.toggle('active', !isLogin);
  document.getElementById('panelLogin').classList.toggle('active', isLogin);
  document.getElementById('panelRegister').classList.toggle('active', !isLogin);
  document.getElementById('authLeftTitle').textContent = isLogin ? 'Bem-vindo de volta!' : 'Junte-se à Urban Flow!';
  document.getElementById('authLeftSub').textContent  = isLogin ? 'Acesse sua conta e aproveite ofertas exclusivas.' : 'Crie sua conta e tenha acesso a ofertas exclusivas.';
  document.querySelectorAll('.error-message').forEach(e => { e.classList.remove('active'); e.textContent = ''; });
}
function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') { input.type = 'text'; btn.textContent = '🙈'; }
  else { input.type = 'password'; btn.textContent = '👁️'; }
}
function setSubmitLoading(btnId, loading) {
  const btn = document.getElementById(btnId), text = btn?.querySelector('.btn-text'), spin = btn?.querySelector('.btn-spinner');
  if (btn) btn.disabled = loading;
  if (text) text.style.opacity = loading ? '.5' : '1';
  if (spin) spin.style.display = loading ? 'inline-block' : 'none';
}
function resetSubmitBtn(btnId, label) {
  const btn = document.getElementById(btnId); if (!btn) return;
  btn.disabled = false;
  const text = btn.querySelector('.btn-text'), spin = btn.querySelector('.btn-spinner');
  if (text) { text.textContent = label; text.style.opacity = '1'; }
  if (spin) spin.style.display = 'none';
}
function handleLogin(e) {
  e.preventDefault();
  setSubmitLoading('btnLogin', true);
  setTimeout(() => {
    const email = document.getElementById('loginEmail').value.trim();
    const pass  = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('uf_users')) || [];
    const user  = users.find(u => u.email === email && u.password === pass);
    if (user) {
      currentUser = { name: user.name, email: user.email };
      localStorage.setItem('uf_user', JSON.stringify(currentUser));
      updateUserUI(); closeModal();
      showNotification(`👋 Bem-vindo de volta, ${user.name}!`);
    } else {
      const el = document.getElementById('loginError');
      el.innerHTML = '⚠️ Email ou senha incorretos'; el.classList.add('active');
      setSubmitLoading('btnLogin', false);
    }
  }, 400);
}
function handleRegister(e) {
  e.preventDefault();
  setSubmitLoading('btnRegister', true);
  setTimeout(() => {
    const name  = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const pass  = document.getElementById('registerPassword').value;
    const conf  = document.getElementById('registerConfirm').value;
    const err   = document.getElementById('registerError');
    const showErr = msg => { err.innerHTML = msg; err.classList.add('active'); setSubmitLoading('btnRegister', false); };
    if (!name || !/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) return showErr('⚠️ Nome deve conter apenas letras (sem números ou símbolos)');
    const gmailRegex = /^[a-z0-9]([a-z0-9.]*[a-z0-9])?@gmail\.com$/;
    if (!gmailRegex.test(email.toLowerCase()) || email.toLowerCase().includes('..')) return showErr('⚠️ Use um e-mail Gmail válido (letras, números e pontos, sem caracteres especiais)');
    if (pass.length < 6) return showErr('⚠️ Senha com mínimo 6 caracteres');
    if (pass !== conf)   return showErr('⚠️ As senhas não coincidem');
    const users = JSON.parse(localStorage.getItem('uf_users')) || [];
    if (users.find(u => u.email === email)) return showErr('⚠️ Email já cadastrado');
    users.push({ name, email, password: pass });
    localStorage.setItem('uf_users', JSON.stringify(users));
    currentUser = { name, email };
    localStorage.setItem('uf_user', JSON.stringify(currentUser));
    updateUserUI(); closeModal();
    showNotification(`🎉 Conta criada! Bem-vindo, ${name}!`);
  }, 500);
}
function handleLogout() {
  currentUser = null; localStorage.removeItem('uf_user'); updateUserUI();
  document.getElementById('userDropdown').classList.remove('active');
  showNotification('👋 Até logo!');
}

/* ═══ USER UI ═══ */
function updateUserUI() {
  const dropdown = document.getElementById('userDropdown'), icon = document.getElementById('userIcon');
  if (currentUser) {
    icon.innerHTML = ''; icon.style.cssText = ''; icon.className = 'user-icon user-icon--logged';
    icon.textContent = currentUser.name.charAt(0).toUpperCase();
    dropdown.innerHTML = `
      <div style="padding:.5rem 0 1rem;border-bottom:1px solid var(--gray-200);margin-bottom:.75rem;">
        <p style="font-size:.7rem;color:var(--gray-500);text-transform:uppercase;margin-bottom:.25rem;">Logado como</p>
        <p style="font-weight:700;">${currentUser.name}</p>
        <p style="font-size:.78rem;color:var(--gray-500);">${currentUser.email}</p>
      </div>
      <button class="ud-btn ud-btn--outline" onclick="navigateTo('profile');document.getElementById('userDropdown').classList.remove('active');">👤 Meu Perfil</button>
      <button class="ud-btn ud-btn--outline" onclick="navigateTo('wishlist');document.getElementById('userDropdown').classList.remove('active');">❤️ Favoritos</button>
      <button class="ud-btn ud-btn--outline" onclick="navigateTo('tracking');document.getElementById('userDropdown').classList.remove('active');">📦 Rastrear Pedido</button>
      <button class="ud-btn ud-btn--primary" onclick="handleLogout()">Sair da conta</button>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    icon.style.cssText = ''; icon.className = 'user-icon';
    dropdown.innerHTML = `
      <p style="font-size:.82rem;color:var(--gray-600);margin-bottom:.9rem;text-align:center;">Faça login para acessar sua conta</p>
      <button class="ud-btn ud-btn--outline" style="text-align:center;" onclick="openModal();document.getElementById('userDropdown').classList.remove('active');">Entrar</button>
      <button class="ud-btn ud-btn--primary" style="text-align:center;" onclick="document.getElementById('userDropdown').classList.remove('active');openModalRegister();">Criar Conta</button>`;
  }
}

/* ═══ NOTIFICATION ═══ */
function showNotification(msg, type = 'success') {
  document.querySelectorAll('.uf-notif').forEach(n => n.remove());
  const n = document.createElement('div');
  n.className = 'uf-notif';
  const isWarn = type === 'warn';
  n.style.cssText = `position:fixed;bottom:2rem;right:2rem;background:${isWarn?'#fff7ed':'#111'};color:${isWarn?'#92400e':'#fff'};border:${isWarn?'1px solid #fed7aa':'none'};padding:1rem 1.5rem;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.2);z-index:9999;font-weight:600;font-size:.9rem;animation:nfIn .3s cubic-bezier(.34,1.56,.64,1);max-width:320px;`;
  n.textContent = msg;
  document.body.appendChild(n);
  setTimeout(() => { n.style.animation = 'nfOut .3s ease'; setTimeout(() => n.remove(), 300); }, 3000);
}

/* ═══ UTILS ═══ */
function getCatName(id) { return categories.find(c => c.id === id)?.name || id; }

/* ═══ PROFILE FUNCTIONS ═══ */
function editProfile() {
  showNotification('Funcionalidade de edição de perfil em desenvolvimento', 'warn');
}

function showSettings() {
  showNotification('Configurações em desenvolvimento', 'warn');
}

function showSupport() {
  showNotification('Suporte em desenvolvimento - Entre em contato: contato@urbanflow.com', 'warn');
}

function logout() {
  currentUser = null;
  localStorage.removeItem('uf_user');
  updateUserUI();
  navigateTo('home');
  showNotification('Você saiu da conta');
}

/* ═══ BOOT ═══ */
/* ═══ FAQ TOGGLE ═══ */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const body = item.querySelector('.faq-body');
  const arrow = btn.querySelector('.faq-arrow');
  const isOpen = item.classList.contains('open');

  // Fecha todos
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-body').style.maxHeight = '0';
    el.querySelector('.faq-arrow').style.transform = 'rotate(0deg)';
  });

  // Abre o clicado (se estava fechado)
  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    arrow.style.transform = 'rotate(180deg)';
  }
}

document.addEventListener('DOMContentLoaded', init);

/* ═══ CURSOR PERSONALIZADO ═══ */
/* initCursor desativado — cursor padrão do sistema restaurado */
function initCursor() {}

/* ═══ SCROLL REVEAL ═══ */
function initScrollReveal() {
  // Add reveal classes to key elements
  const toReveal = [
    { sel: '.benefit-item', cls: 'reveal' },
    { sel: '.category-card', cls: 'reveal-scale' },
    { sel: '.product-card', cls: 'reveal' },
    { sel: '.testimonial-card', cls: 'reveal' },
    { sel: '.section-header', cls: 'reveal' },
    { sel: '.countdown-inner', cls: 'reveal' },
    { sel: '.mid-banner-content', cls: 'reveal-scale' },
    { sel: '.footer-section', cls: 'reveal' },
  ];
  toReveal.forEach(({ sel, cls }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add(cls);
      if (i % 4 === 1) el.classList.add('stagger-1');
      if (i % 4 === 2) el.classList.add('stagger-2');
      if (i % 4 === 3) el.classList.add('stagger-3');
    });
  });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
}

/* ═══ PARTICLES ═══ */
function initParticles() {
  const hero = document.getElementById('heroSection');
  if (!hero) return;
  const bg = document.createElement('div');
  bg.className = 'particles-bg';
  hero.appendChild(bg);
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 8}s;
      opacity:0;
    `;
    bg.appendChild(p);
  }
}