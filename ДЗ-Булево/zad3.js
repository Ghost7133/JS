const firstNumber = 10
const secondNumber = 40
const thirdNumber = 143
const fourthNumber = NaN

if
(
    firstNumber > secondNumber??
    firstNumber > thirdNumber??
    firstNumber > fourthNumber
)
{
    console.log(firstNumber, "наибольшее из 4 чисел");
}

else if
(
    secondNumber > firstNumber??
    secondNumber > thirdNumber??
    secondNumber > fourthNumber)
{
    console.log(secondNumber, "наибольшее из 4 чисел");
}

else if 
(
    thirdNumber > firstNumber??
    thirdNumber > secondNumber??
    thirdNumber > fourthNumber)
{
    console.log(thirdNumber, "наибольшее из 4 чисел");
}

else if 
(
    fourthNumber > firstNumber??
    fourthNumber > secondNumber??
    fourthNumber > thirdNumber)
{
    console.log(fourthNumber, "наибольшее из 4 чисел");
}