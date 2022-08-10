function spiral(param1) {
    const hasil = [];
    let counter = 0;

    //console.log(y)
    for (let i = 0; i < param1; i++) {
        hasil[i] = []


        for (let j = 0; j < param1; j++) {
            hasil[i][j] = counter;//j itu ke kanan/kiri
            counter++
        }
    }
    
    //console.log(hasil[4][3])
    var result = [];
    var x = 0; //awal column
    var y = 0; //di ujung
    var ba = 0;
    var bb = param1-1;
    var bk = param1-1 ;
    var bki = 0;
    while (result.length < param1 ** 2) {

        //while (hasil.length = param1){
        //loop gerak ke kanan

        for (; x <= bk; x++) {
            result.push(hasil[y][x])
        }
        x--
        y++
        bk--
        
        //loop gerak ke bawah 
        for (; y <= bb; y++) {
            result.push(hasil[y][x])
           
        }
        x--
        y--
        bb--

        //loop gerak ke kiri



        for (; x >= bki; x--) {
            result.push(hasil[y][x])
        }
        x++
        y--
        bki++

        //loop gerak ke atas
        for (; y > ba; y--) {
            result.push(hasil[y][x])

        }
        x++
        y++
        ba++

        //param1--
    } return result
}
//

console.log(spiral(5))
console.log(spiral(6))