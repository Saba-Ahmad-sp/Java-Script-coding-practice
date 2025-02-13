function countChar(str, char){
  str = str.toLowerCase();
  console.log(`Occurance of "${char}" in "${str}" is:`);
  return str.split(char).length - 1;
}

console.log(countChar("Saba Ahmad", "a"));