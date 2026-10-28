/* ===========================
   ALZEO.FASHION - Main Script
   =========================== */

const PRODUCTS_KEY = "alzeo_products";
const CART_KEY = "alzeo_cart";
const WISHLIST_KEY = "alzeo_wishlist";
const ORDERS_KEY = "alzeo_orders";

const defaultProducts = [
    {
        id: "ALZ-001",
        name: "Linen Basic Tee",
        category: "Atasan",
        sizes: ["M", "L", "XL"],
        colors: ["Cream", "Sage"],
        price: 59000,
        discountPrice: 49000,
        rating: 4.9,
        badge: "Best Seller",
        description: "Kaos linen dengan potongan loose-fit, adem dan cocok buat daily kuliah.",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=987&auto=format&fit=crop"
    },
    {
        id: "ALZ-002",
        name: "Minimal Overshirt",
        category: "Atasan",
        sizes: ["M", "L", "XL"],
        colors: ["Beige", "Cokelat"],
        price: 89000,
        discountPrice: 79000,
        rating: 4.8,
        badge: "Baru",
        description: "Overshirt minimalis, bisa dipakai terpisah atau layer buat kesan effortless.",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop"
    },
    {
        id: "ALZ-003",
        name: "Wide Leg Pants",
        category: "Bawahan",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Hitam", "Beige"],
        price: 99000,
        discountPrice: 89000,
        rating: 4.9,
        badge: "Best Seller",
        description: "Celana wide leg dengan fall yang rapi, bikin siluet lebih tinggi dan clean.",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1170&auto=format&fit=crop"
    },
    {
        id: "ALZ-004",
        name: "Straight Cargo Pants",
        category: "Bawahan",
        sizes: ["M", "L", "XL"],
        colors: ["Cokelat", "Hitam"],
        price: 109000,
        discountPrice: null,
        rating: 4.7,
        badge: "",
        description: "Cargo straight dengan detail minimal, tetap kekinian tanpa kesan berlebihan.",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop"
    },
    {
        id: "ALZ-005",
        name: "Soft Pashmina",
        category: "Kerudung",
        sizes: ["All Size"],
        colors: ["Cream", "Sage"],
        price: 49000,
        discountPrice: 39000,
        rating: 5.0,
        badge: "Best Seller",
        description: "Pashmina super soft, ringan, nggak gerah, gampang dibentuk buat daily.",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=987&auto=format&fit=crop"
    },
    {
        id: "ALZ-006",
        name: "Square Voile Hijab",
        category: "Kerudung",
        sizes: ["All Size"],
        colors: ["Beige", "Hitam"],
        price: 45000,
        discountPrice: 35000,
        rating: 4.9,
        badge: "Baru",
        description: "Segi empat voile dengan tekstur halus, adem dan jatuh natural.",
        image: "https://images.unsplash.com/photo-1583391733981-8b530a75c5f0?q=80&w=987&auto=format&fit=crop"
    },
    {
        id: "ALZ-007",
        name: "Co-ord Set Basic",
        category: "Set Outfit",
        sizes: ["S", "M", "L"],
        colors: ["Cream"],
        price: 139000,
        discountPrice: 119000,
        rating: 4.9,
        badge: "Best Seller",
        description: "Set atasan + bawahan dengan nuansa clean, langsung siap pakai anti ribet.",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop"
    },
    {
        id: "ALZ-008",
        name: "Minimal Co-ord Earth",
        category: "Set Outfit",
        sizes: ["M", "L", "XL"],
        colors: ["Terracotta", "Cokelat"],
        price: 149000,
        discountPrice: 129000,
        rating: 4.8,
        badge: "Baru",
        description: "Set dengan warna earthy kekinian, cocok buat look hangout maupun kuliah.",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=988&auto=format&fit=crop"
    },
    {
        id: "ALZ-009",
        name: "Ribbed Crop Tee",
        category: "Atasan",
        sizes: ["S", "M", "L"],
        colors: ["Hitam", "Cream"],
        price: 55000,
        discountPrice: 49000,
        rating: 4.7,
        badge: "",
        description: "Ribbed crop tee dengan bahan stretch nyaman, cocok dipadupin dengan wide leg pants.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1170&auto=format&fit=crop"
    },
    {
        id: "ALZ-010",
        name: "Pleated Mini Skirt",
        category: "Bawahan",
        sizes: ["S", "M", "L"],
        colors: ["Beige", "Hitam"],
        price: 79000,
        discountPrice: 69000,
        rating: 4.8,
        badge: "Baru",
        description: "Pleated mini skirt dengan panjang pas, kesan girly-clean buat daily look.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop"
    },
    {
        id: "ALZ-011",
        name: "Button Down Shirt",
        category: "Atasan",
        sizes: ["M", "L", "XL"],
        colors: ["Cream", "Beige"],
        price: 89000,
        discountPrice: null,
        rating: 4.8,
        badge: "",
        description: "Kemeja button down dengan potongan relaxed, bisa dipakai loose atau disampir.",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop"
    },
    {
        id: "ALZ-012",
        name: "Instant Shawl",
        category: "Kerudung",
        sizes: ["All Size"],
        colors: ["Sage", "Terracotta"],
        price: 59000,
        discountPrice: 49000,
        rating: 4.9,
        badge: "Best Seller",
        description: "Instant shawl praktis, langsung pakai, hasil rapi tanpa ribet dililit.",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=987&auto=format&fit=crop"
    }
];

function getProducts() {
    const data = localStorage.getItem(PRODUCTS_KEY);
    if (!data) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
        return [...defaultProducts];
    }
    try {
        return JSON.parse(data);
    } catch {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
        return [...defaultProducts];
    }
}

function getCart() {
    const data = localStorage.getItem(CART_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getWishlist() {
    const data = localStorage.getItem(WISHLIST_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function saveWishlist(list) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

function getOrders() {
    const data = localStorage.getItem(ORDERS_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function formatRupiah(num) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num || 0);
}

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const filterSize = document.getElementById("filterSize");
const filterColor = document.getElementById("filterColor");
const sortBy = document.getElementById("sortBy");
const priceRange = document.getElementById("priceRange");
const priceRangeValue = document.getElementById("priceRangeValue");
const resetFilters = document.getElementById("resetFilters");
const emptyReset = document.getElementById("emptyReset");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const cartBadgeTop = document.getElementById("cartBadgeTop");
const wishlistBadgeTop = document.getElementById("wishlistBadgeTop");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartSummaryEl = document.getElementById("cartSummary");
const cartCountText = document.getElementById("cartCountText");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const checkoutWaBtn = document.getElementById("checkoutWa");

const quickViewModal = new bootstrap.Modal(document.getElementById("quickViewModal"));
const qvImage = document.getElementById("qvImage");
const qvBadge = document.getElementById("qvBadge");
const qvTitle = document.getElementById("qvTitle");
const qvCategory = document.getElementById("qvCategory");
const qvRating = document.getElementById("qvRating");
const qvPrice = document.getElementById("qvPrice");
const qvPriceOld = document.getElementById("qvPriceOld");
const qvDesc = document.getElementById("qvDesc");
const qvSize = document.getElementById("qvSize");
const qvColor = document.getElementById("qvColor");
const qvAddCart = document.getElementById("qvAddCart");
const qvWishlist = document.getElementById("qvWishlist");

const toastEl = document.getElementById("alzeoToast");
const toastBody = document.getElementById("toastBody");
const toast = new bootstrap.Toast(toastEl);

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMinutes = document.getElementById("cdMinutes");
const cdSeconds = document.getElementById("cdSeconds");

function startCountdown() {
    if (!cdDays) return;
    const target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(23, 59, 59, 0);
    setInterval(() => {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
            cdDays.textContent = "00";
            cdHours.textContent = "00";
            cdMinutes.textContent = "00";
            cdSeconds.textContent = "00";
            return;
        }
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        cdDays.textContent = String(d).padStart(2, "0");
        cdHours.textContent = String(h).padStart(2, "0");
        cdMinutes.textContent = String(m).padStart(2, "0");
        cdSeconds.textContent = String(s).padStart(2, "0");
    }, 1000);
}

startCountdown();

let currentProducts = getProducts();
let cart = getCart();
let wishlist = getWishlist();
let activeQuickView = null;

function updateBadges() {
    const cartQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartBadgeTop) {
        if (cartQty > 0) {
            cartBadgeTop.textContent = cartQty;
            cartBadgeTop.classList.remove("d-none");
        } else {
            cartBadgeTop.classList.add("d-none");
        }
    }
    if (wishlistBadgeTop) {
        if (wishlist.length > 0) {
            wishlistBadgeTop.classList.remove("d-none");
        } else {
            wishlistBadgeTop.classList.add("d-none");
        }
    }
}

function showToast(message) {
    if (!toastBody) return;
    toastBody.textContent = message;
    toast.show();
}

function renderProducts() {
    if (!productGrid) return;
    const search = searchInput?.value.toLowerCase() || "";
    const cat = filterCategory?.value || "all";
    const size = filterSize?.value || "all";
    const color = filterColor?.value || "all";
    const sort = sortBy?.value || "default";
    const maxPrice = Number(priceRange?.value || 150000);

    let list = [...currentProducts];

    list = list.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search);
        const matchesCat = cat === "all" || item.category === cat;
        const matchesSize = size === "all" || (item.sizes || []).includes(size);
        const matchesColor = color === "all" || (item.colors || []).includes(color);
        const price = item.discountPrice || item.price;
        const matchesPrice = price <= maxPrice;
        return matchesSearch && matchesCat && matchesSize && matchesColor && matchesPrice;
    });

    if (sort === "price-asc") {
        list.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (sort === "price-desc") {
        list.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    } else {
        list.sort((a, b) => a.id.localeCompare(b.id));
    }

    productGrid.innerHTML = "";
    if (resultCount) resultCount.textContent = list.length;

    if (list.length === 0) {
        emptyState?.classList.remove("d-none");
        return;
    }
    emptyState?.classList.add("d-none");

    list.forEach((product) => {
        const price = product.discountPrice || product.price;
        const oldPrice = product.discountPrice ? product.price : null;
        const inWishlist = wishlist.includes(product.id);
        const col = document.createElement("div");
        col.className = "col reveal";
        col.innerHTML = `
            <article class="product-card">
                <div class="product-media">
                    <img src="${product.image}" alt="${product.name} - Alzeo.Fashion" loading="lazy">
                    <div class="product-badges">
                        ${product.badge ? `<span class="badge-pill ${product.badge === 'Best Seller' ? 'badge-sage' : ''}">${product.badge}</span>` : ""}
                        ${product.discountPrice ? `<span class="badge-pill">Diskon</span>` : ""}
                    </div>
                    <div class="product-actions">
                        <button class="action-btn ${inWishlist ? 'active' : ''}" data-action="wishlist" data-id="${product.id}" aria-label="Tambah ke wishlist">
                            <i class="bi ${inWishlist ? 'bi-heart-fill' : 'bi-heart'}"></i>
                        </button>
                        <button class="action-btn" data-action="quickview" data-id="${product.id}" aria-label="Quick view">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-content">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price-row">
                        <span class="product-price">${formatRupiah(price)}</span>
                        ${oldPrice ? `<span class="product-price-old">${formatRupiah(oldPrice)}</span>` : ""}
                    </div>
                    <div class="product-rating">
                        <i class="bi bi-star-fill"></i>
                        <span>${product.rating.toFixed(1)}</span>
                        <span class="product-rating-text">• ${product.sizes.join(", ")}</span>
                    </div>
                    <button class="product-add" data-action="addcart" data-id="${product.id}">
                        <i class="bi bi-bag-plus"></i>
                        Tambah ke Keranjang
                    </button>
                </div>
            </article>
        `;
        productGrid.appendChild(col);
    });

    revealOnScroll();
}

if (priceRange && priceRangeValue) {
    priceRange.addEventListener("input", () => {
        priceRangeValue.textContent = `Maks: ${formatRupiah(Number(priceRange.value))}`;
        renderProducts();
    });
}

[searchInput, filterCategory, filterSize, filterColor, sortBy].forEach((el) => {
    if (el) el.addEventListener("input", renderProducts);
    if (el && el.tagName === "SELECT") el.addEventListener("change", renderProducts);
});

if (resetFilters) {
    resetFilters.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (filterCategory) filterCategory.value = "all";
        if (filterSize) filterSize.value = "all";
        if (filterColor) filterColor.value = "all";
        if (sortBy) sortBy.value = "default";
        if (priceRange) {
            priceRange.value = 150000;
            if (priceRangeValue) priceRangeValue.textContent = "Maks: Rp150.000";
        }
        renderProducts();
    });
}

if (emptyReset) {
    emptyReset.addEventListener("click", () => {
        if (resetFilters) resetFilters.click();
        document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
    });
}

document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
        const cat = card.dataset.filterCategory;
        if (filterCategory && cat) {
            filterCategory.value = cat;
            renderProducts();
            document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
        }
    });
});

if (productGrid) {
    productGrid.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const id = btn.dataset.id;
        const product = currentProducts.find((p) => p.id === id);
        if (!product) return;

        if (btn.dataset.action === "wishlist") {
            const idx = wishlist.indexOf(id);
            if (idx >= 0) {
                wishlist.splice(idx, 1);
                showToast("Dihapus dari wishlist");
            } else {
                wishlist.push(id);
                showToast("Ditambahkan ke wishlist");
            }
            saveWishlist(wishlist);
            updateBadges();
            renderProducts();
        }

        if (btn.dataset.action === "quickview") {
            openQuickView(product);
        }

        if (btn.dataset.action === "addcart") {
            addToCart(product, 1);
        }
    });
}

function openQuickView(product) {
    activeQuickView = product;
    if (qvImage) {
        qvImage.src = product.image;
        qvImage.alt = product.name;
    }
    if (qvBadge) {
        qvBadge.textContent = product.badge || "Koleksi Alzeo.Fashion";
        qvBadge.classList.toggle("d-none", !product.badge && true);
    }
    if (qvTitle) qvTitle.textContent = product.name;
    if (qvCategory) qvCategory.textContent = product.category;
    if (qvRating) {
        qvRating.innerHTML = `<i class="bi bi-star-fill"></i> <span>${product.rating.toFixed(1)} / 5</span>`;
    }
    const price = product.discountPrice || product.price;
    const oldPrice = product.discountPrice ? product.price : null;
    if (qvPrice) qvPrice.textContent = formatRupiah(price);
    if (qvPriceOld) {
        if (oldPrice) {
            qvPriceOld.textContent = formatRupiah(oldPrice);
            qvPriceOld.classList.remove("d-none");
        } else {
            qvPriceOld.classList.add("d-none");
        }
    }
    if (qvDesc) qvDesc.textContent = product.description;
    if (qvSize) qvSize.textContent = (product.sizes || []).join(", ");
    if (qvColor) qvColor.textContent = (product.colors || []).join(", ");
    if (qvWishlist) {
        const inWishlist = wishlist.includes(product.id);
        qvWishlist.innerHTML = `<i class="bi ${inWishlist ? 'bi-heart-fill' : 'bi-heart'}"></i>`;
        qvWishlist.classList.toggle("active", inWishlist);
    }
    quickViewModal.show();
}

if (qvAddCart) {
    qvAddCart.addEventListener("click", () => {
        if (activeQuickView) {
            addToCart(activeQuickView, 1);
            quickViewModal.hide();
        }
    });
}

if (qvWishlist) {
    qvWishlist.addEventListener("click", () => {
        if (!activeQuickView) return;
        const id = activeQuickView.id;
        const idx = wishlist.indexOf(id);
        if (idx >= 0) {
            wishlist.splice(idx, 1);
            showToast("Dihapus dari wishlist");
        } else {
            wishlist.push(id);
            showToast("Ditambahkan ke wishlist");
        }
        saveWishlist(wishlist);
        updateBadges();
        renderProducts();
        const inWishlist = wishlist.includes(id);
        qvWishlist.innerHTML = `<i class="bi ${inWishlist ? 'bi-heart-fill' : 'bi-heart'}"></i>`;
        qvWishlist.classList.toggle("active", inWishlist);
    });
}

function addToCart(product, qty = 1) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: product.id, qty });
    }
    saveCart(cart);
    updateBadges();
    renderCart();
    showToast("Berhasil ditambahkan ke keranjang");
}

function renderCart() {
    if (!cartItemsEl) return;
    cartItemsEl.innerHTML = "";
    const products = getProducts();
    if (cart.length === 0) {
        cartEmptyEl?.classList.remove("d-none");
        cartSummaryEl?.classList.add("d-none");
        if (cartCountText) cartCountText.textContent = "0";
        if (cartSubtotal) cartSubtotal.textContent = formatRupiah(0);
        if (cartTotal) cartTotal.textContent = formatRupiah(0);
        updateBadges();
        return;
    }
    cartEmptyEl?.classList.add("d-none");
    cartSummaryEl?.classList.remove("d-none");

    let subtotal = 0;
    let count = 0;

    cart.forEach((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return;
        const price = product.discountPrice || product.price;
        subtotal += price * item.qty;
        count += item.qty;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <p class="cart-item-title mb-1">${product.name}</p>
                <p class="cart-item-meta mb-1">${product.category} • ${product.sizes.slice(0, 2).join("/")}</p>
                <p class="cart-item-price mb-0">${formatRupiah(price)}</p>
                <div class="cart-qty">
                    <button class="qty-btn" data-action="dec" data-id="${product.id}"><i class="bi bi-dash"></i></button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" data-action="inc" data-id="${product.id}"><i class="bi bi-plus"></i></button>
                </div>
            </div>
            <button class="cart-remove" data-action="remove" data-id="${product.id}"><i class="bi bi-x-lg"></i></button>
        `;
        cartItemsEl.appendChild(div);
    });

    if (cartCountText) cartCountText.textContent = count;
    if (cartSubtotal) cartSubtotal.textContent = formatRupiah(subtotal);
    const total = subtotal >= 150000 ? subtotal : subtotal; // ongkir logic info only
    if (cartTotal) cartTotal.textContent = formatRupiah(total);
    updateBadges();
}

if (cartItemsEl) {
    cartItemsEl.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const id = btn.dataset.id;
        const item = cart.find((c) => c.id === id);
        if (!item) return;
        if (btn.dataset.action === "inc") {
            item.qty += 1;
        }
        if (btn.dataset.action === "dec") {
            item.qty -= 1;
            if (item.qty <= 0) {
                cart = cart.filter((c) => c.id !== id);
            }
        }
        if (btn.dataset.action === "remove") {
            cart = cart.filter((c) => c.id !== id);
        }
        saveCart(cart);
        renderCart();
    });
}

if (checkoutWaBtn) {
    checkoutWaBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Keranjang kamu masih kosong");
            return;
        }
        const products = getProducts();
        let itemsText = "";
        let subtotal = 0;
        cart.forEach((item, idx) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return;
            const price = product.discountPrice || product.price;
            subtotal += price * item.qty;
            itemsText += `${idx + 1}. ${product.name} x${item.qty} - ${formatRupiah(price * item.qty)}%0A`;
        });
        const order = {
            id: `AZ-${Date.now().toString().slice(-6)}`,
            date: new Date().toISOString(),
            name: "Customer Alzeo.Fashion",
            phone: "-",
            address: "- (Diisi saat konfirmasi WA)",
            items: cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return {
                    id: item.id,
                    name: product?.name,
                    qty: item.qty,
                    price: product?.discountPrice || product?.price
                };
            }),
            subtotal,
            total: subtotal
        };
        const orders = getOrders();
        orders.unshift(order);
        saveOrders(orders);

        const message = `Halo Alzeo.Fashion, aku mau checkout ya:%0A%0A${itemsText}%0ATotal: ${formatRupiah(subtotal)}%0A%0ANama: [Isi nama]%0ANo. WA: [Isi no WA]%0AAlamat: [Isi alamat lengkap]%0A%0AMohon info ketersediaan & ongkir ya. Terima kasih!`;
        window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
        showToast("Pesanan disimpan, mengarahkan ke WhatsApp...");
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!newsletterForm.checkValidity()) {
            e.stopPropagation();
            newsletterForm.classList.add("was-validated");
            return;
        }
        newsletterForm.classList.remove("was-validated");
        newsletterForm.reset();
        showToast("Terima kasih! Kamu terdaftar untuk update promo Alzeo.Fashion");
    });
}

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach((el) => observer.observe(el));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const openSearchTop = document.getElementById("openSearchTop");
const openSearchMobile = document.getElementById("openSearchMobile");
const openWishlistTop = document.getElementById("openWishlistTop");

if (openSearchTop) {
    openSearchTop.addEventListener("click", () => {
        document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => searchInput?.focus(), 400);
    });
}
if (openSearchMobile) {
    openSearchMobile.addEventListener("click", () => {
        document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => searchInput?.focus(), 400);
    });
}
if (openWishlistTop) {
    openWishlistTop.addEventListener("click", () => {
        showToast("Wishlist tersimpan di perangkat ini. Lihat produk favorit kamu di katalog!");
        document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
    });
}

renderProducts();
renderCart();
updateBadges();
revealOnScroll();
