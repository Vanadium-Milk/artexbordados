document.addEventListener("DOMContentLoaded", function() {
    console.log("El script de JavaScript se ha cargado correctamente.");
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    var itemList = document.querySelector(".item-list");

    function nombreColor(codigoColor){
        switch (codigoColor) {
            case "NG":
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

    // selecciona el contenedor de los elementos de los productos
    var itemList = document.querySelector('.items-column');

    function updateCartDisplay() {
        // esto limpia el contenido actual del carrito
        itemList.innerHTML = "";

        // para iterar sobre los elementos del carrito y crear los elementos HTML correspondientes
        cartItems.forEach(function(item) {
            var productElement = document.createElement("div");
            productElement.classList.add("item");

            var html = `
                <button class="remove-button"><i class="fa-solid fa-xmark"></i></button>
                <div class="item-image"></div>
                <div class="item-info">
                    <span class="product-name">${item.name}</span>
                    <span class="product-garment">${nombrePrenda(item.garment)}</span>
                    <span class="product-quantity">x${item.quantity}</span><br>
                    <span class="product-color">Color: ${nombreColor(item.color)}</span>
                    <span class="product-size">- ${item.size}</span><br>
                    <span class="product-originalp">${item.originalp} MXN</span>
                    <span class="product-price"><br><h3>Total:</h3><br>$${item.price}.00</span>
                </div>
            `;

            productElement.innerHTML = html;
            itemList.appendChild(productElement);
        });

        // selecciona los botones de eliminar
        var removeButton = document.querySelectorAll(".remove-button");

        removeButton.forEach(function(button, index) {
            button.addEventListener("click", function(){
                // eliminar el elemento del carrito y actualizar localStorage
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // para actualizar el contenido del carrito
                updateCartDisplay();
            });
        });
    }

    // actualizar el contenido del carrito al cargar la página
    updateCartDisplay();
});