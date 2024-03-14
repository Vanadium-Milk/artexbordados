var start1 = 1;
var start2 = 1;
var itemPrice1 = 600;
var itemPrice2 = 250;

window.onload = function() {
    updatePriceAndQuantity('quantity1', 'price1', start1, itemPrice1);
    updatePriceAndQuantity('quantity2', 'price2', start2, itemPrice2);
    document.getElementById('items-in-list').textContent = start1 + start2;
    document.getElementById('original-p').textContent = 600;
    updateTotal(itemPrice1, itemPrice2);
}

//product_page functions
function increment(quantityId, priceId, itemPrice){
    if (quantityId === 'quantity1') {
        start1++;
        updatePriceAndQuantity(quantityId, priceId, start1, itemPrice);
    } else if (quantityId === 'quantity2') {
        start2++;
        updatePriceAndQuantity(quantityId, priceId, start2, itemPrice);
    }
}

function decrease(quantityId, priceId, itemPrice){
    if (quantityId === 'quantity1' && start1 > 1) {
        start1--;
        updatePriceAndQuantity(quantityId, priceId, start1, itemPrice);
    } else if (quantityId === 'quantity2' && start2 > 1) {
        start2--;
        updatePriceAndQuantity(quantityId, priceId, start2, itemPrice);
    }
}

function updatePriceAndQuantity(quantityId, priceId, start, itemPrice){
    var totalPrice = itemPrice * start;
    document.getElementById(quantityId).textContent = start;
    document.getElementById(priceId).textContent = '$' + totalPrice;

    if (priceId === 'price1') { 
        document.getElementById('item-price1').textContent = itemPrice;
        updateTotal(totalPrice, parseFloat(document.getElementById('price2').textContent.replace('$', '')));
        document.getElementById('items-in-list').textContent = start + parseFloat(document.getElementById('quantity2').textContent);
    } else if (priceId === 'price2') { 
        document.getElementById('item-price2').textContent = itemPrice;
        updateTotal(totalPrice, parseFloat(document.getElementById('price1').textContent.replace('$', '')));
        document.getElementById('items-in-list').textContent = start + parseFloat(document.getElementById('quantity1').textContent);
    }
}

function updateTotal(total_price1, total_price2){
    total_for_items = (total_price1+total_price2);
    total_for_discounts = 0;
    total_for_checkout = total_for_items + total_for_discounts;
    document.getElementById('total-id').textContent = '$'+total_for_items;
    document.getElementById('total-discounts').textContent = '$'+total_for_discounts;
    document.getElementById('total-checkout').textContent = '$'+total_for_checkout;
}