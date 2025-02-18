const users = [
  { firstname: "Saba", lastname: "Ahmad", age: 24 },
  { firstname: "Faisal", lastname: "Ahmad", age: 30 },
  { firstname: "Abuzar", lastname: "Saifee", age: 30 },
  { firstname: "Aman", lastname: "Shabong", age: 25 },
];

//1st way:-
// const output = users.filter((x)=> {
//   if(x.age < 30) {
//   return x;
//  }}).map((x) => x.firstname);

//2nd way:-
const output = users.filter((x) => x.age < 30).map((x) => x.firstname)
console.log(output)