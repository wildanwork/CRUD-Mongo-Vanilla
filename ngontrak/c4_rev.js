function indexPrime(param1) {
  var result = [2];
  for (let i=2; i++;) {
      let prime=true
    for (let j=2; j<i; j++) {
        if( i%j==0){
            prime=false
        }
    }
    if(prime == true){
        result.push(i)
    }
    if(result.length== param1){
        break;
    }
  }
  return result[param1-1];
}
console.log(indexPrime(4))
