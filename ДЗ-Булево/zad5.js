"use strict";
const month = 2

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
{
    console.log("В", month,"месяце 31 день");
}
else if  (month == 4 || month == 6 || month == 9 || month == 11)
{
    console.log("В", month, "месяце 30 дней");
}
else
{
    console.log("Во", month, "месяце 28 дней");
}
