document.addEventListener("DOMContentLoaded", function() {
  // Copiar el contenido del elemento #original-price al elemento #price
  var originalPriceElement = document.getElementById("original-price");
  var priceElement = document.getElementById("price");
  if (originalPriceElement !== null && priceElement !== null) {
      priceElement.textContent = originalPriceElement.textContent;
  }
});


var product_card_start = 1;
var start1 = 1;
var start2 = 1;
var itemPrice1 = 550;
var itemPrice2 = 250;

//My Cart Functions
window.onload = function() {
    updatePriceAndQuantity('quantity1', 'price1', start1, itemPrice1);
    updatePriceAndQuantity('quantity2', 'price2', start2, itemPrice2);
    document.getElementById('items-in-list').textContent = start1 + start2;
    updateTotal(itemPrice1, itemPrice2);
}

function increment(quantityId, priceId, itemPrice){
  if (quantityId === 'quantity') {
        start1++;
        updatePriceAndQuantity(quantityId, priceId, start1, itemPrice);
    }
}

function decrease(quantityId, priceId, itemPrice){
    if (quantityId === 'quantity' && start1 > 1) {
        start1--;
        updatePriceAndQuantity(quantityId, priceId, start1, itemPrice);
    }
}

function updatePriceAndQuantity(quantityId, priceId, start, itemPrice){
    var totalPrice = itemPrice * start;
    document.getElementById(quantityId).textContent = start;
    document.getElementById(priceId).textContent = '$' + totalPrice;
  
    if (priceId === 'price') {
        document.getElementById('original-price').textContent = '$' + itemPrice;
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


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product-card-container");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    hideFiltered(x[i], "show");
    if (x[i].className.indexOf(c) > -1) showFiltered(x[i], "show");
  }
}


function showFiltered(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }


function hideFiltered(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }


var btnContainer = document.getElementById("buttonContainer");
var btns = btnContainer.getElementsByClassName("category-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var productName = document.querySelector(".product-name h2").textContent;
  var productPrice = document.querySelector("#original-price").textContent;

  var addToCartButton = document.querySelector(".add-to-cart-btn");
  addToCartButton.dataset.name = productName;
  addToCartButton.dataset.price = productPrice;
});
