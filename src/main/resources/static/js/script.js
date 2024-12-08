
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        loadProducts();
    }
});

async function loadProducts() {
    try {
        const response = await fetch('/api/sanpham');
        const products = await response.json();
        const productContainer = document.getElementById('product-container');


        productContainer.innerHTML = '';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-card');

            productDiv.innerHTML = `
                    <h3 class="product-name" >${product.tenSP}</h3>
                    <p class="product-price" >Giá: ${product.giaSP} VND</p>
                    <p>Số lượng: ${product.soLuong}</p>
                    <div class="product-buttons">
                    <button class="buy-button">Mua ngay</button>
                    <button class="add-button">+</button>
                </div>
                <a href="/chi-tiet" class="details-link">Xem chi tiết</a>
                `;
            productContainer.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuIcon.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.onload = loadProducts;
