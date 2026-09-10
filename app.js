const products = [
  { id: 'vertical-long-neckpiece', name: '21 Vertical Long Neckpiece', note: 'Statement long neckpiece with layered antique detailing', price: 4500, image: 'product-images/21 VERTICAL LONG Neckpiece PR4500.jpeg' },
  { id: 'two-piece-neckpiece', name: '21 Piece Neckpiece', note: 'Rich layered neckpiece with a floral antique finish', price: 4500, image: 'product-images/21PICE Neckpiece PR4500.jpeg' },
  { id: 'antique-flower-choker', name: 'Antique Flower Choker', note: 'Traditional choker with floral antique styling', price: 700, image: 'product-images/Antique Flower Choker 700.jpeg' },
  { id: 'antique-pendant-01', name: 'Antique Pendant', note: 'Classic antique pendant with timeless heirloom appeal', price: 999, image: 'product-images/Antique PENDENT PR999 (1).jpeg' },
  { id: 'antique-pendant-02', name: 'Antique Pendant Set 02', note: 'A softly varied antique silhouette in the same heritage family', price: 999, image: 'product-images/Antique PENDENT PR999 (2).jpeg' },
  { id: 'antique-pendant-04', name: 'Antique Pendant Set 04', note: 'A refined variation with a distinct antique profile', price: 999, image: 'product-images/Antique PENDENT PR999 (4).jpeg' },
  { id: 'antique-pendant-05', name: 'Antique Pendant Set 05', note: 'An artisan-led alternate antique pendant in the same collection', price: 999, image: 'product-images/Antique PENDENT PR999 (5).jpeg' },
  { id: 'antique-pendant-06', name: 'Antique Pendant Set 06', note: 'A classic antique variation with more delicate detailing', price: 999, image: 'product-images/Antique PENDENT PR999 (6).jpeg' },
  { id: 'antique-pendant-07', name: 'Antique Pendant Set 07', note: 'A richer antique pendant variation with a sculpted finish', price: 999, image: 'product-images/Antique PENDENT PR999 (7).jpeg' },
  { id: 'antique-temple-neckpiece', name: 'Antique Temple Neckpiece', note: 'Temple-inspired antique neckpiece with handcrafted elegance', price: 4500, image: 'product-images/Antique TEMPLE Neckpiece PR4500.jpeg' },
  { id: 'ear-cuff-700', name: 'Ear Cuff', note: 'Classic ear cuff with a sculptural antique form', price: 700, image: 'product-images/Ear Cuff 700.jpeg' },
  { id: 'ear-cuff-700-second', name: 'Ear Cuff Set 02', note: 'Alternate ear cuff silhouette in the same handcrafted finish', price: 700, image: 'product-images/Ear Cuff 700  second.jpeg' },
  { id: 'ear-cuff-700-third', name: 'Ear Cuff Set 03', note: 'A more dramatic ear cuff variation with a bolder shape', price: 700, image: 'product-images/Ear Cuff 700  third.jpeg' },
  { id: 'ear-cuff-700-first', name: 'Ear Cuff Set 01', note: 'A refined first ear cuff variation with a luxe profile', price: 700, image: 'product-images/Ear Cuff 700 first.jpeg' },
  { id: 'five-layer-neckpiece', name: 'Five Layer Neckpiece', note: 'A layered statement neckpiece with rich antique movement', price: 4500, image: 'product-images/FIVE LAYER Neckpiece 4500.jpeg' },
  { id: 'ginni-two-layer-neckpiece', name: 'Ginni Two Layer Neckpiece', note: 'A soft two-layer neckpiece with a delicate layered statement', price: 2000, image: 'product-images/GINNI TWO LYEAR Neckpiece PR2000.jpeg' },
  { id: 'golden-flower-neckpiece', name: 'Golden Flower Neckpiece', note: 'A floral golden neckpiece with elegant handcrafted detail', price: 2000, image: 'product-images/Golden Flower Neckpiece 2000.jpeg' },
  { id: 'guinie-neckpiece', name: 'Guinie Neckpiece', note: 'A chic neckpiece with a graceful antique finish', price: 1770, image: 'product-images/Guinie Neckpiece 1770.jpeg' },
  { id: 'honeycomb-earrings', name: 'Honeycomb Earrings', note: 'Honeycomb-inspired earrings with texture and shine', price: 1777, image: 'product-images/HONEYCOMB EARRINGS PR1777.jpeg' },
  { id: 'jumka-earrings', name: 'Jumka Earrings', note: 'Classic jumka earrings with a traditional festive shape', price: 700, image: 'product-images/JUMKA EARRINGS PR700.jpeg' },
  { id: 'loop-drop-earrings', name: 'Loop Drop Earrings', note: 'Elegant loop-drop earrings with movement and light', price: 700, image: 'product-images/LOOP DROP EARRINGS PR700.jpeg' },
  { id: 'money-tree-choker-set', name: 'Money Tree Choker Set', note: 'A statement choker set with layered antique charm', price: 1111, image: 'product-images/MONEY TREE CHOKKER SET PR1111.jpeg' },
  { id: 'nidar-earrings', name: 'Nidar Earrings', note: 'Elegant statement earrings with a handcrafted finish', price: 700, image: 'product-images/NIDAR EARRINGS PR700.jpeg' },
  { id: 'peacock-flying-neckpiece', name: 'Peacock Flying Neckpiece', note: 'Peacock-inspired statement piece with a dramatic silhouette', price: 3770, image: 'product-images/Peacock Flying Neckpiece 3770.jpeg' },
  { id: 'peacock-flying-antique-neckpiece', name: 'Peacock Flying Antique Neckpiece', note: 'A richer antique version of the peacock-inspired statement necklace', price: 3777, image: 'product-images/PEACOCK FYLING Antique Neckpiece PR 3777.jpeg' },
  { id: 'peacock-style-earrings', name: 'Peacock Style Earrings', note: 'Peacock-inspired earrings with ornate craftsmanship', price: 1444, image: 'product-images/PEACOCK STYLE EARRINGS PR1444.jpeg' },
  { id: 'pendant-antique', name: 'Pendant Antique', note: 'Antique pendant design in a graceful handcrafted style', price: 999, image: 'product-images/PENDENT  Antique PR999.jpeg' },
  { id: 'sidi-saiyyed-chain-earrings', name: 'Sidi Saiyyed Chain Style Earrings', note: 'Chain-inspired earrings with architectural elegance', price: 2777, image: 'product-images/SIDI SAIYYED CHAIN STYLE EARRINGS PR 2777.jpeg' },
  { id: 'sidi-saiyyed-jali-earrings', name: 'Sidi Saiyyed Net Jali Earrings', note: 'A delicate jali-inspired pair with eye-catching detailing', price: 1444, image: 'product-images/SIDI SAIYYED NI JALI  EARRINGS PR1444.jpeg' },
  { id: 'silver-choker', name: 'Silver Choker', note: 'A polished silver choker with a sleek antique finish', price: 1500, image: 'product-images/SILVER CHOKKER PR1500.jpeg' },
  { id: 'silver-white-pearl-jumka', name: 'Silver White Pearl Jumka Earrings', note: 'Pearl-studded jumka earrings in a cool silver finish', price: 777, image: 'product-images/SILVER WHITE PEARL JUMKA  EARRINGS PR777.jpeg' },
  { id: 'silver-chain-earrings', name: 'Silver Chain Earrings', note: 'Classic silver chain earrings with a lightweight finish', price: 700, image: 'product-images/SILVERCHAIN EARRINGS PR700.jpeg' }
];
let cart = JSON.parse(localStorage.getItem('loop-luxe-cart') || '[]');
const money = n => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
const renderProducts = (selector, list) => {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = list.map(p => `<article class="product"><div class="product-image"><img loading="lazy" src="${p.image}" alt="${p.name}"></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.note}</p></div><strong class="price">${money(p.price)}</strong></div><button class="quick-add" data-id="${p.id}">Add to bag</button></article>`).join('');
};
const grid = document.querySelector('#productGrid');
const newArrivals = products.slice(0, 4);
renderProducts('#newArrivalsGrid', newArrivals);
if (grid) {
  renderProducts('#productGrid', products);
}
const drawer = document.querySelector('#cartDrawer'), scrim = document.querySelector('#scrim'), items = document.querySelector('#cartItems'), empty = document.querySelector('#cartEmpty');
function renderCart() { const chosen = cart.map(id => products.find(p => p.id === id)).filter(Boolean); document.querySelector('#cartCount').textContent = chosen.length; items.innerHTML = chosen.map((p, i) => `<div class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><p>${money(p.price)}</p></div><button class="remove" data-index="${i}">Remove</button></div>`).join(''); empty.hidden = chosen.length > 0; document.querySelector('#cartTotal').textContent = money(chosen.reduce((sum, p) => sum + p.price, 0)); localStorage.setItem('loop-luxe-cart', JSON.stringify(cart)); }
function toggleCart(open) { drawer.classList.toggle('open', open); scrim.classList.toggle('show', open); drawer.setAttribute('aria-hidden', !open) }
document.querySelectorAll('.mood-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.mood-card').forEach(item => item.classList.toggle('is-selected', item === card));
    const collection = card.dataset.collection;
    const shopSection = document.querySelector('#shop');
    if (shopSection && collection) {
      shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.click();
    }
  });
});
document.addEventListener('click', e => { const add = e.target.closest('[data-id]'); if (add) { cart.push(add.dataset.id); renderCart(); toggleCart(true) } if (e.target.closest('#cartButton')) toggleCart(true); if (e.target.closest('[data-close-cart]') || e.target === scrim) toggleCart(false); const remove = e.target.closest('.remove'); if (remove) { cart.splice(Number(remove.dataset.index), 1); renderCart() } if (e.target.closest('[data-open-custom]')) document.querySelector('#customDialog').showModal(); if (e.target.closest('.dialog-close')) document.querySelector('#customDialog').close(); });
document.querySelector('#checkout').addEventListener('click', () => { const chosen = cart.map(id => products.find(p => p.id === id)).filter(Boolean); if (!chosen.length) return; const lines = chosen.map(p => `• ${p.name} — ${money(p.price)}`).join('\n'); const subtotal = chosen.reduce((s, p) => s + p.price, 0); const text = `Hello Loop & Luxe! I would like to order:\n${lines}\n\nPieces: ${money(subtotal)}\nPlease confirm availability and the final delivery plan before payment.`; window.open(`https://wa.me/919099733579?text=${encodeURIComponent(text)}`, '_blank', 'noopener'); });
document.querySelector('#customForm').addEventListener('submit', e => { e.preventDefault(); const f = new FormData(e.currentTarget); const text = `Hello Loop & Luxe! I’m ${f.get('name')} and I’d like a custom ${f.get('piece')}.\n\nMy idea: ${f.get('idea')}\n\nI understand custom pieces take up to 10 business days. Please let me know the next steps.`; window.open(`https://wa.me/919099733579?text=${encodeURIComponent(text)}`, '_blank', 'noopener'); });
document.querySelector('#year').textContent = new Date().getFullYear(); renderCart();
