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

    // Selecciona el contenedor de los elementos de los productos
    var itemList = document.querySelector('.items-column');

    // Itera sobre los elementos del carrito y crea los elementos HTML correspondientes
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

    // Selección de los botones de eliminar
    var removeButton = document.querySelectorAll(".remove-button")

    // para eliminar los botones
    removeButton.forEach(function(button) {
        button.addEventListener("click", function(){
        var productItem = button.closest(".item");
        productItem.remove();
    
        // Encuentra el índice del elemento en el arreglo cartItems
        var index = cartItems.findIndex(function(item) {
            // ... (código existente para encontrar el índice)
        });
    
        if (index !== -1) {
            // Elimina el elemento del arreglo cartItems
            cartItems.splice(index, 1);
    
            // Actualiza el localStorage con el arreglo modificado
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            console.log("Carrito actualizado en localStorage:", localStorage.getItem('cartItems'));
        }
        });
    });
});