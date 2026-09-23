/* Geja Furniture — katalog statis
   Ganti nomor WhatsApp, alamat, email, dan data produk pada bagian CONFIG/DATA.
*/
const CONFIG = {
  whatsapp: "6281234567890",
  email: "hello@gejafurniture.id",
  currency: "IDR"
};

const products = [
 {id:"GEJA-SOF-001",name:"Sofa Aruna 3 Seater",cat:"Sofa",price:7250000,material:"Fabric + kayu",color:"Beige",size:"210 × 85 × 80 cm",img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",desc:"Sofa 3 seater dengan desain minimalis dan bantalan nyaman untuk ruang keluarga."},
 {id:"GEJA-SOF-002",name:"Sofa Luma 2 Seater",cat:"Sofa",price:5490000,material:"Fabric",color:"Cream",size:"170 × 82 × 78 cm",img:"https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85",desc:"Sofa compact untuk apartemen, ruang tamu, atau sudut santai."},
 {id:"GEJA-KUR-001",name:"Kursi Makan Sora",cat:"Kursi",price:895000,material:"Kayu + fabric",color:"Natural",size:"52 × 55 × 78 cm",img:"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=85",desc:"Kursi makan dengan siluet sederhana yang mudah dipadukan."},
 {id:"GEJA-KUR-002",name:"Lounge Chair Nami",cat:"Kursi",price:1650000,material:"Fabric + kayu",color:"Sand",size:"72 × 78 × 82 cm",img:"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85",desc:"Kursi lounge untuk membaca dan menikmati waktu santai."},
 {id:"GEJA-MEI-001",name:"Coffee Table Yui",cat:"Meja",price:1275000,material:"Kayu olahan",color:"Oak",size:"Ø 80 × 40 cm",img:"https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1000&q=85",desc:"Coffee table minimalis dengan bentuk lembut untuk ruang tamu."},
 {id:"GEJA-MEI-002",name:"Meja Makan Tami",cat:"Meja",price:2890000,material:"Kayu solid",color:"Natural",size:"160 × 90 × 75 cm",img:"https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85",desc:"Meja makan untuk keluarga dengan tampilan hangat dan natural."},
 {id:"GEJA-MEI-003",name:"Work Desk Kumi",cat:"Meja",price:2350000,material:"Wood veneer",color:"Walnut",size:"120 × 60 × 75 cm",img:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",desc:"Meja kerja minimalis dengan area kerja yang lapang."},
 {id:"GEJA-STO-001",name:"Cabinet Raka",cat:"Storage",price:3190000,material:"Wood",color:"Walnut",size:"100 × 45 × 120 cm",img:"https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=85",desc:"Storage tertutup untuk menjaga ruang tetap rapi."},
 {id:"GEJA-STO-002",name:"Rak Buku Nara",cat:"Storage",price:1890000,material:"Kayu",color:"Natural",size:"80 × 35 × 180 cm",img:"https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=85",desc:"Rak terbuka untuk buku, dekorasi, dan koleksi favorit."},
 {id:"GEJA-KAM-001",name:"Bed Frame Rumi",cat:"Kamar Tidur",price:4350000,material:"Kayu",color:"Oak",size:"160 × 200 cm",img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",desc:"Rangka tempat tidur dengan karakter minimalis dan hangat."},
 {id:"GEJA-KAM-002",name:"Bedside Table Kira",cat:"Kamar Tidur",price:925000,material:"Kayu",color:"Natural",size:"45 × 40 × 50 cm",img:"https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1000&q=85",desc:"Nakas ringkas untuk kebutuhan di samping tempat tidur."},
 {id:"GEJA-SOF-003",name:"Sofa Bed Hana",cat:"Sofa",price:4650000,material:"Fabric",color:"Grey",size:"200 × 90 × 85 cm",img:"https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85",desc:"Sofa yang dapat diubah menjadi tempat beristirahat."},
 {id:"GEJA-AKS-001",name:"Floor Lamp Lio",cat:"Aksesoris",price:895000,material:"Metal + fabric",color:"White",size:"45 × 45 × 150 cm",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",desc:"Lampu lantai dengan karakter ringan untuk sudut baca dan ruang santai."},
 {id:"GEJA-AKS-002",name:"Cushion Arlo",cat:"Aksesoris",price:325000,material:"Cotton",color:"Blue Sand",size:"45 × 45 cm",img:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85",desc:"Bantal dekoratif untuk menambah aksen warna yang lembut pada ruang."}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const rupiah = n => new Intl.NumberFormat("id-ID", {style:"currency", currency:CONFIG.currency, maximumFractionDigits:0}).format(n);
let currentCategory = "Semua";
let sortMode = "default";
let minPrice = 0;
let maxPrice = Infinity;
let modalProductId = null;

const grid = $("#productGrid");
const search = $("#search");
const count = $("#resultCount");
const empty = $("#emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));
}

function productMatches(p, q) {
  if (!q) return true;
  const haystack = [p.id,p.name,p.cat,p.desc,p.material,p.color,p.size].join(" ").toLowerCase();
  return haystack.includes(q);
}

function getFilteredProducts() {
  const q = search.value.trim().toLowerCase();
  const filtered = products.filter(p =>
    (currentCategory === "Semua" || p.cat === currentCategory) &&
    p.price >= minPrice && p.price <= maxPrice &&
    productMatches(p, q)
  );

  return filtered.sort((a,b) => {
    if (sortMode === "price-low") return a.price - b.price;
    if (sortMode === "price-high") return b.price - a.price;
    if (sortMode === "name") return a.name.localeCompare(b.name, "id");
    return a.name.localeCompare(b.name, "id");
  });
}

function productCard(p) {
  return `<article class="product" tabindex="0" role="button" aria-label="Lihat detail ${escapeHtml(p.name)}" data-id="${escapeHtml(p.id)}">
    <div class="product-image">
      <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" onerror="this.classList.add('img-error')">
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
  count.textContent = `${data.length} dari ${products.length} produk`;
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
  $("#modalImg").src = p.img;
  $("#modalImg").alt = p.name;
  $("#modalCategory").textContent = `${p.cat} · ${p.id}`;
  $("#modalName").textContent = p.name;
  $("#modalPrice").textContent = rupiah(p.price);
  $("#modalDesc").textContent = p.desc;
  $("#modalSpec").innerHTML = `<div><b>Material</b><span>${escapeHtml(p.material)}</span></div><div><b>Warna</b><span>${escapeHtml(p.color)}</span></div><div><b>Ukuran</b><span>${escapeHtml(p.size)}</span></div>`;
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
  if (updateUrl) history.replaceState(null,"",`${location.pathname}${location.search}`);
}

function whatsappUrl(p) {
  const message = `Halo Geja Furniture,\n\nSaya tertarik dengan produk:\n${p.name}\nKode: ${p.id}\nHarga: ${rupiah(p.price)}\n\nMohon informasi mengenai stok, detail, dan pemesanannya. Terima kasih.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

async function shareProduct(p) {
  const url = `${location.origin}${location.pathname}#produk-${encodeURIComponent(p.id)}`;
  if (navigator.share) {
    try { await navigator.share({title:`${p.name} — Geja Furniture`, text:`${p.name} · ${rupiah(p.price)}`, url}); } catch (_) {}
  } else if (navigator.clipboard) {
    await navigator.clipboard.writeText(url);
    const btn = $("#modalShare");
    const old = btn.textContent; btn.textContent = "Link tersalin";
    setTimeout(() => btn.textContent = old, 1600);
  }
}

$("#modalClose").addEventListener("click", () => closeModal());
$("#modal").addEventListener("click", e => { if (e.target === $("#modal")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && $("#modal").classList.contains("open")) closeModal(); });

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

$("#clearFilters").addEventListener("click", () => {
  currentCategory = "Semua"; sortMode = "default"; minPrice = 0; maxPrice = Infinity; search.value = ""; headerSearch.value = "";
  $("#sort").value = "default"; $("#priceRange").value = "all"; setFilter("Semua", false);
});

const menuBtn = $("#menuBtn");
const nav = $("#nav");
menuBtn.addEventListener("click", () => {
  const opened = nav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(opened));
});
$$('nav a').forEach(a => a.addEventListener("click", () => { nav.classList.remove("show"); menuBtn.setAttribute("aria-expanded","false"); }));


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

// Jika sedang berada di halaman katalog, isi pencarian dari URL dan tampilkan hasilnya.
const urlQuery = new URLSearchParams(location.search).get("q");
if (urlQuery) {
  search.value = urlQuery;
  headerSearch.value = urlQuery;
}

headerSearch.addEventListener("input", () => {
  // Di halaman katalog, preview hasil tetap diperbarui tanpa berpindah halaman.
  if (location.pathname.endsWith("katalog.html")) {
    search.value = headerSearch.value;
    render();
  }
});
search.addEventListener("input", () => { headerSearch.value = search.value; render(); });

// Slider kategori horizontal dengan tombol navigasi.
const categoryTrack = $("#categoryTrack");
$("#catPrev").addEventListener("click", () => categoryTrack.scrollBy({left:-320, behavior:"smooth"}));
$("#catNext").addEventListener("click", () => categoryTrack.scrollBy({left:320, behavior:"smooth"}));

// Hero carousel otomatis dengan kontrol manual dan pause saat pengguna berinteraksi.
const heroCarousel = $("#heroCarousel");
if (heroCarousel) {
  const heroSlides = $$(".hero-slide", heroCarousel);
  const heroDots = $$(".hero-dot", heroCarousel);
  let heroIndex = 0;
  let heroTimer;

  function showHeroSlide(index) {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => slide.classList.toggle("active", i === heroIndex));
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
