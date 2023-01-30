//Найти произведение и сумму цифр заданного трехзначного числа.
"Use strict";
const number = 999;
const firstNumber = Math.floor(number / 100);
const secondNumber = ((number % 100) - ((number % 100) % 10)) / 10;
const thirdNumber = (number % 100) % 10;
console.log("Произведение цифр заданного трехзначного числа",number,"это -",firstNumber * secondNumber * thirdNumber);
console.log("Сумма цифр заданного трехзначного числа",number,"это -",firstNumber + secondNumber + thirdNumber);
