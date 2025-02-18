const users = [
  {firstname: "Saba", lastname: "Ahmad", age: 24},
  {firstname: "Faisal", lastname: "Ahmad", age: 30},
  {firstname: "Abuzar", lastname: "Saifee", age: 29},
  {firstname: "Aman", lastname: "Shabong", age: 25}
]

const output = users.map((x) => x.firstname + " " + x.lastname)
console.log(output);