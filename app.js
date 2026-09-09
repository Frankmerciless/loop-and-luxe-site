const products = [
  { id: 'dusk-cuff', name: 'Pearl Jhumka Earrings', note: 'Festive pearl jhumkas with statement silhouette', price: 1500, image: 'product-01.jpg' },
  { id: 'bloom-necklace', name: 'Temple Brass Necklace', note: 'Antique brass necklace with a handcrafted temple feel', price: 1800, image: 'product-02.jpg' },
  { id: 'vine-earrings', name: 'Pearl Fringe Earrings', note: 'Lightweight pearl fringe earrings with a luxe finish', price: 1950, image: 'product-03.jpg' },
  { id: 'noir-drops', name: 'Royal Fringe Necklace', note: 'A bold and layered statement necklace with rich detailing', price: 2200, image: 'product-04.jpg' },
  { id: 'golden-bangle', name: 'Gold Bead Earrings', note: 'A warm gold-tone pair with heirloom-inspired beads', price: 2450, image: 'product-05.jpg' },
  { id: 'violet-set', name: 'Statement Pearl Necklace', note: 'A layered pearl necklace with a dramatic antique finish', price: 2700, image: 'product-06.jpg' },
  { id: 'heritage-set', name: 'Silver Fringe Earrings', note: 'A detailed silver-tone fringe pair with artisan texture', price: 2850, image: 'product-07.jpg' },
  { id: 'royal-fringe', name: 'Antique Gold Necklace', note: 'A grand statement necklace with intricate chainwork', price: 3000, image: 'product-08.jpg' }
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
