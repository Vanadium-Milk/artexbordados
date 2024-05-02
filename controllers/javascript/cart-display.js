document.addEventListener("DOMContentLoaded", function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    var itemList = document.querySelector(".item-list");

    cartItems.forEach(function(item) {
        var productElement = document.createElement("div");
        productElement.classList.add("product-item");
        productElement.innerHTML = `
            <span class="product-name">${item.name}</span>
            <span class="product-price">$${item.price}</span>
            <span class="product-garment">${item.garment}</span>
            <span class="product-color">${item.color}</span>
            <span class="product-size">${item.size}</span>
            <button class="remove-button">Eliminar</button>
        `;
        itemList.appendChild(productElement);
    });

    // para calcular y mostrar el total del carrito
    var total = cartItems.reduce((acc, item) => acc + item.price, 0);
    document.querySelector(".cart-total").textContent = "Total: $" + total.toFixed(2);

    function clearCart() {
        localStorage.removeItem('cartItems');
    }

    var clearCartButton = document.getElementById("clear-cart-btn");
    if (clearCartButton) {
        clearCartButton.addEventListener("click", function() {
            console.log('hola');
            clearCart();
        });
    }
});