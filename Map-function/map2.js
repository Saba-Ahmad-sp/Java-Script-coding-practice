const arr = [5, 6, 3, 2, 8];

//transformation logic
function doubble(x){
  return x * 2;
}

function tripple(x){
  return x * 3;
}

function binarry(x) {
  return x.toString(2);
}

const output = arr.map(binarry);
console.log(output);

//2nd way of writing (function inside map):-
/*
const output = arr.map(
  function binarry(x) {
    return x.toString(2);
  }); 
*/

//3rd way of writing (Arrow Function):-
/*
const output = arr.map((x) => {
  return x.toString(2);
});
*/

//if there is only one line in return statement then we can remove return keyword and curly brackets.

/*
const output = arr.map((x) => x.toString(2));
*/