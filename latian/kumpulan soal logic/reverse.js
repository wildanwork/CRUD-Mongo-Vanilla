function FirstReverse(str) { 

    // code goes here  
    var temp =''
    for(let i = 0; i<str.length ; i++){
        temp = str[i] + temp
    }
    return temp
  }

     
  // keep this function call here 
console.log(FirstReverse('kamu'))
