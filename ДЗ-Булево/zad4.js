"use strict";
const firstNumber = 123
const secondNumber = NaN
operation = "%"

if (!isNaN(firstNumber) && isFinite(firstNumber)  && !isNaN(secondNumber) && isFinite(secondNumber))
{
    if (operation == "+")
    {
        console.log(firstNumber + secondNumber);
    }
    else if (operation == "-")
    {
        console.log(firstNumber - secondNumber);
    }
    else if (operation == "*")
    {
        console.log(firstNumber *  secondNumber)
    }
    else if (operation == "/")
    {
        console.log(firstNumber / secondNumber)
    }
    else if (operation == "**")
    {
        console.log(firstNumber ** secondNumber)
    }
    else if (operation == "%")
    {
        console.log(firstNumber % secondNumber)
    }
}
else
{
    console.log("Одно из чисел нельзя определить как вещественное");
}
