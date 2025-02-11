function frequency(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return freq;
}

console.log(frequency([1, 2, 3, 1, 4, 3, 5, 1]));