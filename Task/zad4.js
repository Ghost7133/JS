// Задача 4
// Создать объект, свойствами которого будут 2 переменные и функция, которая выводит в консоль имя и фамилию из переменных
// Добавить свойство, значением которого будет функция, которая выводит сообщение в консоль 'My name ... '
// удалить первую функцию
let _name = "Кирилл";
let surname = "Юдин";
let obj = {
  _name,
  surname,
  firstSurName() {
    console.log(_name, surname);
  },
};
obj.firstSurName();

obj.secondSurName = function () {
  console.log("My name", _name, surname);
};
obj.secondSurName();

delete obj.firstSurName;
console.log(obj);
