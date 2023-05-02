//Задание 1// Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3,'a','b','c',4,5].
function zad1() {
  const massive = [1, 2, 3, 4, 5];
  massive.splice(2, 0, `a`, `b`, `c`);
  console.log(massive);
}
//Задание 2// Дан объект {js:'test',jq:'hello',css:'world'}. Получите массив его ключей.
function zad2() {
  object = {
    js: `test`,
    jq: `hello`,
    css: `world`,
  };
  const massive = Object.keys(object);
  console.log(massive);
}
//Задание 3//Проверьте, что строка начинается на 'http://'
function zad3() {
  let str = `http://classroom.google.com`;
  str.slice(0, 7) == `http://` ? console.log(true) : console.log(false);
}
//Задание 4//Проверьте, что строка заканчивается на .html.
function zad4() {
  let str = `http://classroom.google.html`;
  str.slice(-5) == `.html` ? console.log(true) : console.log(false);
}
//Задание 5//Дана строка, например, '123456';. Переверните эту строку (сделайте из нее &#39;654321&#39;) неиспользуя цикл.
function zad5() {
  let str = `123456`;
  console.log(str.split(``).reverse().join(``));
}
//Задание 6//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
function zad6() {
  let str = `var_test_text`;
  console.log(
    "".concat(
      str.slice(0, str.indexOf(`_`)),
      str[str.indexOf(`_`) + 1].toUpperCase(),
      str.slice(str.indexOf(`_`) + 2, str.lastIndexOf(`_`)),
      str[str.lastIndexOf(`_`) + 1].toUpperCase(),
      str.slice(str.lastIndexOf(`_`) + 2)
    )
  );
}
//Задание 7//Дан массив ['я','учу',javascript','!']. Преобразуйте массив в строку 'Я УЧУ JAVASCRIPT!'
function zad7() {
  const massive = ["я", "учу", "javascript", "!"];
  let Answer = massive.join(` `);
  console.log(Answer.toUpperCase());
}
//Задание 8//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
function zad8() {
  let date = new Date(`2025-12-31`);
  console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
}
//Задание 9//Если фамилия находится в конце, то переместить его в начало сonst fullName = 'Иван Иванович Иванов' const surname = 'Иванов'
function zad9() {
  const fullName = "Иванович Иван Иванов";
  const surname = "Иванов";
  fullName.indexOf(surname, fullName.length - surname.length) >= 13
    ? console.log(surname, fullName.slice(0, fullName.length - surname.length))
    : console.log(`Фамилия стоит в начале`);
}
//Задание 10//Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
function zad10() {
  const massive1 = [`1`, `2`, 3, `4`];
  const massive2 = [`1`, `2`, 3, `4`];
  function compare(massive1, massive2) {
    if (massive1.length != massive2.length) return false;
    for (let i = 0; i < massive1.length; i++) {
      if (massive1[i] !== massive2[i]) return false;
    }
    return true;
  }
  console.log(compare(massive1, massive2));
}
//Задание 11//
function zad11() {
  let countries = [
    "Австралия",
    "Австрия",
    "Азербайджан",
    "Албания",
    "Алжир",
    "Ангола",
    "Антильские острова",
    "Аргентина",
    "Армения",
    "Афганистан",
    "Багамские острова",
    "Бангладеш",
    "Барбадос",
    "Бахрейн",
    "Белиз",
    "Белоруссия",
    "Бельгия",
    "Бенин",
    "Болгария",
    "Боливия",
    "Ботсвана",
    "Бразилия",
    "Буркина-Фасо",
    "Бурунди",
    "Бутан",
    "Вануату",
    "Ватикан",
    "Великобритания",
    "Венгрия",
    "Венесуэла",
    "Вьетнам",
    "Габон",
    "Гаити",
    "Гайана",
    "Гамбия",
    "Гана",
    "Гватемала",
    "Гвинея",
    "Гвинея-Бисау",
    "Германия",
    "Голландия",
    "Гондурас",
    "Гонконг",
    "Гренада",
    "Гренландия",
    "Греция",
    "Грузия",
    "Гуам",
    "Дания",
    "Демократическая Республика Конго",
    "Джибути",
    "Доминиканская республика",
    "Египет",
    "Замбия",
    "Западная Сахара",
    "Зимбабве",
    "Израиль",
    "Индия",
    "Индонезия",
    "Иордания",
    "Ирак",
    "Иран",
    "Ирландия",
    "Исландия",
    "Испания",
    "Италия",
    "Йемен",
    "Казахстан",
    "Камбоджа",
    "Камерун",
    "Канада",
    "Катар",
    "Кения",
    "Кипр",
    "Киргизия",
    "Кирибати",
    "Китай",
    "КНДР",
    "Колумбия",
    "Коста-Рика",
    "Куба",
    "Кувейт",
    "Лаос",
    "Латвия",
    "Лесото",
    "Либерия",
    "Ливан",
    "Ливия",
    "Литва",
    "Лихтенштейн",
    "Люксембург",
    "Маврикий",
    "Мавритания",
    "Мадагаскар",
    "Македония",
    "Малави",
    "Малайзия",
    "Мали",
    "Мальдивы",
    "Мальта",
    "Марокко",
    "Мартиника",
    "Мексика",
    "Микронезия",
    "Мозамбик",
    "Молдавия",
    "Монако",
    "Монголия",
    "Мьянма",
    "Намибия",
    "Непал",
    "Нигер",
    "Нигерия",
    "Никарагуа",
    "Новая Зеландия",
    "Новая Каледония",
    "Норвегия",
    "ОАЭ",
    "Оман",
    "Пакистан",
    "Палестина",
    "Панама",
    "Парагвай",
    "Перу",
    "Польша",
    "Португалия",
    "Пуэрто-Рико",
    "Республика Конго",
    "Республика Корея",
    "Россия",
    "Руанда",
    "Румыния",
    "Сальвадор",
    "Сан-Марино",
    "Саудовская Аравия",
    "Свазиленд",
    "Сенегал",
    "Сент-Люсия",
    "Сербия",
    "Сингапур",
    "Сирия",
    "Словакия",
    "Словения",
    "Соломоновы острова",
    "Сомали",
    "Судан",
    "Суринам",
    "США",
    "Сьерра-Леоне",
    "Таджикистан",
    "Таиланд",
    "Тайвань",
    "Танзания",
    "Того",
    "Тонга",
    "Тунис",
    "Туркменистан",
    "Турция",
    "Уганда",
    "Узбекистан",
    "Украина",
    "Уругвай",
    "Фиджи",
    "Филиппины",
    "Финляндия",
    "Франция",
    "Французская Гвиана",
    "Хорватия",
    "Центральноафриканская Республика",
    "Чад",
    "Черногория",
    "Чехия",
    "Чили",
    "Швейцария",
    "Швеция",
    "Шри-Ланка",
    "Эквадор",
    "Экваториальная Гвинея",
    "Эритрея",
    "Эстония",
    "Эфиопия",
    "Ямайка",
    "Япония",
  ];
  let input = document.getElementById("country");
  let list = document.getElementById("list");

  input.addEventListener("keyup", Rend);
  list.addEventListener("click", Word);

  function Word(event) {
    input.value = event.target.textContent;
    event.target.onclick = Rend;
  }

  function Rend() {
    let znachenie = input.value.trim().toLowerCase();
    console.log(znachenie);
    let words = countries.filter(function (item) {
      return item.toLowerCase().indexOf(znachenie) == 0;
    });
    list.innerHTML = getHtml(words);
  }

  function getHtml(words) {
    let html = "";
    for (let i = 0; i < words.length; i++) {
      html += `<div>${words[i]}</div>`;
    }
    return html;
  }
}
zad11();
