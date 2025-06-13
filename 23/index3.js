const users = [
  { name: "Natalya", age: 34},
  { name: "Ivan", age: 14},
  { name: "Tatyana", age: 58},
  { name: "Valentina", age: 20},
  { name: "Olga", age: 12},
  { name: "Denis", age: 18}
]

const filteredUsers = users.filter ( (user) => {
  return user.age >= 18;
})

console.log (filteredUsers);

const nameUsers = users.map ( (user) => {
  return user.name;
})

console.log (nameUsers);



