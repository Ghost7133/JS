const massiveOfStudents = [
  {
    Имя: `none`,
    Фамилия: `none`,
    Отчество: `none`,
    Дата_Рождения: `none`,
    Год_Начала_Обучения: `none`,
    Факультет: `none`,
  },
  {
    Имя: `Миша`,
    Фамилия: `Бирюков`,
    Отчество: `Павлович`,
    Дата_Рождения: new Date(2005, 08, 03),
    Год_Начала_Обучения: `2021`,
    Факультет: `ИСиП(п)2/3`,
  },
  {
    Imya: `Юдин`,
    Familia: `Кирилл`,
    Otchestvo: `Игоревчи`,
    DataRozdenia: new Date(2005, 11, 29),
    godNachalaObychenia: `2021`,
    Facultet: `ИСиП(п)2/3`,
  },
];
date = new Date();
console.log(date);


function tableRend() {
  let table = document.createElement(`table`);
  return table;
}
function tHeadRend() {
  let thead = document.createElement(`thead`);
  return thead;
}
function tBodyRend() {
  let tbody = document.createElement(`tbody`);
  return tbody;
}
function trHeadRend() {
  let tr = document.createElement(`tr`);
  tr.className = `Head`;
  return tr;
}
function trbodyRend() {
  let tr = document.createElement(`tr`);
  tr.className = `body`;
  return tr;
}
function thRend() {
  let th = document.createElement(`th`);
  th.style.border = `solid black`;
  th.style.borderLeftWidth = `0`;
  return th;
}
function tdRend() {
  let td = document.createElement(`td`);
  td.style.border = `solid black`;
  td.style.borderLeftWidth = `0`;
  return td;
}

let div = document.querySelector(`#allDiv`);
let tableRendering = tableRend();
let tHeadRendering = tHeadRend();
let tBodyRendering = tBodyRend();
let trHeadRendering = trHeadRend();

div.append(tableRendering);

tableRendering.append(tHeadRendering);
tableRendering.append(tBodyRendering);
tHeadRendering.append(trHeadRendering);

const keys = Object.keys(massiveOfStudents[0]);
for (let i = 0; i < keys.length; i++) {
  let thRendering = thRend();
  trHeadRendering.append(thRendering);
  thRendering.textContent = keys[i];
}
for (let i = 1; i < massiveOfStudents.length; i++) {
  const value = Object.values(massiveOfStudents[i]);
  let trBodyRendering = trbodyRend();
  tBodyRendering.append(trBodyRendering);
  for (let j = 0; j < value.length; j++) {
    let tdRendering = tdRend();
    trBodyRendering.append(tdRendering);
    if (j == 3) {
      date = value[j];
      tdRendering.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}  `
    } else tdRendering.textContent = value[j];
  }
}
