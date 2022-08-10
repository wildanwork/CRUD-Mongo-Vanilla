// const { on } = require('events');
const fs = require('fs')
const readline = require("readline")
if (!process.argv[2]) {
    console.log(`tolong sertakan nama file soal misalnya 'node c12.js soal.json`)
    process.exit(1)
}

const data = JSON.parse(fs.readFileSync('soal.json', 'utf-8'))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "tebakan: "
})

console.log('selamat datang di permainan tebak kata, silakan isi dengan jawaban yang benar!');
let count = 0;
let wrong = 0;
console.log(`pertanyaan : ${data[count].definition}?`)

rl.prompt()
rl.on('line', (answer) => {
    if (answer.trim().toLowerCase() == 'skip') {
        data.push(data[count])
        data.splice(count, 1)
        console.log(`pertanyaan : ${data[count].definition}?`)


    } else {
        if (answer.trim().toLowerCase() == data[count].term.toLowerCase()) {
            console.log('selamat anda benar!')
            count++
            wrong = 0;

            if (count < data.length) {
                console.log(`pertanyaan : ${data[count].definition}?`)
            } else {
                console.log(`hore anda menang!\n`)
                rl.close()
            }
        } else {
            wrong++
            console.log(`anda kurang beruntung! , anda telah salah ${wrong} kali, silakan coba lagi\n`)
        }
    }
    rl.prompt()
}).on('close', () => {
    process.exit(0)
})