//Дано двузначное число. Поменять местами цифры в числе.
"use strict";
const number = 67;
const secondNumber = number % 10;
const firstNumber = (number - secondNumber)/10;
console.log("Первернутое число",number, "это число -",secondNumber * 10 + firstNumber);
