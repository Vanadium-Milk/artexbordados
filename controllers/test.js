    var start = 1;

    window.onload = function() {
        update_price();
        document.getElementById('quantity').textContent = start;
    }

    function increment(){
        var quantityElement = document.getElementById('quantity');
        var quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++start;
        var decrement_button = document.getElementById('less');
        decrement_button.disabled = false;
        update_price();
    }

    function decrease(){
        var quantityElement = document.getElementById('quantity');
        var quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = --start;
        var decrement_button = document.getElementById('less');
        if (start == 1) {
            decrement_button.disabled = true;
        }
        update_price();
    }

    function update_price(){
        var item_price = 550;
        var totalPrice = item_price * start;
        document.getElementById('price').textContent = '$' + totalPrice;
    }
