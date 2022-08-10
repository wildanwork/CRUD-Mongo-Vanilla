function sum() {
    let a = 0; //inisiasi saja
    for (let i = 0; i < arguments.length; i++) {
        a += arguments[i];

    } //agar tidak membuat banyak kemungkinan yang terjadi pakai arguments length
    console.log(a); //print hasil
}
sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9)