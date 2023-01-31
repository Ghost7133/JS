"use strict";
const numberA = 13.123456789;
const numberB = 2.123;
const accuracy = 5;

let drobA = 10 ** accuracy * (numberA - Math.trunc(numberA)).toFixed(accuracy);
let drobB = 10 ** accuracy * (numberB - Math.trunc(numberB)).toFixed(accuracy);

console.log("Дробная часть числа A -", drobA);
console.log("Дробная часть числа B -", drobB);

console.log(drobA, ">", drobB, "-", drobA > drobB);
console.log(drobA, "<", drobB, "-", drobA < drobB);
console.log(drobA, ">=", drobB, "-", drobA >= drobB);
console.log(drobA, "<=", drobB, "-", drobA <= drobB);
console.log(drobA, "===", drobB, "-", drobA === drobB);
console.log(drobA, "!=", drobB, "-", drobA != drobB);
