//agregar un if dependiendo del tipo de prenda

document.addEventListener("DOMContentLoaded", function() {
    let black_btn = document.getElementById('black');
    let red_btn = document.getElementById('red');
    let cherry_btn = document.getElementById('cherry');
    let orange_btn = document.getElementById('orange');
    let golden_btn = document.getElementById('golden');
    let yellow_btn = document.getElementById('yellow');
    let color_change = document.getElementById("color-change");

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

    black_btn.onclick = function() {
        color_change.src = "images/clothing-colors/hd-blck.png";
    }

});
