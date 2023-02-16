// Напишите программу, которая принимает два массива, один с именами студентов, второй с одной оценкой, каждого студента
// Проверяйте, что бы массивы были одинаковыми по количеству элементов
// На выводе программа должна выдать среднюю оценку по студентам
// И оценку каждого студента буквой: <60 - F, <70 - D, <80 - C, <90 - B, <100 - A

const students = ["Юдин","Попов","Гысев","Бирюков","Юн"]
const marks = [100,20,80,100,10]
let count = 0
let avg = 0;
if (students.length != marks.length) console.log("Ошибка количество данных в массивах не совпадает");
else {
    for (let i = 0; i<students.length;i++)
    {
        if      (marks[i] >= 0  && marks[i] <= 60 ) console.log(students[i],"Получил оценку F")
        else if (marks[i] >= 60 && marks[i] <= 69 ) console.log(students[i],"Получил оценку D")
        else if (marks[i] >= 70 && marks[i] <= 79 ) console.log(students[i],"Получил оценку C")
        else if (marks[i] >= 80 && marks[i] <= 89 ) console.log(students[i],"Получил оценку B")
        else if (marks[i] >= 90 && marks[i] <= 100) console.log(students[i],"Получил оценку A")
    }
}
for (let z = 0; z<marks.length;z++)
{
    count += marks[z]
}
avg=count/marks.length
console.log("");
if      (avg >= 0  && avg <= 60 ) console.log("Средняя оценка  F")
else if (avg >= 60 && avg <= 69 ) console.log("Средняя оценка  D")
else if (avg >= 70 && avg <= 79 ) console.log("Средняя оценка  C")
else if (avg >= 80 && avg <= 89 ) console.log("Средняя оценка  B")
else if (avg >= 90 && avg <= 100) console.log("Средняя оценка  A")