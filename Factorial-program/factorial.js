function fact(n){
 let num=1;
  for(let i=2; i<=n; i++){
  //  num = num*i; or
  num *= i;
  }
  return num;
}

console.log(fact(4));