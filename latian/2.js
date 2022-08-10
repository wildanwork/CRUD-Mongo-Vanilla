var konversiRomawi = function(nomor) {

    var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var hasil = '';

    for (var index = 0; index < desimal.length; index++) {
        while (desimal[index] <= nomor) {
            hasil += romawi[index];
            nomor -= desimal[index];
        }
    }
    return hasil;
}

console.log(konversiRomawi(2022));