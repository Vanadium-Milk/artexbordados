document.addEventListener("DOMContentLoaded", function() {

    function toggleActiveClass(button, buttonGroup) {
        var buttons = document.querySelectorAll(buttonGroup);
        buttons.forEach(function(btn) {
            if (btn === button) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    var colorButtons = document.querySelectorAll(".color-options .color-btn");
    colorButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            toggleActiveClass(button, ".color-options .color-btn");
        });
    });

    var garmentButtons = document.querySelectorAll(".garment-options .garment-type-btn");
    garmentButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            toggleActiveClass(button, ".garment-options .garment-type-btn");
        });
    });



    function addToCart(productName, productPrice, garmentType, garmentColor, garmentSize, quantity) {
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        var product = { 
            name: productName, 
            price: parseFloat(productPrice), 
            garment: garmentType, 
            color: garmentColor, 
            size: garmentSize, 
            quantity: parseInt(quantity) // Agregar la cantidad al objeto product
        };
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Actualizar el total del carrito si estamos en la interfaz del carrito
        updateCartTotal(productPrice);
    }

    function updateCartTotal() {
        var cartTotalElement = document.querySelector(".cart-total");
        
        if (cartTotalElement !== null) {
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            var total = 0;
            
            cartItems.forEach(function(product) {
                total += product.price;
            });
            

            cartTotalElement.textContent = "Total: $" + total.toFixed(2);
        }
    }

    var addToCartButton = document.querySelector(".add-to-cart");
    if (addToCartButton !== null) {
        addToCartButton.addEventListener("click", function() {
            var productName = document.querySelector(".product-name h2").textContent;
            var productPrice = document.querySelector("#price").textContent.replace("$", "").trim();
            var garmentType = document.querySelector(".garment-options .active").dataset.type;
            var color = document.querySelector(".color-options .active").dataset.color;
            var size = document.querySelector("select[name='size']").value;
            var quantity = document.getElementById("quantity").textContent;
            addToCart(productName, productPrice, garmentType, color, size, quantity);
        });
    }

    updateCartTotal();
});