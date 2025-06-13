const person = {
  name: "Natalya",
  surname: "Ilina",
  age: 35,
};

function setFullName(obj) {
  return (fullName = `${obj.name} ${obj.surname}`);
}

let setPersonFullName = setFullName.bind (person);

console.log(setPersonFullName(person));
