function romawi(n) {
    let x = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let y = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let hasil = '';
    for (let index = 0; index < x.length; index++) {
        while (x[index] <= n) {
            hasil += y[index]
            n -= x[index]
        }
    }
    return hasil

}
console.log("Script Testing untuk Konversi Romawi\n ");
console.log("input | expected | result");
console.log("------|----------|--------");
console.log("4     | IV       |", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     |", romawi(13));
console.log("1453  | MCDLIII  |", romawi(1453));
console.log("1646  | MCDXLVI  |", romawi(1646));
console.log(romawi(1515665));