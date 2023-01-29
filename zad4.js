//Даны три числа. Найти среднее арифметическое модулей кубов этих чисел и среднее геометрическое их квадратов.
const firstNumber = 9
const secondNumber = 9
const thirdNumber = 9
console.log("Cреднее арифметическое модулей кубов чисел",firstNumber, secondNumber,"и",thirdNumber, "это -",((Math.abs(firstNumber**3+secondNumber**3+thirdNumber**3))/3).toFixed(3));
console.log("Среднее геометрическое их квадратов  это -",(Math.cbrt(firstNumber**2*secondNumber**2*thirdNumber**2)).toFixed(5));