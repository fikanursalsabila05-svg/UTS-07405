/* ===========================
   ALZEO.FASHION - Admin Panel JS
   =========================== */

const PRODUCTS_KEY = "alzeo_products";
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

function saveProducts(list) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
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

function saveOrders(list) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(list));
}

function formatRupiah(num) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num || 0);
}

const navBtns = document.querySelectorAll(".nav-btn[data-target]");
const sections = document.querySelectorAll(".admin-section");
const adminYear = document.getElementById("adminYear");
if (adminYear) adminYear.textContent = new Date().getFullYear();

navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        navBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        sections.forEach((sec) => {
            if (sec.id === `section-${target}`) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });
    });
});

const goOrders = document.getElementById("goOrders");
if (goOrders) {
    goOrders.addEventListener("click", () => {
        document.querySelector('.nav-btn[data-target="orders"]')?.click();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const statProducts = document.getElementById("statProducts");
const statOrders = document.getElementById("statOrders");
const statRevenue = document.getElementById("statRevenue");
const orderBadge = document.getElementById("orderBadge");
const dashboardOrders = document.getElementById("dashboardOrders");
const dashboardEmpty = document.getElementById("dashboardEmpty");

function renderDashboard() {
    const products = getProducts();
    const orders = getOrders();
    if (statProducts) statProducts.textContent = products.length;
    if (statOrders) statOrders.textContent = orders.length;
    if (orderBadge) {
        if (orders.length > 0) {
            orderBadge.textContent = orders.length;
            orderBadge.classList.remove("d-none");
        } else {
            orderBadge.classList.add("d-none");
        }
    }
    let revenue = 0;
    orders.forEach((o) => {
        revenue += Number(o.total || o.subtotal || 0);
    });
    if (statRevenue) statRevenue.textContent = formatRupiah(revenue);

    if (dashboardOrders) {
        dashboardOrders.innerHTML = "";
        const recent = orders.slice(0, 5);
        if (recent.length === 0) {
            dashboardEmpty?.classList.remove("d-none");
        } else {
            dashboardEmpty?.classList.add("d-none");
            recent.forEach((order, idx) => {
                const tr = document.createElement("tr");
                const itemsCount = order.items?.reduce((sum, item) => sum + Number(item.qty || 0), 0) || 0;
                tr.innerHTML = `
                    <td>AZ-${(order.id || "").toString().slice(-6)}</td>
                    <td>${order.name || "-"}</td>
                    <td>${order.phone || "-"}</td>
                    <td>${itemsCount} item</td>
                    <td>${formatRupiah(order.total || order.subtotal || 0)}</td>
                    <td>${order.date ? new Date(order.date).toLocaleString("id-ID") : "-"}</td>
                `;
                dashboardOrders.appendChild(tr);
            });
        }
    }
}

const productTable = document.getElementById("productTable");
const productEmpty = document.getElementById("productEmpty");
const addProductBtn = document.getElementById("addProductBtn");
const productModal = new bootstrap.Modal(document.getElementById("productModal"));
const productModalLabel = document.getElementById("productModalLabel");
const productForm = document.getElementById("productForm");
const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const productCategory = document.getElementById("productCategory");
const productSizes = document.getElementById("productSizes");
const productColors = document.getElementById("productColors");
const productPrice = document.getElementById("productPrice");
const productDiscount = document.getElementById("productDiscount");
const productRating = document.getElementById("productRating");
const productBadge = document.getElementById("productBadge");
const productImage = document.getElementById("productImage");
const productDesc = document.getElementById("productDesc");
const saveProduct = document.getElementById("saveProduct");

let editingId = null;

function renderProducts() {
    const products = getProducts();
    if (!productTable) return;
    productTable.innerHTML = "";
    if (products.length === 0) {
        productEmpty?.classList.remove("d-none");
    } else {
        productEmpty?.classList.add("d-none");
        products.forEach((product) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" class="table-img"></td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${(product.sizes || []).join(", ")}</td>
                <td>${(product.colors || []).join(", ")}</td>
                <td>${formatRupiah(product.price)}</td>
                <td>${product.discountPrice ? formatRupiah(product.discountPrice) : "-"}</td>
                <td>${product.badge || "-"}</td>
                <td>
                    <div class="table-actions">
                        <button class="table-btn" data-action="edit" data-id="${product.id}"><i class="bi bi-pencil"></i></button>
                        <button class="table-btn" data-action="delete" data-id="${product.id}"><i class="bi bi-trash"></i></button>
                    </div>
                </td>
            `;
            productTable.appendChild(tr);
        });
    }
    renderDashboard();
}

if (addProductBtn) {
    addProductBtn.addEventListener("click", () => {
        editingId = null;
        if (productModalLabel) productModalLabel.textContent = "Tambah Produk";
        if (productForm) productForm.reset();
        if (productId) productId.value = "";
        if (productRating) productRating.value = "4.8";
    });
}

if (productTable) {
    productTable.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const id = btn.dataset.id;
        const products = getProducts();
        if (btn.dataset.action === "edit") {
            const product = products.find((p) => p.id === id);
            if (!product) return;
            editingId = product.id;
            if (productModalLabel) productModalLabel.textContent = "Edit Produk";
            if (productId) productId.value = product.id;
            if (productName) productName.value = product.name;
            if (productCategory) productCategory.value = product.category;
            if (productSizes) productSizes.value = (product.sizes || []).join(", ");
            if (productColors) productColors.value = (product.colors || []).join(", ");
            if (productPrice) productPrice.value = product.price;
            if (productDiscount) productDiscount.value = product.discountPrice || "";
            if (productRating) productRating.value = product.rating;
            if (productBadge) productBadge.value = product.badge || "";
            if (productImage) productImage.value = product.image;
            if (productDesc) productDesc.value = product.description;
            productModal.show();
        }
        if (btn.dataset.action === "delete") {
            if (confirm("Yakin mau hapus produk ini? Produk akan hilang dari landing page.")) {
                const filtered = products.filter((p) => p.id !== id);
                saveProducts(filtered);
                renderProducts();
            }
        }
    });
}

if (saveProduct) {
    saveProduct.addEventListener("click", () => {
        if (!productForm.checkValidity()) {
            productForm.classList.add("was-validated");
            return;
        }
        const products = getProducts();
        const data = {
            id: editingId || `ALZ-${Date.now().toString().slice(-6)}`,
            name: productName.value.trim(),
            category: productCategory.value,
            sizes: productSizes.value.split(",").map((s) => s.trim()).filter(Boolean),
            colors: productColors.value.split(",").map((c) => c.trim()).filter(Boolean),
            price: Number(productPrice.value),
            discountPrice: productDiscount.value ? Number(productDiscount.value) : null,
            rating: Number(productRating.value),
            badge: productBadge.value,
            image: productImage.value.trim(),
            description: productDesc.value.trim()
        };
        if (editingId) {
            const idx = products.findIndex((p) => p.id === editingId);
            if (idx >= 0) products[idx] = data;
        } else {
            products.unshift(data);
        }
        saveProducts(products);
        productForm.classList.remove("was-validated");
        productModal.hide();
        renderProducts();
    });
}

const ordersTable = document.getElementById("ordersTable");
const ordersEmpty = document.getElementById("ordersEmpty");
const orderDetailModal = new bootstrap.Modal(document.getElementById("orderDetailModal"));
const odId = document.getElementById("odId");
const odDate = document.getElementById("odDate");
const odName = document.getElementById("odName");
const odPhone = document.getElementById("odPhone");
const odAddress = document.getElementById("odAddress");
const odItems = document.getElementById("odItems");
const odTotal = document.getElementById("odTotal");
const clearOrders = document.getElementById("clearOrders");

function renderOrders() {
    const orders = getOrders();
    if (!ordersTable) return;
    ordersTable.innerHTML = "";
    if (orders.length === 0) {
        ordersEmpty?.classList.remove("d-none");
    } else {
        ordersEmpty?.classList.add("d-none");
        orders.forEach((order) => {
            const itemsCount = order.items?.reduce((sum, item) => sum + Number(item.qty || 0), 0) || 0;
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>AZ-${(order.id || "").toString().slice(-6)}</td>
                <td>${order.date ? new Date(order.date).toLocaleString("id-ID") : "-"}</td>
                <td>${order.name || "-"}</td>
                <td>${order.phone || "-"}</td>
                <td style="max-width: 260px;">${order.address || "-"}</td>
                <td>${itemsCount} item</td>
                <td>${formatRupiah(order.total || order.subtotal || 0)}</td>
                <td>
                    <div class="table-actions">
                        <button class="table-btn" data-action="view" data-id="${order.id}"><i class="bi bi-eye"></i></button>
                    </div>
                </td>
            `;
            ordersTable.appendChild(tr);
        });
    }
    renderDashboard();
}

if (ordersTable) {
    ordersTable.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const id = btn.dataset.id;
        const orders = getOrders();
        const order = orders.find((o) => o.id === id);
        if (!order) return;
        if (odId) odId.textContent = order.id || "-";
        if (odDate) odDate.textContent = order.date ? new Date(order.date).toLocaleString("id-ID") : "-";
        if (odName) odName.textContent = order.name || "-";
        if (odPhone) odPhone.textContent = order.phone || "-";
        if (odAddress) odAddress.textContent = order.address || "-";
        if (odItems) {
            odItems.innerHTML = "";
            (order.items || []).forEach((item) => {
                const tr = document.createElement("tr");
                const subtotal = Number(item.price || 0) * Number(item.qty || 0);
                tr.innerHTML = `
                    <td>${item.name || "-"}</td>
                    <td>${formatRupiah(item.price || 0)}</td>
                    <td>${item.qty || 0}</td>
                    <td>${formatRupiah(subtotal)}</td>
                `;
                odItems.appendChild(tr);
            });
        }
        if (odTotal) odTotal.textContent = formatRupiah(order.total || order.subtotal || 0);
        orderDetailModal.show();
    });
}

if (clearOrders) {
    clearOrders.addEventListener("click", () => {
        if (confirm("Bersihkan semua pesanan yang masuk? Tindakan ini tidak bisa dibatalkan.")) {
            saveOrders([]);
            renderOrders();
        }
    });
}

renderProducts();
renderOrders();
renderDashboard();
