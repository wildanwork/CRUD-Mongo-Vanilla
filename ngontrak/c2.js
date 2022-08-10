function deretKaskus(n) {

    let x = []; //deklarasi array dlu
    for (let i = 1; i <= n; i++) {
        let a = i * 3
        if (a % 5 == 0 && a % 6 == 0) {
            x.push('KASKUS')
        } else if (a % 5 == 0) {
            x.push('KAS')
        } else if (a % 6 == 0) {
            x.push('KUS')
        } else {
            x.push(a)
        }
    }
    console.log(x)
}
deretKaskus(10)