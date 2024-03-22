document.addEventListener("DOMContentLoaded", function() {
    let tshirtState = false;
    let longsleeveState = false;
    let sleevelessState = false;
    let capState = false;

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
    let cap_btn = document.getElementById('cap-btn');
    let garment_change = document.getElementById('color-change');
    //garment exchanges
    let tshirt_exchange = document.getElementById('tshirt');
    let longsleeve_exchange = document.getElementById('longsleeve');
    let sleeveless_exchange = document.getElementById('sleeveless');
    let cap_exchange = document.getElementById('cap');
    let hoodie_exchange = document.getElementById('hoodie');

    hoodie_source = "file:///C:/Users/Kevin/Documents/GitHub/artexbordados/view/images/clothing-colors/hd-blck.png";
    tshirt_source = "file:///C:/Users/Kevin/Documents/GitHub/artexbordados/view/images/clothing-colors/ts-blck.png";
    longsleeve_source = "file:///C:/Users/Kevin/Documents/GitHub/artexbordados/view/images/clothing-colors/lng-blck.png";
    sleeveless_source = "file:///C:/Users/Kevin/Documents/GitHub/artexbordados/view/images/clothing-colors/slvls-blck.png";
    cap_source = "file:///C:/Users/Kevin/Documents/GitHub/artexbordados/view/images/clothing-colors/cap-blck.png";

    tshirt_btn.onclick = function tshirt_clicked() {
        longsleeve_exchange.src = "images/clothing-colors/lng-blck.png";
        sleeveless_exchange.src = "images/clothing-colors/slvls-blck.png";
        cap_exchange.src = "images/clothing-colors/cap-blck.png";
        garment_change.src = "images/clothing-colors/ts-blck.png";
        resetImagePositions();
        checkColorChange();
        
        if (tshirtState) {
            garment_change.src = "images/clothing-colors/hd-blck.png";
            tshirt_exchange.src = "images/clothing-colors/ts-blck.png";
        } else {
            garment_change.src = "images/clothing-colors/ts-blck.png";
            tshirt_exchange.src = "images/clothing-colors/hd-blck.png";
        }

        tshirtState = !tshirtState;
    }

    longsleeve_btn.onclick = function() {
        garment_change.src = "images/clothing-colors/lng-blck.png";
        longsleeve_exchange.src = "images/clothing-colors/hd-blck.png";
        tshirt_exchange.src = "images/clothing-colors/ts-blck.png";
        sleeveless_exchange.src = "images/clothing-colors/slvls-blck.png";
        cap_exchange.src = "images/clothing-colors/cap-blck.png";
        resetImagePositions();
        checkColorChange();

        if (longsleeveState) {
            garment_change.src = "images/clothing-colors/hd-blck.png";
            longsleeve_exchange.src = "images/clothing-colors/lng-blck.png";
        } else {
            garment_change.src = "images/clothing-colors/lng-blck.png";
            longsleeve_exchange.src = "images/clothing-colors/hd-blck.png";
        }

        tshirtState = !tshirtState;
    }

    sleeveless_btn.onclick = function() {
        garment_change.src = "images/clothing-colors/slvls-blck.png";
        sleeveless_exchange.src = "images/clothing-colors/hd-blck.png";
        tshirt_exchange.src = "images/clothing-colors/ts-blck.png";
        longsleeve_exchange.src = "images/clothing-colors/lng-blck.png";
        cap_exchange.src = "images/clothing-colors/cap-blck.png";
        resetImagePositions();
        checkColorChange();
    }

    cap_btn.onclick = function() {
        let capImage = document.getElementById('color-change');
        capImage.style.position = 'relative';
        capImage.style.top = '-30px';
    
        garment_change.src = "images/clothing-colors/cap-blck.png";
        cap_exchange.src = "images/clothing-colors/hd-blck.png";
        tshirt_exchange.src = "images/clothing-colors/ts-blck.png";
        longsleeve_exchange.src = "images/clothing-colors/lng-blck.png";
        sleeveless_exchange.src = "images/clothing-colors/slvls-blck.png";
        checkColorChange();
    }
    
    function resetImagePositions() {
        garment_change.style.top = '0px';
    }

    function checkColorChange() {
        if (garment_change.src == tshirt_source) {
            //color changes
            black_btn.onclick = function() {
                color_change.src = "images/clothing-colors/ts-blck.png";
            }
        
            red_btn.onclick = function() {
                color_change.src = "images/clothing-colors/ts-red.png";
            }
        
            cherry_btn.onclick = function() {
                color_change.src = "images/clothing-colors/ts-chr.png";
            }
        
            orange_btn.onclick = function() {
                color_change.src = "images/clothing-colors/ts-ora.png";
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

        } else if (garment_change.src == longsleeve_source) {
            //color changes

            black_btn.onclick = function() {
                color_change.src = "images/clothing-colors/lng-blck.png";
            }
        
            red_btn.onclick = function() {
                color_change.src = "images/clothing-colors/lng-red.png";
            }
        
            cherry_btn.onclick = function() {
                color_change.src = "images/clothing-colors/lng-chr.png";
            }
        
            orange_btn.onclick = function() {
                color_change.src = "images/clothing-colors/lng-ora.png";
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
                color_change.src = "images/clothing-colors/lng-sky.png";
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
        
        } else if (garment_change.src == sleeveless_source) {
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

        } else if (garment_change.src == cap_source) {
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

        } else if (garment_change.src == hoodie_source) {
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
                color_change.src = "images/clothing-colors/lng-sky.png";
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
        
        }
    }
})