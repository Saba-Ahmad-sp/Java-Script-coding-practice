function findLargest(arr) {
  let largest = arr[0];
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([12, 23, 99, 64, 21, 73]));