const firstnumber = 1;
const secondnumber = 0;

let max = Math.max(firstnumber, secondnumber);
let min = Math.min(firstnumber, secondnumber);

let random = Math.floor(Math.random() * Math.abs(max - min) + min);
let finish = random + 1 - Math.abs(random % 2);
console.log(finish);
