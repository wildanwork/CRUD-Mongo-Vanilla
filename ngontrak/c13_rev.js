console.log('>>> JS TODO <<<')
console.log('$ node c13.js <command>')
console.log('$ node c13.js list')
console.log('$ node c13.js task <task_id>')
console.log('$ node c13.js add <task_content>')
console.log('$ node c13.js delete <task_id>')
console.log('$ node c13.js complete <task_id>')
console.log('$ node c13.js uncomplete <task_id>')
console.log('$ node c13.js list:outstanding asc|des ')
console.log('$ node c13.js list :completed asc|desc')
console.log('$ node c13.js tag <task_id> <tag_name1> <tag_name2>...<tag_name_N>')
console.log('$ node c13.js filter:<tag_name>')
    // const {readFileSync,writeFile} = require ('fs')
const fs = require('fs')
const isilama = fs.readFileSync('data13.json', 'utf-8')
const data = JSON.parse(isilama) //data buat baca dlu biar gak ketimpa

const x = process.argv;
if (x.length >= 3) {
    var konstanta = 2;
    if (x[konstanta].includes('filter:')) {
        //  console.log(x[2].split(':'))
        // console.log(x[2].split(':')[1])
        for (let i = 0; i < data.length; i++) {
            if (data[i].tag == x[2].split(':')[1]) {
                if (data[i].complete == false) {
                    console.log(`${i + 1}. [ ] ${data[i].nama}`)
                } else {
                    console.log(`${i + 1}. [x ] ${data[i].nama}`)
                }
            }
        }
    }
}
switch (x[konstanta]) {
    case 'add':
        var isiNama = x.slice(konstanta + 1).join(' ')
        data.push({ "nama": isiNama, "complete": false, "tag": [] })
        var sana = JSON.stringify(data, null, 3)
        fs.writeFileSync('data13.json', sana, 'utf-8')
        console.log("'" + isiNama + " telah ditambahkan" + "'")
        break;
    case 'list':
        console.log('Daftar pekerjaan')
        for (i = 1; i <= data.length; i++) {
            if (data[i - 1].complete == false) {
                console.log(`${i}[ ] ${data[i - 1].nama}`)
            } else {

                console.log(`${i}[x] ${data[i - 1].nama}`)
            }
        }
        break;
    case 'delete':
        if (x.length > 3) {
            let angka = parseInt(x[3])
            data.splice(angka - 1, 1)
                //  console.log(data)
            fs.writeFileSync('data13.json', JSON.stringify(data))
        }
        break;
    case 'complete':
        if (x.length > 3) {
            let angka = parseInt(x[3])
            data[angka - 1].complete = true;
            fs.writeFileSync('data13.json', JSON.stringify(data))
            console.log(` "${data[angka - 1].nama}"telah selesai.`)
        }
        break;
    case 'uncomplete':
        if (x.length > 3) {
            let angka = parseInt(x[3])
            data[angka - 1].complete = false;
            fs.writeFileSync('data13.json', JSON.stringify(data))
            console.log(`" ${data[angka - 1].nama} status selesai dibatalkan.`)
        }
        break;
    case 'list:outstanding':
        if (x.length > 3) {
            let asc = x[3];
            if (asc == 'asc') { //ngambil aja dari yg list ya gaes ya
                for (i = 1; i <= data.length; i++) {
                    if (data[i - 1].complete == false) {
                        console.log('Daftar pekerjaan')
                        console.log(`${i}[ ] ${data[i - 1].nama}`)
                    }
                }
            }
        }
        break;
    case 'list:completed':
        if (x.length > 3) {
            let asc = x[3];
            if (asc == 'desc') { //ngambil aja dari yg list ya gaes ya
                for (i = 1; i <= data.length; i++) {
                    if (data[i - 1].complete == true) {
                        console.log('Daftar Pekerjaan')
                        console.log(`${i}[x] ${data[i - 1].nama}`)
                    }
                }
            }
        }
        break;
    case 'help':
        console.log('>>> JS TODO <<<')
        console.log('$ node c13.js <command>')
        console.log('$ node c13.js list')
        console.log('$ node c13.js task <task_id>')
        console.log('$ node c13.js add <task_content>')
        console.log('$ node c13.js delete <task_id>')
        console.log('$ node c13.js complete <task_id>')
        console.log('$ node c13.js uncomplete <task_id>')
        console.log('$ node c13.js list:outstanding asc|des ')
        console.log('$ node c13.js list :completed asc|desc')
        console.log('$ node c13.js tag <task_id> <tag_name1> <tag_name2>...<tag_name_N>')
        console.log('$ node c13.js filter:<tag_name>')
        break;
    case 'tag':
        if (x.length > 3) {
            let a = parseInt(x[3]);
            data[a - 1].tag.push((x.slice(4).join('')))
            fs.writeFileSync('data13.json', JSON.stringify(data))
            console.log(`Tag '${x.slice(4).join('')}' telah ditambahkan ke daftar '${data[a - 1].nama}'`)
        }
        break;
}