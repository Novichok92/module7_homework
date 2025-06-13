const person = {
  name: "Natalya",
  age: 35,
};

function printInfo(name, age) {
  console.log("Name:" + this.name, "Age:" + this.age);
}

printInfo.call (person);

