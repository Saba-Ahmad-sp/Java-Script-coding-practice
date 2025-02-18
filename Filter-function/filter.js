const arr = [5, 1, 3, 2, 6];

//gives odd ones.
function isOdd(x) {
  return x % 2;
}

//gives even ones.
function isEven(x) {
  return x % 2 === 0;
}

//gives greater than 4.
function greaterThan4(x) {
  return x > 4;
}

const output = arr.filter(greaterThan4);
console.log(output);

//2nd way of writing:-
/*
const output = arr.filter(function greaterThan4(x) {
  return x > 4;
}
*/

//3rd way of writing:-
// const output = arr.filter((x) =>  x % 2);
