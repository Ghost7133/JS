// Написать программу принимающую строчку, внутри которой есть несколько записей вида "$120", нужно вывести ВСЕ числа после доллара
// Пример: "Есть несколько товаров по $120 и $20 и $70 все они крутые" - > 120 20 70
const string = "Есть несколько товаров по $120 и $20 и $70 все они крутые"
const string1 = string.slice(string.indexOf("$"))

const dollarMassive = [];
let dollarId = string1.indexOf("$");

while (dollarId != -1) {
  dollarMassive.push(dollarId);
  dollarId = string1.indexOf("$", dollarId + 1);
}

for(let i = 0; i < dollarMassive.length; i++) {
  console.log(string1.slice(dollarMassive[i]+1,string1.indexOf(" ")+dollarMassive[i]));
}

