//Вычислить дробную часть среднего арифметического двух заданных положительных вещественных чисел.
const firstNumber =  24.24
const secondNumber = 12.12
const average = (firstNumber+secondNumber)/2
console.log("Дробная часть среднего арифметического двух заданных положительных вещественных чисел",firstNumber,"и",secondNumber,"это -", (average-Math.floor(average)).toFixed(5));
