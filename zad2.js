//Дано двузначное число. Поменять местами цифры в числе.
const number = 67;
const secondNumber = number % 10;
const firstNumber = number - secondNumber;
console.log("Первернутое число",number, "это число -",secondNumber * 10 + firstNumber / 10);
