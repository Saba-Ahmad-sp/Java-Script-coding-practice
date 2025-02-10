function greet(name, callback){
  callback(`Hello ${name}`);
}

greet("Saba Ahmad", message => console.log(message));