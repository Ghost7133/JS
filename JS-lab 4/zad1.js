//Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log.
const firstnumber = 0;
const secondnumber = -5;
const count = 70;
let massive = [];
let max = Math.max(firstnumber, secondnumber);
let min = Math.min(firstnumber, secondnumber);
for (let i = 0; i < count; i++) {
  massive.push(Math.floor(Math.random() * (max - min) + min));
}
console.log(massive);
