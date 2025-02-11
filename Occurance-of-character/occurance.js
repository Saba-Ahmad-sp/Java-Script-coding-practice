function countChar(str, char){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if (str[i] === char){
      count ++;
    }
  }
  console.log(`Occurance of "${char}" in "${str}" is:`);
  return count;
}

console.log(countChar("saba ahmad", "a"));