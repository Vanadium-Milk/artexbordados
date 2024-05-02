document.addEventListener("DOMContentLoaded", function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    var itemList = document.querySelector(".item-list");

    function nombreColor(codigoColor){
        switch (codigoColor) {
            case "N":
                return "Black";
            case "RJ":
                return "Red";
            case "GD":
                return "Cherry";
            case "NJ":
                return "Orange";
            case "MG":
                return "Golden";
            case "CN":
                return "Yellow";
        }
    }

    function nombrePrenda(codigoPrenda){
        switch (codigoPrenda) {
            case "S":
                return "Hoodie";
            case "P":
                return "T-Shirt";
            case "M":
                return "Long-Sleeved";
            case "T":
                return "Sleeveless";
            case "C":
                return "Cap";
        }
    }

    cartItems.forEach(function(item) {
        var productElement = document.createElement("div");
        productElement.classList.add("product-item");
        var html = `
            <span class="product-name">${item.name}</span>
            <span class="product-quantity">x${item.quantity}</span>
            <span class="product-price">$${item.price}</span>
            <span class="product-garment">${nombrePrenda(item.garment)}</span>
            <span class="product-color">${nombreColor(item.color)}</span>
            <span class="product-size">${item.size}</span>
            <button class="remove-button">Eliminar</button>
        `;

        productElement.innerHTML = html;
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