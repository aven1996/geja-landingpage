/* Geja Furniture — katalog statis
   Ganti nomor WhatsApp, alamat, email, dan data produk pada bagian CONFIG/DATA.
*/
const CONFIG = {
  whatsapp: "6281904985979",
  email: "hello@gejafurniture.id",
  currency: "IDR"
};

const products = [
 {id:"GEJA-SOF-001",name:"Sofa Aruna 3 Seater",cat:"Sofa",brand:"Geja Furniture",price:7250000,material:"Fabric + kayu",color:"Beige",size:"210 × 85 × 80 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456789",images:["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"],desc:"Sofa 3 seater dengan desain minimalis dan bantalan nyaman untuk ruang keluarga."},
 {id:"GEJA-SOF-002",name:"Sofa Luma 2 Seater",cat:"Sofa",brand:"Geja Furniture",price:5490000,material:"Fabric",color:"Cream",size:"170 × 82 × 78 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456790",images:["https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"],desc:"Sofa compact untuk apartemen, ruang tamu, atau sudut santai."},
 {id:"GEJA-KUR-001",name:"Kursi Makan Sora",cat:"Kursi",brand:"Geja Furniture",price:895000,material:"Kayu + fabric",color:"Natural",size:"52 × 55 × 78 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456791",images:["https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85"],desc:"Kursi makan dengan siluet sederhana yang mudah dipadukan."},
 {id:"GEJA-KUR-002",name:"Lounge Chair Nami",cat:"Kursi",brand:"Geja Furniture",price:1650000,material:"Fabric + kayu",color:"Sand",size:"72 × 78 × 82 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456792",images:["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=85"],desc:"Kursi lounge untuk membaca dan menikmati waktu santai."},
 {id:"GEJA-MEI-001",name:"Coffee Table Yui",cat:"Meja",brand:"Geja Furniture",price:1275000,material:"Kayu olahan",color:"Oak",size:"Ø 80 × 40 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456793",images:["https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85"],desc:"Coffee table minimalis dengan bentuk lembut untuk ruang tamu."},
 {id:"GEJA-MEI-002",name:"Meja Makan Tami",cat:"Meja",brand:"Geja Furniture",price:2890000,material:"Kayu solid",color:"Natural",size:"160 × 90 × 75 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456794",images:["https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1000&q=85"],desc:"Meja makan untuk keluarga dengan tampilan hangat dan natural."},
 {id:"GEJA-MEI-003",name:"Work Desk Kumi",cat:"Meja",brand:"Geja Furniture",price:2350000,material:"Wood veneer",color:"Walnut",size:"120 × 60 × 75 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456795",images:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"],desc:"Meja kerja minimalis dengan area kerja yang lapang."},
 {id:"GEJA-STO-001",name:"Cabinet Raka",cat:"Storage",brand:"Geja Furniture",price:3190000,material:"Wood",color:"Walnut",size:"100 × 45 × 120 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456796",images:["https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"],desc:"Storage tertutup untuk menjaga ruang tetap rapi."},
 {id:"GEJA-STO-002",name:"Rak Buku Nara",cat:"Storage",brand:"Geja Furniture",price:1890000,material:"Kayu",color:"Natural",size:"80 × 35 × 180 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456797",images:["https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"],desc:"Rak terbuka untuk buku, dekorasi, dan koleksi favorit."},
 {id:"GEJA-KAM-001",name:"Bed Frame Rumi",cat:"Kamar Tidur",brand:"Geja Furniture",price:4350000,material:"Kayu",color:"Oak",size:"160 × 200 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456798",images:["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1000&q=85"],desc:"Rangka tempat tidur dengan karakter minimalis dan hangat."},
 {id:"GEJA-KAM-002",name:"Bedside Table Kira",cat:"Kamar Tidur",brand:"Geja Furniture",price:925000,material:"Kayu",color:"Natural",size:"45 × 40 × 50 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456799",images:["https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"],desc:"Nakas ringkas untuk kebutuhan di samping tempat tidur."},
 {id:"GEJA-SOF-003",name:"Sofa Bed Hana",cat:"Sofa",brand:"Geja Furniture",price:4650000,material:"Fabric",color:"Grey",size:"200 × 90 × 85 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456800",images:["https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"],desc:"Sofa yang dapat diubah menjadi tempat beristirahat."},
 {id:"GEJA-AKS-001",name:"Floor Lamp Lio",cat:"Aksesoris",brand:"Geja Furniture",price:895000,material:"Metal + fabric",color:"White",size:"45 × 45 × 150 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456801",images:["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"],desc:"Lampu lantai dengan karakter ringan untuk sudut baca dan ruang santai."},
 {id:"GEJA-AKS-002",name:"Cushion Arlo",cat:"Aksesoris",brand:"Geja Furniture",price:325000,material:"Cotton",color:"Blue Sand",size:"45 × 45 cm",shopee:"https://shopee.co.id/Geja-Furniture-i.123456789.123456802",images:["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85"],desc:"Bantal dekoratif untuk menambah aksen warna yang lembut pada ruang."}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const rupiah = n => new Intl.NumberFormat("id-ID", {style:"currency", currency:CONFIG.currency, maximumFractionDigits:0}).format(n);
let currentCategory = "Semua";
let sortMode = "latest";
let brandFilter = "all";
let minPrice = 0;
let maxPrice = Infinity;
let modalProductId = null;
let modalImages = [];
let modalImageIndex = 0;
let viewerScale = 1;
let viewerOffsetX = 0;
let viewerOffsetY = 0;
let viewerPinchStartDistance = 0;
let viewerPinchStartScale = 1;
let viewerTouchStart = null;
let viewerLastTap = 0;

const grid = $("#productGrid");
const empty = $("#emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));
}

function getProductImages(product) {
  const images = Array.isArray(product.images) ? product.images : product.images ? [product.images] : [];
  return images.filter(Boolean).length ? images.filter(Boolean) : product.img ? [product.img] : [];
}

function setModalImage(index) {
  if (!modalImages.length) return;
  modalImageIndex = (index + modalImages.length) % modalImages.length;
  const image = $("#modalImg");
  image.src = modalImages[modalImageIndex];
  image.alt = `${$("#modalName").textContent} - Foto ${modalImageIndex + 1}`;

  const counter = $("#modalImageCount");
  if (counter) counter.textContent = `${modalImageIndex + 1} / ${modalImages.length}`;

  const dots = $("#modalImageDots");
  if (dots) {
    dots.innerHTML = modalImages.map((_, i) => `<button class="modal-image-dot${i === modalImageIndex ? " active" : ""}" type="button" aria-label="Foto ${i + 1}" aria-pressed="${i === modalImageIndex}" data-image-index="${i}"></button>`).join("");
    $$(".modal-image-dot", dots).forEach(button => {
      button.addEventListener("click", () => setModalImage(Number(button.dataset.imageIndex)));
    });
  }

  const hasMultipleImages = modalImages.length > 1;
  [$("#modalImagePrev"), $("#modalImageNext")].forEach(button => {
    if (button) button.hidden = !hasMultipleImages;
  });
  if (counter) counter.hidden = !hasMultipleImages;
  if (dots) dots.hidden = !hasMultipleImages;
  if ($("#productImageViewer").classList.contains("open")) openProductImageViewer();
}

function resetProductImageZoom() {
  viewerScale = 1;
  viewerOffsetX = 0;
  viewerOffsetY = 0;
  const image = $("#productImageViewerImg");
  image.style.transform = "none";
  $("#productImageViewerReset").hidden = true;
}

function updateProductImageZoom() {
  const viewer = $("#productImageViewer");
  const maxX = viewer.clientWidth * (viewerScale - 1) / 2;
  const maxY = viewer.clientHeight * (viewerScale - 1) / 2;
  viewerOffsetX = Math.max(-maxX, Math.min(maxX, viewerOffsetX));
  viewerOffsetY = Math.max(-maxY, Math.min(maxY, viewerOffsetY));
  $("#productImageViewerImg").style.transform = `translate(${viewerOffsetX}px, ${viewerOffsetY}px) scale(${viewerScale})`;
  $("#productImageViewerReset").hidden = viewerScale <= 1;
}

function openProductImageViewer() {
  const image = $("#productImageViewerImg");
  image.src = $("#modalImg").src;
  image.alt = $("#modalImg").alt;
  resetProductImageZoom();
  const viewer = $("#productImageViewer");
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  $("#productImageViewerClose").focus();
}

function closeProductImageViewer() {
  const viewer = $("#productImageViewer");
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  resetProductImageZoom();
  $("#modalImg").focus();
}

function toggleProductImageZoom() {
  viewerScale = viewerScale > 1 ? 1 : 2;
  if (viewerScale === 1) {
    viewerOffsetX = 0;
    viewerOffsetY = 0;
  }
  updateProductImageZoom();
}

function productMatches(p, q) {
  if (!q) return true;
  const haystack = [p.id,p.name,p.cat,p.brand,p.desc,p.material,p.color,p.size].join(" ").toLowerCase();
  return haystack.includes(q);
}

function getFilteredProducts() {
  const q = headerSearch.value.trim().toLowerCase();
  const filtered = products.filter(p =>
    (currentCategory === "Semua" || p.cat === currentCategory) &&
    (brandFilter === "all" || p.brand === brandFilter) &&
    p.price >= minPrice && p.price <= maxPrice &&
    productMatches(p, q)
  );

  return filtered.sort((a,b) => {
    if (sortMode === "latest") {
      const aNumber = Number(a.id.match(/\d+$/)?.[0] || 0);
      const bNumber = Number(b.id.match(/\d+$/)?.[0] || 0);
      return bNumber - aNumber || b.id.localeCompare(a.id, "id");
    }
    if (sortMode === "price-low") return a.price - b.price;
    if (sortMode === "price-high") return b.price - a.price;
    if (sortMode === "name") return a.name.localeCompare(b.name, "id");
    return a.name.localeCompare(b.name, "id");
  });
}

function productCard(p) {
  const images = getProductImages(p);
  const image = escapeHtml(images[0] || "");
  const galleryIndicator = images.length > 1
    ? `<span class="product-image-gallery-icon" role="img" aria-label="${images.length} foto produk" title="${images.length} foto produk"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="4" width="12" height="13" rx="2"></rect><rect x="4" y="8" width="12" height="13" rx="2"></rect><path d="m6.5 17 3-3 2 2 1.5-1.5 3 3"></path></svg></span>`
    : "";
  return `<article class="product" tabindex="0" role="button" aria-label="Lihat detail ${escapeHtml(p.name)}" data-id="${escapeHtml(p.id)}">
    <div class="product-image">
      <img src="${image}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" onerror="this.classList.add('img-error')">
      ${galleryIndicator}
      <button class="quick-view" type="button" data-quick-view="${escapeHtml(p.id)}">Detail</button>
    </div>
    <div class="product-info">
      <span class="product-category">${escapeHtml(p.cat)}</span>
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-meta"><span>${escapeHtml(p.material)}</span><span>${escapeHtml(p.color)}</span></div>
      <div class="price">${rupiah(p.price)}</div>
    </div>
  </article>`;
}

function render() {
  const data = getFilteredProducts();
  grid.innerHTML = data.map(productCard).join("");
  empty.hidden = data.length !== 0;
  $$(".product", grid).forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.closest(".quick-view")) return;
      openModal(card.dataset.id);
    });
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.id); }
    });
  });
  $$('[data-quick-view]', grid).forEach(btn => btn.addEventListener("click", e => {
    e.stopPropagation(); openModal(btn.dataset.quickView);
  }));
}

function setFilter(value, shouldScroll=true) {
  currentCategory = value;
  $$(".filter").forEach(b => b.classList.toggle("active", b.dataset.filter === value));
  $$(".category-card").forEach(b => b.classList.toggle("active", b.dataset.filter === value));
  render();
  if (shouldScroll) $("#produk").scrollIntoView({behavior:"smooth", block:"start"});
}

function openModal(id, updateUrl=true) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  modalProductId = p.id;
  modalImages = getProductImages(p);
  $("#modalCategory").textContent = `${p.cat} · ${p.brand}`;
  $("#modalName").textContent = p.name;
  setModalImage(0);
  $("#modalPrice").textContent = rupiah(p.price);
  $("#modalDesc").textContent = p.desc;
  $("#modalSpec").innerHTML = `<div><b>Material</b><span>${escapeHtml(p.material)}</span></div><div><b>Warna</b><span>${escapeHtml(p.color)}</span></div><div><b>Ukuran</b><span>${escapeHtml(p.size)}</span></div>`;
  $("#modalShopee").href = shopeeUrl(p);
  $("#modalContact").href = whatsappUrl(p);
  $("#modalShare").onclick = () => shareProduct(p);
  $("#modal").classList.add("open");
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
  if (updateUrl) history.replaceState(null,"",`${location.pathname}${location.search}#produk-${encodeURIComponent(p.id)}`);
}

function closeModal(updateUrl=true) {
  $("#modal").classList.remove("open");
  document.body.classList.remove("modal-open");
  modalProductId = null;
  modalImages = [];
  modalImageIndex = 0;
  if (updateUrl) history.replaceState(null,"",`${location.pathname}${location.search}`);
}

function shopeeUrl(p) {
  return p.shopee || `https://shopee.co.id/search?keyword=${encodeURIComponent(p.name)}`;
}

function productUrl(p) {
  return `${location.origin}${location.pathname}#produk-${encodeURIComponent(p.id)}`;
}

function whatsappUrl(p) {
  const message = `Halo Geja Furniture,\n\nSaya tertarik dengan produk:\n${p.name}\nKode: ${p.id}\nHarga: ${rupiah(p.price)}\n\nLihat foto dan detail produk:\n${productUrl(p)}\n\nMohon informasi mengenai stok, detail, dan pemesanannya. Terima kasih.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

async function copyProductUrl(url) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      return true;
    }
  } catch (_) {}

  const field = document.createElement("textarea");
  field.value = url;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  let copied = false;
  try { copied = document.execCommand("copy"); } catch (_) {}
  field.remove();
  return copied;
}

async function shareProduct(p) {
  const url = productUrl(p);
  const payload = {title:`${p.name} — Geja Furniture`, text:`${p.name} · ${rupiah(p.price)}`, url};
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  const btn = $("#modalShare");
  if (await copyProductUrl(url)) {
    const oldLabel = btn.getAttribute("aria-label");
    const oldTitle = btn.title;
    btn.setAttribute("aria-label", "Link produk tersalin");
    btn.title = "Link produk tersalin";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.setAttribute("aria-label", oldLabel);
      btn.title = oldTitle;
      btn.classList.remove("copied");
    }, 1800);
    return;
  }

  window.prompt("Salin tautan produk ini:", url);
}

$("#modalClose").addEventListener("click", () => closeModal());
$("#modal").addEventListener("click", e => { if (e.target === $("#modal")) closeModal(); });
$("#modalImagePrev")?.addEventListener("click", () => setModalImage(modalImageIndex - 1));
$("#modalImageNext")?.addEventListener("click", () => setModalImage(modalImageIndex + 1));
$("#modalImg").addEventListener("click", openProductImageViewer);
$("#productImageViewerClose").addEventListener("click", closeProductImageViewer);
$("#productImageViewerReset").addEventListener("click", resetProductImageZoom);
$("#productImageViewer").addEventListener("click", event => {
  if (event.target === $("#productImageViewer")) closeProductImageViewer();
});
const viewerImage = $("#productImageViewerImg");
viewerImage.addEventListener("dblclick", toggleProductImageZoom);
const touchDistance = touches => Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
viewerImage.addEventListener("touchstart", event => {
  if (event.target.closest("button")) return;
  if (event.touches.length === 2) {
    viewerPinchStartDistance = touchDistance(event.touches);
    viewerPinchStartScale = viewerScale;
    viewerTouchStart = null;
  } else if (event.touches.length === 1) {
    viewerTouchStart = {x:event.touches[0].clientX, y:event.touches[0].clientY, offsetX:viewerOffsetX, offsetY:viewerOffsetY};
  }
}, {passive:true});
viewerImage.addEventListener("touchmove", event => {
  if (event.touches.length === 2 && viewerPinchStartDistance) {
    event.preventDefault();
    viewerScale = Math.max(1, Math.min(4, viewerPinchStartScale * touchDistance(event.touches) / viewerPinchStartDistance));
    updateProductImageZoom();
  } else if (event.touches.length === 1 && viewerTouchStart && viewerScale > 1) {
    event.preventDefault();
    viewerOffsetX = viewerTouchStart.offsetX + event.touches[0].clientX - viewerTouchStart.x;
    viewerOffsetY = viewerTouchStart.offsetY + event.touches[0].clientY - viewerTouchStart.y;
    updateProductImageZoom();
  }
}, {passive:false});
viewerImage.addEventListener("touchend", event => {
  if (event.touches.length < 2) viewerPinchStartDistance = 0;
  if (event.touches.length || !viewerTouchStart) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - viewerTouchStart.x;
  const deltaY = touch.clientY - viewerTouchStart.y;
  const moved = Math.hypot(deltaX, deltaY) > 12;
  viewerTouchStart = null;
  if (moved && viewerScale === 1 && Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) && modalImages.length > 1) {
    setModalImage(modalImageIndex + (deltaX < 0 ? 1 : -1));
    return;
  }
  if (moved || viewerScale > 1) return;
  const now = Date.now();
  if (now - viewerLastTap < 320) {
    toggleProductImageZoom();
    viewerLastTap = 0;
  } else {
    viewerLastTap = now;
  }
}, {passive:true});
const modalGallery = $(".modal-gallery");
let galleryTouchStart = null;
modalGallery?.addEventListener("touchstart", event => {
  if (modalImages.length < 2 || event.touches.length !== 1 || event.target.closest("button")) return;
  galleryTouchStart = {x:event.touches[0].clientX, y:event.touches[0].clientY};
}, {passive:true});
modalGallery?.addEventListener("touchend", event => {
  if (!galleryTouchStart) return;
  const deltaX = event.changedTouches[0].clientX - galleryTouchStart.x;
  const deltaY = event.changedTouches[0].clientY - galleryTouchStart.y;
  galleryTouchStart = null;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  setModalImage(modalImageIndex + (deltaX < 0 ? 1 : -1));
}, {passive:true});
modalGallery?.addEventListener("touchcancel", () => { galleryTouchStart = null; }, {passive:true});
document.addEventListener("keydown", e => {
  if ($("#productImageViewer").classList.contains("open")) {
    if (e.key === "Escape") closeProductImageViewer();
    else if (e.key === "ArrowLeft") setModalImage(modalImageIndex - 1);
    else if (e.key === "ArrowRight") setModalImage(modalImageIndex + 1);
  } else if (e.key === "Escape" && $("#modal").classList.contains("open")) {
    closeModal();
  }
});

$$(".filter").forEach(b => b.addEventListener("click", () => setFilter(b.dataset.filter)));
$$(".category-card").forEach(b => b.addEventListener("click", () => setFilter(b.dataset.filter)));
$("#sort").addEventListener("change", e => { sortMode = e.target.value; render(); });
$("#priceRange").addEventListener("change", e => {
  const value = e.target.value;
  if (value === "all") { minPrice = 0; maxPrice = Infinity; }
  else if (value === "under2") { minPrice = 0; maxPrice = 1999999; }
  else if (value === "2to5") { minPrice = 2000000; maxPrice = 4999999; }
  else { minPrice = 5000000; maxPrice = Infinity; }
  render();
});

$("#brandFilter").addEventListener("change", e => {
  brandFilter = e.target.value;
  render();
});

$("#clearFilters").addEventListener("click", () => {
  currentCategory = "Semua"; sortMode = "latest"; brandFilter = "all"; minPrice = 0; maxPrice = Infinity; headerSearch.value = "";
  $("#sort").value = "latest"; $("#priceRange").value = "all"; $("#brandFilter").value = "all"; setFilter("Semua", false);
});

const menuBtn = $("#menuBtn");
const nav = $("#nav");
const navLinks = $$("#nav a");
function setActiveNav(activeLink) {
  navLinks.forEach(link => link.classList.toggle("nav-active", link === activeLink));
}
function syncActiveNav() {
  const currentUrl = new URL(location.href);
  const activeLink = navLinks.find(link => {
    const linkUrl = new URL(link.href, location.href);
    return linkUrl.pathname === currentUrl.pathname && (
      linkUrl.hash === currentUrl.hash ||
      (linkUrl.hash === "" && currentUrl.hash === "") ||
      (linkUrl.hash === "#produk" && currentUrl.hash.startsWith("#produk-"))
    );
  });
  if (activeLink) setActiveNav(activeLink);
}
syncActiveNav();
window.addEventListener("hashchange", syncActiveNav);
menuBtn.addEventListener("click", () => {
  const opened = nav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(opened));
});
navLinks.forEach(a => a.addEventListener("click", () => {
  setActiveNav(a);
  nav.classList.remove("show");
  menuBtn.setAttribute("aria-expanded","false");
}));


// Header search: pencarian dari header membuka halaman katalog dengan kata kunci.
const headerSearch = $("#headerSearch");
const headerSearchForm = $("#headerSearchForm");

function goToCatalog(query) {
  const q = query.trim();
  if (!q) {
    window.location.href = "katalog.html";
    return;
  }
  const params = new URLSearchParams({q});
  window.location.href = `katalog.html?${params.toString()}`;
}

headerSearchForm.addEventListener("submit", e => {
  e.preventDefault();
  goToCatalog(headerSearch.value);
});

// Isi pencarian header dari URL dan tampilkan hasilnya pada halaman aktif.
const urlQuery = new URLSearchParams(location.search).get("q");
if (urlQuery) {
  headerSearch.value = urlQuery;
}

headerSearch.addEventListener("input", () => {
  render();
});

headerSearch.addEventListener("focus", () => {
  if (!location.pathname.endsWith("katalog.html")) {
    $("#produk").scrollIntoView({behavior:"smooth", block:"start"});
  }
});

// Slider kategori horizontal dengan tombol navigasi.
const categoryTrack = $("#categoryTrack");
$("#catPrev").addEventListener("click", () => categoryTrack.scrollBy({left:-320, behavior:"smooth"}));
$("#catNext").addEventListener("click", () => categoryTrack.scrollBy({left:320, behavior:"smooth"}));

// Hero carousel otomatis dengan kontrol manual dan pause saat pengguna berinteraksi.
const heroCarousel = $("#heroCarousel");
if (heroCarousel) {
  const heroSlides = $$(".hero-slide", heroCarousel);
  const heroDots = $$(".hero-dot", heroCarousel);
  const heroCardLabel = $(".hero-card-label", heroCarousel);
  const heroCardTitle = $(".hero-card-title", heroCarousel);
  const heroCardDescription = $(".hero-card-description", heroCarousel);
  let heroIndex = 0;
  let heroTimer;

  function showHeroSlide(index) {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    const activeSlide = heroSlides[heroIndex];
    heroSlides.forEach((slide, i) => slide.classList.toggle("active", i === heroIndex));
    heroCardLabel.textContent = activeSlide.dataset.cardLabel;
    heroCardTitle.textContent = activeSlide.dataset.cardTitle;
    heroCardDescription.textContent = activeSlide.dataset.cardDescription;
    heroDots.forEach((dot, i) => {
      const selected = i === heroIndex;
      dot.classList.toggle("active", selected);
      dot.setAttribute("aria-selected", String(selected));
    });
  }

  function startHeroAutoplay() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 4000);
  }

  heroDots.forEach((dot, i) => dot.addEventListener("click", () => {
    showHeroSlide(i);
    startHeroAutoplay();
  }));
  heroCarousel.addEventListener("mouseenter", () => clearInterval(heroTimer));
  heroCarousel.addEventListener("mouseleave", startHeroAutoplay);
  heroCarousel.addEventListener("focusin", () => clearInterval(heroTimer));
  heroCarousel.addEventListener("focusout", event => {
    if (!heroCarousel.contains(event.relatedTarget)) startHeroAutoplay();
  });
  startHeroAutoplay();
}

window.addEventListener("popstate", () => handleHash());
function handleHash() {
  const match = location.hash.match(/^#produk-(.+)$/);
  if (match) openModal(decodeURIComponent(match[1]), false);
}

// Tahun otomatis agar tidak cepat kedaluwarsa.
$("#year").textContent = new Date().getFullYear();

// Inisialisasi.
render();
handleHash();
