document.addEventListener("DOMContentLoaded", function() {
    let garmentState = {
        type: 'S',
        color: 'NG'
    };

    let colorButtons = document.querySelectorAll('.color-btn');
    let garmentTypeButtons = document.querySelectorAll('.garment-type-btn');
    let garmentImage = document.getElementById('color-change');

    //crea la nomenclatura de la prenda + el color
    function changeGarmentImage() {
        if (garmentState.type && garmentState.color) {
            let garmentType = {
                'P': 'P',
                'C': 'C',
                'M': 'M',
                'S': 'S',
                'T': 'T'
            };
            let colorType = {
                'GD': 'GD',
                'NG': 'NG',
                'RJ': 'RJ',
                'NJ': 'NJ',
                'MG': 'MG',
                'CN': 'CN',
                'LM': 'LM',
                'JD': 'JD',
                'VB': 'VB',
                'TQ': 'TQ',
                'AR': 'AR',
                'AM': 'AM',
                'MD': 'MD',
                'FS': 'FS',
                'lilac': 'lilac',
                'RP': 'RP',
                'CB': 'CB',
                'PT': 'PT',
                'BC': 'BC'
            };
            let imageName = `${garmentType[garmentState.type]}${colorType[garmentState.color]}`;
            garmentImage.src = `images/clothing-colors/${imageName}.png`;
        }
    }

    // para cambiar el color
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            garmentState.color = this.dataset.color;
            changeGarmentImage();
        });
    });

    // para cambiar la prenda
    garmentTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            garmentState.type = this.dataset.type;
            changeGarmentImage();
        });
    });
});
