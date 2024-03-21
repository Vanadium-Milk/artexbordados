//agregar un if dependiendo del tipo de prenda

document.addEventListener("DOMContentLoaded", function() {
    //color id
    let black_btn = document.getElementById('black');
    let red_btn = document.getElementById('red');
    let cherry_btn = document.getElementById('cherry');
    let orange_btn = document.getElementById('orange');
    let golden_btn = document.getElementById('golden');
    let yellow_btn = document.getElementById('yellow');
    let lime_btn = document.getElementById('lime');
    let green_btn = document.getElementById('green');
    let dark_green_btn = document.getElementById('dark-green');
    let skyblue_btn = document.getElementById('skyblue');
    let blue_btn = document.getElementById('blue');
    let navy_btn = document.getElementById('navy');
    let purple_btn = document.getElementById('purple');
    let pink_btn = document.getElementById('pink');
    let lilac_btn = document.getElementById('lilac');
    let pastel_pink_btn = document.getElementById('pastel-pink');
    let dark_gray_btn = document.getElementById('dark-gray');
    let gray_btn = document.getElementById('gray');
    let white_btn = document.getElementById('white');
    let color_change = document.getElementById('color-change');
    //garment id
    let tshirt_btn = document.getElementById('tshirt-btn');
    let longsleeve_btn = document.getElementById('longsleeve-btn');
    let sleeveless_btn = document.getElementById('sleeveless-btn');
    let cap_btn = document.getElementById('cap_btn');
    let garment_change = document.getElementById('color-change');
    //garment exchanges
    let tshirt_exchange = document.getElementById('tshirt');
    let longsleeve_exchange = document.getElementById('longsleeve');
    let sleeveless_exchange = document.getElementById('sleeveless');
    let cap_exchange = document.getElementById('cap');
    let hoodie_exchange = document.getElementById('hoodie');

    //garment changes
    tshirt_btn.onclick = function() {
        garment_change.src = "images/clothing-colors/ts-blck.png";
        tshirt_exchange.src = "images/clothing-colors/hd-blck.png";
    }

    longsleeve_btn.onclick = function() {
        garment_change.src = "images/clothing-colors/lng-blck.png";
        longsleeve_exchange.src = "images/clothing-colors/hd-blck.png";

    }

    sleeveless_btn.onclick = function() {
        garment_change.src = "images/clothing-colors/slvls-blck.png";
        sleeveless_exchange.src = "images/clothing-colors/hd-blck.png";
    }

    //color changes
    black_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-blck.png";
    }

    red_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-red.png";
    }

    cherry_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-chr.png";
    }

    orange_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-ora.png";
    }

    golden_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-gld.png";
    }

    yellow_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-yel.png";
    }

    lime_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-lime.png";
    }

    green_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-grn.png";
    }

    dark_green_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-drk-grn.png";
    }

    skyblue_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-sky.png";
    }

    blue_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-blue.png";
    }

    navy_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-navy.png";
    }

    purple_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-purp.png";
    }

    pink_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-pink.png";
    }

    lilac_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-lila.png";
    }

    pastel_pink_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-pl-pink.png";
    }

    dark_gray_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-drk-gray.png";
    }

    gray_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-gray.png";
    }

    white_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-white.png";
    }
});
