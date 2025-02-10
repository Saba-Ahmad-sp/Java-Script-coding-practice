function isPrime(num){
  if(num <= 1){
    return "Please Enter number Greater than 1";
  }
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return `${num} is not a Prime Number`;
    }
    return `${num} is a Prime Number`;
}
  }

console.log(isPrime(199));