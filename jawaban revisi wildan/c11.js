// const { on } = require('events');
const fs = require('fs')
const readline = require("readline")

const data = JSON.parse(fs.readFileSync('soal.json', 'utf-8'))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "tebakan: "
})

console.log('selamat datang di permainan tebak kata, silakan isi dengan jawaban yang benar!');
let count = 0;
console.log(`pertanyaan : ${data[count].definition}?`)

rl.prompt()
rl.on('line', (answer) => {
    if (answer.trim().toLowerCase() == data[count].term.toLowerCase()) {
        console.log('selamat anda benar!')
        count++
        if (count < data.length) {
            console.log(`pertanyaan : ${data[count].definition}?`)
        } else {
            console.log(`hore anda menang!\n`)
            rl.close()
        }
    } else {
        console.log('wkwkwk, anda kurang beruntung!')
    }
    rl.prompt()
}).on('close', () => {
    process.exit(0)
})