function doubble(arr) {
  let ans = arr.map((num) => {
    return num * 2;
  })
  return ans;
}
console.log(doubble([2, 8, 4, 1, 3]));