const numberMassive = [1,2,4,-1,10,11]
function isNumberInRange (num) {
    return num > 0 && num < 10;
}
let newNumbers = [];
for (let i = 0; i < numberMassive.length; i += 1) {
  if (isNumberInRange(numberMassive[i])) {
    newNumbers.push(numberMassive[i]);
  }
}
console.log(newNumbers)