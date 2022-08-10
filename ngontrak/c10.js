const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : 'tulis kalimatmu disini >'
});
rl.prompt (); //cetak prompt

rl.on('line',(line)=> {
    var input = line.trim();
    var a =  input.split(" "); hasil = [];
   for (let i = 0; i < a.length ; i++){
       var c = a[i];
       if (c[0] == 'a' || c[0] == 'i' || c[0] == 'u' || c[0] == 'e' || c[0] == 'o'){
           hasil.push(c)
       }else {let s = c.slice(1);
           hasil.push(s + c[0] + 'nyo')
       }

   } var final = hasil.toString();
var akhir = final.replace(/,/gi," ")
console.log(akhir)
rl.prompt()
}) 


