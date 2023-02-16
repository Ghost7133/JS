// Напишите программу на JavaScript, которая будет пробегать по числам от 0 до 15.
// Для каждого он будет проверять, является ли текущее число нечетным или четным, и отображать сообщение на экране.
const numberMassive = []
for(let i = 0;i<=15;i++){
    numberMassive.push(i)
}
for (let z = 0; z < numberMassive.length; z++) {
    if (numberMassive[z] % 2 == 1) console.log("Число",numberMassive[z],"является нечетным")
    else console.log("Число",numberMassive[z],"является четным");   
}