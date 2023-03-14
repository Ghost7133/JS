//Задание 2.1
// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст и возвращает массив, где каждый элемент представляет из себя строку "Иван 23 года".
const workerMassive = [
  {
    _name: "Михаил",
    age: 17,
  },
  {
    _name: "Кирилл",
    age: 17,
  },
  {
    _name: "Олег",
    age: 18,
  },
  {
    _name: "Александр",
    age: 17,
  },
  {
    _name: "Иван",
    age: 22,
  },
];
function zad22(array) {
  const finalyMassive = [];
  for (let i = 0; i < workerMassive.length; i++) {
    workerMassive[i].age <= 21
      ? finalyMassive.push(
          `${workerMassive[i]._name} ${workerMassive[i].age} лет`
        )
      : finalyMassive.push(
          `${workerMassive[i]._name} ${workerMassive[i].age} года`
        );
  }
  console.log(finalyMassive);
}
zad22(workerMassive);
