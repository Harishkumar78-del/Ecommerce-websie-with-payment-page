
  const products = [
    { id: 1, name: "Men's T-Shirt", price: "$20", img: "img1.jpg", category: "men" },
    { id: 2, name: "Men's Shirt", price: "$40", img: "img2.jpg", category: "men" },
    { id: 3, name: "Men's Jacket", price: "$50", img: "img3.jpg", category: "men" },
    { id: 4, name: "Men's Jeans", price: "$30", img: "img4.jpg", category: "men" },
    { id: 5, name: "Men's Corgo", price: "$70", img: "img5.jpg", category: "men" },
    { id: 6, name: "Women's Dress", price: "$35", img: "img6.jpg", category: "women" },
    { id: 7, name: "Women's Jeans", price: "$45", img: "img9.jpg", category: "women" },
    { id: 8, name: "Women's Jacket", price: "$55", img: "img8.jpg", category: "women" },
    { id: 9, name: "Women's top", price: "$25", img: "images.jpg", category: "women" },
    { id: 10, name: "Women's T-shirt", price: "$15", img: "img7.jpg", category: "women" }
];

let cart = [];

function displayProducts(category = "all") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function filterProducts(category) {
    displayProducts(category);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name + " added to cart!");
}

function goToCart() {
    window.location.href = "cart.html";
}

displayProducts();