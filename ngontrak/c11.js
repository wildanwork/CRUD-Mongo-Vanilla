
const readline = require('readline');
console.log('Selamat datang di permainan Tebak Kata,silahkan isi dengan jawaban yang benar ya!')
const readFile = require('fs')
const data = JSON.parse((readFile.readFileSync('data.json', 'utf-8')))
//console.log(data)
console.log(data[0].definition)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
}
)
var x = 0;
rl.prompt();

rl.on('line', (input) => {
    input.trim()
    if (input == data[x].term) {
        console.log('selamat anda benar!')
        x++

        if (x < data.length) {
            console.log(data[x].definition)
            rl.prompt()
        }


        if (x == data.length) {
            console.log('Hore Anda Menang')

            rl.close()
        }



    } else {
        console.log('Wkwkwk, Anda kurang beruntung!')
        rl.prompt()
    }
}
)

