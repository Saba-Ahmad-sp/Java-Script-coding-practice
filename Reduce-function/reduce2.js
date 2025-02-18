const users = [
  { firstname: "Saba", lastname: "Ahmad", age: 24 },
  { firstname: "Faisal", lastname: "Ahmad", age: 30 },
  { firstname: "Abuzar", lastname: "Saifee", age: 30 },
  { firstname: "Aman", lastname: "Shabong", age: 25 },
];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);