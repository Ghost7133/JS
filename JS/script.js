function zad1() {
  let btn = document.createElement(`button`);
  document.body.append(btn);
  btn.getAttribute(`id`, `btn`);

  function alertPrivet() {
    alert(`Привет!`);
  }

  document.querySelector(`#btn`);
  btn.textContent = `Привет!`;
  btn.addEventListener(`click`, alertPrivet);
}
//////
function zad2() {
  let btn = document.createElement(`button`);
  document.body.append(btn);
  btn.getAttribute(`id`, `btn`);

  let inp = document.createElement(`input`);
  inp.setAttribute(`type`, `text`);
  document.body.append(inp);

  function zapolnit() {
    inp.value = `test@email.ru`;
  }

  document.querySelector(`#btn`);
  btn.textContent = `Заполнить`;
  btn.addEventListener(`click`, zapolnit);
}
//////
function zad3() {
  let btn = document.createElement(`button`);
  document.body.append(btn);
  btn.setAttribute(`id`, `btn`);

  let inp = document.createElement(`input`);
  inp.setAttribute(`type`, `text`);
  inp.setAttribute(`id`, `inp`);
  document.body.append(inp);

  function pick() {
    inp.value.length > 0
      ? alert(`Вы ввели ${inp.value}`)
      : alert("Вы ничего не ввели");
  }

  document.querySelector(`#btn`);
  btn.textContent = `Забрать`;
  btn.addEventListener(`click`, pick);
}
//////
function zad4() {
  let btn = document.createElement(`button`);
  document.body.append(btn);
  btn.setAttribute(`id`, `btn`);

  let inp1 = document.createElement(`input`);
  inp1.setAttribute(`type`, `text`);
  inp1.setAttribute(`id`, `inp1`);
  document.body.append(inp1);

  let inp2 = document.createElement(`input`);
  inp2.setAttribute(`type`, `text`);
  inp2.setAttribute(`id`, `inp2`);
  document.body.append(inp2);

  function revers() {
    let textInp1 = inp1.value;
    let textInp2 = inp2.value;
    inp1.value = textInp2;
    inp2.value = textInp1;
  }

  document.querySelector(`#btn`);
  btn.textContent = `Поменять`;
  btn.addEventListener(`click`, revers);
}
//////
function zad5() {
  let btn1 = document.createElement(`button`);
  document.body.append(btn1);
  btn1.setAttribute(`id`, `btn1`);

  let btn2 = document.createElement(`button`);
  document.body.append(btn2);
  btn2.setAttribute(`id`, `btn2`);

  let inp = document.createElement(`input`);
  inp.setAttribute(`type`, `text`);
  inp.setAttribute(`id`, `inp`);
  document.body.append(inp);

  function disable() {
    console.log(`клик1`);
    inp.disabled = true;
  }

  function enable() {
    console.log(`клик2`);
    inp.disabled = false;
  }

  document.querySelector(`#btn1`);
  btn1.textContent = `Выключить`;
  btn1.addEventListener(`click`, disable);

  document.querySelector(`#btn2`);
  btn2.textContent = `Включить`;
  btn2.addEventListener(`click`, enable);
}
//////
function zad6() {
  let btn = document.createElement(`button`);
  document.body.append(btn);
  btn.setAttribute(`id`, `btn`);

  let squ = document.createElement(`div`);
  document.body.append(squ);

  btn.innerHTML = `Показать`;

  function square() {
    if (btn.innerHTML == `Показать`) {
      squ.style.height = `100px`;
      squ.style.width = `100px`;
      squ.style.backgroundColor = `black`;

      btn.innerHTML = `Спрятать`;
    } else {
      squ.style.removeProperty(`height`, `width`, `backgroundColor`);

      btn.innerHTML = `Показать`;
    }
  }

  btn.addEventListener(`click`, square);
}
//////
function zad7() {
  let squ = document.createElement(`div`);
  document.body.append(squ);
  squ.style.height = `100px`;
  squ.style.width = `100px`;
  squ.style.backgroundColor = `red`;

  function green() {
    squ.style.backgroundColor = `green`;
  }

  function red() {
    squ.style.backgroundColor = `red`;
  }

  squ.addEventListener(`mouseover`, green);
  squ.addEventListener(`mouseout`, red);
}
//////
function zad8() {
  let input = prompt();

  let div = document.createElement(`div`);
  document.body.append(div);

  for (let i = 0; i <= input; i++) {
    let squ = document.createElement(`div`);
    div.append(squ);
    squ.style.height = `100px`;
    squ.style.width = `100px`;
    squ.style.backgroundColor = `red`;
  }
  function revers() {
    div.target.style.backgroundColor = `33green`;
  }
  div.addEventListener(`click`, revers);
}
zad8();
