function pola(str){
    var a = str.split("=")
    var e = a[0]
    var b = a[1];
    var hasil = [];
for (let i = 0 ; i <10 ;i++){
   var f = e.replace('#',i)
   var g = eval(f);
   for (let j = 0 ; j<10;j++){
       var d = b.replace('#',j) 
       
        if(g == d){
            hasil.push(i,j)
        }
    }
 }return hasil
}

console.log(pola("42#3 * 188 = 80#204"))
console.log(pola("8#61*895 = 78410#5"))