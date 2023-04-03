btn1 = document.querySelector(".btn1")
function alertPrivet () {
alert("privet")}
 btn1.addEventListener("click", alertPrivet)

//  задание 2

 const btn2 = document.querySelector(".btn2");
 const text2 = document.querySelector(".text2");

 function input() {
   text2.value = "test@email.ru";
 }

 btn2.addEventListener("click", input);

// задание 3

 let btn3 = document.querySelector(".btn3");
 const text3 = document.querySelector(".text3");

 function TF() {
   if (text3.value.length > 0) {
     alert("Вы ввели тект инпута");
   } else alert("Вы ничего не ввели в поле")
}
 btn3.addEventListener("click", TF);

//  задание 4

 const btn4 = document.querySelector(".btn4");
 const text4 = document.querySelector(".text4");
 const text41 = document.querySelector(".text41");

 function invert() {
   let textInp1 = text4.value;
   let textInp2 = text41.value;
  text4.value = textInp2;
   text41.value = textInp1;
 }
 btn4.addEventListener("click", invert);

 // задание 5

let btn5 = document.querySelector(".btn5")
let btn51 = document.querySelector(".btn51")

//Заблокирует элемент
function lock() {
	let input = document.getElementById('input');
	input.disabled = true;
}

//Отблокирует элемент
function unlock() {
	let input = document.getElementById('input');
	input.disabled = false;
}

btn5.addEventListener("click", lock)
btn51.addEventListener("click", unlock)

// задание 6

 const div = document.querySelector(".square1");
 let btn6 = document.querySelector(".btn6");

 function hide() {
   if (btn6.innerHTML == "unlock") {
     btn6.innerHTML = "lock";
     div.style.display = "none";
   } else {
     btn6.innerHTML = "unlock";
     div.style.display = "block";
   }
 }
 btn6.addEventListener("click", hide);

// Задание 7

let divgreen = document.querySelector(".squareRedgreen");

function over() {
    divgreen.style.backgroundColor = "green";
}
function out() {
    divgreen.style.backgroundColor = "red";
}

divgreen.addEventListener("mouseover", over);
divgreen.addEventListener("mouseout", out);

// Задание 8

let selall = document.querySelectorAll(".square");
 selall.forEach(element => element.addEventListener("click", () => {
     selall.forEach(element => {
         element.style.backgroundColor = " red"
     })
     element.style.backgroundColor = "green"
 }));