//Задание 3
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
// Удалите из массива объектов, задание 3, объект с name == "Anna".
//let user = [{
//             name: "John",
//             age: 30
//         },
//         {
//             name: "Bob",
//             age: 21
//         },
//         {
//             name: "Anna",
//             age: 19
//         }
//
const user = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "Anna",
    age: 19,
  },
];

let Bob = user.find((user) => user.name == "Bob");

console.log(Bob);

for (let i = 0; i < user.length; i++) {
  if (user[i].name == "Anna") user.splice(i, i);
}
console.log(user);
