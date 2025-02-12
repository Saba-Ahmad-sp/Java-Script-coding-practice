function removeDuplicate(arr) {
  const uniqueArray = [];
  for(let i = 0; i < arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicate([5, 3, 2, 5, 4, 7, 9, 8, 7, 3]));