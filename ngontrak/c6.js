function sentencesManipulation(sentence){
   var a =  sentence.split(" "); hasil = [];
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
}
sentencesManipulation('ibu pergi ke pasar bersama aku')