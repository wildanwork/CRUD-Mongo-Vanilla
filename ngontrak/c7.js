function weirdMultiply(sentence){
    
    x = sentence.toString();
    y = x.split("")
   var wadah = [];
 let hasil = 1;
    for (let i = x.length ; i > 0 ; i--){
       var sum = y[i-1]
       
 wadah.push(sum.valueOf())
 
}
for (i = 0 ; i < wadah.length; i++){
    hasil *= wadah[i]
   
    
} var c = hasil.toString()
    var cs = c.split("")
    var ex = 1;
    
    for(let j = 0 ;j< cs.length; j++){
        ex *= parseInt(cs[j])

    } if (ex >= 10){
        return weirdMultiply(ex)
        
    } else {
        return ex
    }
    
} 
console.log(weirdMultiply(27))