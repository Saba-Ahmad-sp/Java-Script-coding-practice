function unionArraysWithDuplicates(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 2, 3];
const array2 = [2, 3, 4, 4, 5];
const unionArray = unionArraysWithDuplicates(array1, array2);
console.log(unionArray);