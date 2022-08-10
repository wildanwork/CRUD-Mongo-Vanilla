function FirstFactorial(num) { 
 
    if(num <= 1){
    return num; 
    } else {
      return num * FirstFactorial(num-1)
    }
  }
     
  console.log(FirstFactorial(3))
  console.log(FirstFactorial(6))