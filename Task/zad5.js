//Задача 5
//Создать функцию, входными параметрами которой будут 2 числа.
// Создайте объект calculator (калькулятор) с двумя свойствами, значениями которых будут входные параметры функции и с двумя методами:
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

function calculatorFun(a, b, operation) {
  let calculator = {
    a: a,
    b: b,
    sum: function () {
      console.log(this.a + this.b);
    },
    mul: function () {
      console.log(this.a * this.b);
    },
  };
  calculator[operation]();
}

calculatorFun(2, 3, "mul");
