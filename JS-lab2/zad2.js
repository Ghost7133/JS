"use strict";
const _name = "Kirill";
const surname = "YuDin";

const nameConvert = _name[0].toUpperCase() + _name.slice(1).toLowerCase();
const surnameConvert =
  surname[0].toUpperCase() + surname.slice(1).toLowerCase();
console.log(nameConvert);
console.log(surnameConvert);

_name === nameConvert
  ? surname === surnameConvert
    ? console.log("Имя и фамилия осталось без изменений")
    : console.log("Фамилия была преобразована")
  : console.log("Имя было преобразовано");
