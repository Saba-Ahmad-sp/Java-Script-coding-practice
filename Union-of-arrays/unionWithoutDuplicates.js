function unionArraysWithoutDuplicates(arr1, arr2) {
  const result = [];

  for (const element of arr1) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  for (const element of arr2) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
}

const arr1 = [1, 2, 2, 3];
const arr2 = [3, 4, 4, 5];
const unionArray = unionArrays(arr1, arr2);
console.log(unionArray);