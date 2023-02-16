//Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то
//это мина. Движение танка должно быть представлено как цикл, в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива). При
//передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк повреждён», если это 1-й взрыв,
// и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва танк считается уничтоженным и прекращает движение.
const roadMines = [];
let damage = 0;
let position = 1;

const firstnumber = 2;
const count = 10;
let massive = [];
for (let i = 0; i < count; i++) {
  roadMines.push(Math.floor(Math.random() * firstnumber));
}

point: for (let m = 0; m < 10; m++) {
  console.log("Танк переместился на ", position);

  if (roadMines[m] == 1) {
    if (damage != 1) {console.log("Танк повреждён");}
    position += 1;
    damage += 1;
  } else {
    position += 1;
    continue;
  }
  if (damage == 2) {
    console.log("Танк уничтожен");
    break point;
  }
}
console.log(roadMines);
