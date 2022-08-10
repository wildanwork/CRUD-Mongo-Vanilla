function deretKaskus (n) {
    let wadah = []
    for (let i = 3; i <= n * 3; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            wadah.push("Kaskus")
        }
        else if (i % 5 == 0) {
            wadah.push("Kas")
        } else if (i % 6 == 0) {
            wadah.push("Kus")
        } else {
            wadah.push(i)
        }
    }
    return wadah
}
console.log(deretKaskus(10))