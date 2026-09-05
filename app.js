const products = [
  {id:'cuff', name:'Coin & Bloom Cuff', note:'Recreated statement cuff', price:2200, image:'13891785d815058c.jpg'},
  {id:'crescent', name:'Heritage Chainfall', note:'Crescent fringe necklace', price:3000, image:'65a4252562d4ce69.jpg'},
  {id:'azure', name:'Azure Drop Earrings', note:'Blue stone drop earrings', price:1850, image:'077457265df3be42.jpg'},
  {id:'noir', name:'Noir Pearl Cascade', note:'Handmade tassel earrings', price:2450, image:'1e687dd03869e5e3.jpg'},
  {id:'royal', name:'Royal Heirloom Set', note:'Festive necklace detail', price:2850, image:'4d4287d7d12f8709.jpg'},
  {id:'tales', name:'Tales of Tradition', note:'Curated pair edit', price:1950, image:'3b94e86b57d1b837.jpg'},
  {id:'vintage', name:'Vintage Coin Drops', note:'Recreated everyday pair', price:1500, image:'060be121423065e7.jpg'},
  {id:'golden', name:'Golden Leaf Earrings', note:'One-of-a-kind statement pair', price:2350, image:'f3a48c229aef6145.jpg'}
];
let cart = JSON.parse(localStorage.getItem('loop-luxe-cart') || '[]');
const money = n => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
const grid = document.querySelector('#productGrid');
grid.innerHTML = products.map(p => `<article class="product"><div class="product-image"><img loading="lazy" src="${p.image}" alt="${p.name}"></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.note}</p></div><strong class="price">${money(p.price)}</strong></div><button class="quick-add" data-id="${p.id}">Add to bag</button></article>`).join('');
const drawer=document.querySelector('#cartDrawer'),scrim=document.querySelector('#scrim'),items=document.querySelector('#cartItems'),empty=document.querySelector('#cartEmpty');
function renderCart(){const chosen=cart.map(id=>products.find(p=>p.id===id)).filter(Boolean);document.querySelector('#cartCount').textContent=chosen.length;items.innerHTML=chosen.map((p,i)=>`<div class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><p>${money(p.price)}</p></div><button class="remove" data-index="${i}">Remove</button></div>`).join('');empty.hidden=chosen.length>0;document.querySelector('#cartTotal').textContent=money(chosen.reduce((sum,p)=>sum+p.price,0));localStorage.setItem('loop-luxe-cart',JSON.stringify(cart));}
function toggleCart(open){drawer.classList.toggle('open',open);scrim.classList.toggle('show',open);drawer.setAttribute('aria-hidden',!open)}
document.addEventListener('click',e=>{const add=e.target.closest('[data-id]');if(add){cart.push(add.dataset.id);renderCart();toggleCart(true)}if(e.target.closest('#cartButton'))toggleCart(true);if(e.target.closest('[data-close-cart]')||e.target===scrim)toggleCart(false);const remove=e.target.closest('.remove');if(remove){cart.splice(Number(remove.dataset.index),1);renderCart()}if(e.target.closest('[data-open-custom]'))document.querySelector('#customDialog').showModal();if(e.target.closest('.dialog-close'))document.querySelector('#customDialog').close();});
document.querySelector('#checkout').addEventListener('click',()=>{const chosen=cart.map(id=>products.find(p=>p.id===id)).filter(Boolean);if(!chosen.length)return;const lines=chosen.map(p=>`• ${p.name} — ${money(p.price)}`).join('\n');const subtotal=chosen.reduce((s,p)=>s+p.price,0);const text=`Hello Loop & Luxe! I would like to order:\n${lines}\n\nPieces: ${money(subtotal)}\nDelivery & packaging: ₹200\nEstimated total: ${money(subtotal+200)}\n\nPlease confirm availability and payment details.`;window.open(`https://wa.me/919099733579?text=${encodeURIComponent(text)}`,'_blank','noopener');});
document.querySelector('#customForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const text=`Hello Loop & Luxe! I’m ${f.get('name')} and I’d like a custom ${f.get('piece')}.\n\nMy idea: ${f.get('idea')}\n\nI understand custom pieces take up to 10 business days. Please let me know the next steps.`;window.open(`https://wa.me/919099733579?text=${encodeURIComponent(text)}`,'_blank','noopener');});
document.querySelector('#year').textContent=new Date().getFullYear();renderCart();
