//harusnya pake try catch

if (process.argv.length == 2) {

    console.log("tolong sertakan nama file sebagai inputan soalnya\n Misalnya 'node c12.js data.json'")
} else {
    console.log("Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini 'data.json' \n Untuk bermain, jawablah dengan jawaban yang sesuai.\n Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi")

    const readline = require('readline');
    const readFile = require('fs');
    const { argv } = require('process');
    const data = JSON.parse(readFile.readFileSync(process.argv[2], 'utf-8'))
    console.log(data[0].definition)
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'jawaban: '
    })
    var x = 0;
    var i = 1; //kesalahan

    rl.prompt()
    rl.on('line', (input) => {
            input.trim()

            if (input.toLowerCase() == data[x].term) {
                console.log('selamat anda benar!')
                x++
                if (x == data.length) {
                    console.log('Anda Beruntung! \n Anda Berhasil')
                    rl.close()
                }
                i = 1;
                console.log('itu', data[x].definition)
                rl.prompt()
            } else if (input.toLocaleLowerCase() == 'skip') {
                data.push(data[x])
                console.log(data[x + 1].definition)
                x++
                rl.prompt()
            } else {
                console.log(`Anda Kurang Beruntung! anda telah salah ${i} kali, silakan coba lagi`)
                i++
                rl.prompt()
            }


        }

    ).on('close', function() {
        process.exit(0)
    })
}