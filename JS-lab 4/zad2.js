//С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка«Привет, мир!» должна превратиться в «!рим ,тевирП».
const string = "Пример ремирП";
let newstring = "";
let i = 0;
while (i < string.length) {
  newstring += string[string.length - 1 - i];
  i++;
}
console.log(newstring);
