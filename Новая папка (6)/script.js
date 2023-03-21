// document.querySelector(".btn")
// function alertPrivet () {
// alert("privet")}
// btn.addEventListener("click", alertPrivet)

// задание 2

// const btn1 = document.querySelector(".btn1");
// const text = document.querySelector(".text");

// function input() {
//   text.value = "test@email.ru";
// }

// btn1.addEventListener("click", input);

// задние 3

// let bt1 = document.querySelector(".btn1");
// const text = document.querySelector(".text");

// function TF() {
//   if (text.value.length > 0) {
//     alert("Вы ввели тект инпута");
//   } else alert("Вы ничего не ввели в поле")
// }
// addEventListener("click", TF);

// задание 4

// const btn1 = document.querySelector(".btn1");
// const text = document.querySelector(".text");
// const text1 = document.querySelector(".text1");

// function invert() {
//   let textInp1 = text.value;
//   let textInp2 = text1.value;
//   text.value = textInp2;
//   text1.value = textInp1;
// }
// btn1.addEventListener("click", invert);

// const text = document.querySelector(".text");

// function enable() {
//   console.log("click1");
//   text.setAttribute("disabled", "")

// }
// function disable() {
//   console.log("click2");
//   text.removeAttribute("disabled")
// }
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", enable);

// const btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", disable);

// const div = document.querySelector(".square");
// let btn = document.querySelector(".btn");

// function hide() {
//   if (btn.innerHTML == "unlock") {
//     btn.innerHTML = "lock";
//     div.style.display = "none";
//   } else {
//     btn.innerHTML = "unlock";
//     div.style.display = "block";
//   }
// }
// btn.addEventListener("click", hide);


let divgreen = document.querySelector(".squareRedgreen");

function over() {
    divgreen.style.backgroundColor = "green";
}
function out() {
    divgreen.style.backgroundColor = "red";
}



divgreen.addEventListener("mouseover", over);
divgreen.addEventListener("mouseout", out);
