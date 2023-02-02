const Name = "kIrILL";
const Surname = "YuDIn";

const NameConvert =
  Name.slice(0, 1).toUpperCase() + Name.slice(1).toLowerCase();
const SurnameConvert =
  Surname.slice(0, 1).toUpperCase() + Surname.slice(1).toLowerCase();
console.log(NameConvert);
console.log(SurnameConvert);

Name === NameConvert ? Surname === SurnameConvert ? console.log("Имя осталось без изменений") : console.log("Имя было преобразовано") : console.log("Имя было преобразовано")