(function () {
  const massiveWork = [];
  //Некоторые элементы для отрисовки

  //Контейнер для всех дел//
  let allDivText = document.createElement(`div`);
  document.body.append(allDivText);

  allDivText.style.backgroundColor = `#4F4F4F`;
  allDivText.style.color = `white`;

  //Основной текст//
  let h1Text = document.createElement(`h1`);
  h1Text.textContent = `Мама`;
  allDivText.append(h1Text);

  //Общее поле ввода//
  //Текст//
  //Поле ввода дел//
  let inpText = document.createElement(`h3`);
  inpText.textContent = `Дело`;
  inpText.style.width = `208px`;
  inpText.style.margin = `0`;
  inpText.style.float = `left`;
  inpText.style.textAlign = `center`;
  allDivText.append(inpText);

  //Поле ввода часа//
  let hourText = document.createElement(`h3`);
  hourText.textContent = `Часы`;
  hourText.style.width = `177px`;
  hourText.style.margin = `0`;
  hourText.style.float = `left`;
  hourText.style.textAlign = `center`;
  allDivText.append(hourText);

  //Поле ввода минут
  let minuteText = document.createElement(`h3`);
  minuteText.textContent = `Минуты`;
  minuteText.style.width = `177px`;
  minuteText.style.margin = `0`;
  minuteText.style.float = `left`;
  minuteText.style.textAlign = `center`;
  allDivText.append(minuteText);

  //Поле ввода секунд
  let secondsText = document.createElement(`h3`);
  secondsText.textContent = `Секунды`;
  secondsText.style.textAlign = `left`;
  allDivText.append(secondsText);

  //Ввод//
  //Поле ввода дел//
  let inp = document.createElement(`input`);
  inp.value = `Введите дело`;
  inp.style.width = `200px`;
  inp.style.textAlign = `left`;
  allDivText.append(inp);

  //Поле ввода часа//
  let inpHour = document.createElement(`input`);
  inpHour.value = `0`;
  allDivText.append(inpHour);

  //Поле ввода минут
  let inpMinute = document.createElement(`input`);
  inpMinute.value = `0`;
  allDivText.append(inpMinute);

  //Поле ввода секунд
  let inpSecond = document.createElement(`input`);
  inpSecond.value = `0`;
  allDivText.append(inpSecond);

  //Кнопка//
  let btn = document.createElement(`button`);
  allDivText.append(btn);
  btn.setAttribute(`id`, `btn`);
  //Функция создания дел//

  function createNewElement() {
    if (inp.value.length > 0) {
      if (!massiveWork.includes(inp.value)) {
        massiveWork.push(inp.value);
        console.log(massiveWork);

        //Счет времени
        let time =
          parseInt(inpHour.value) * 3600 +
          parseInt(inpMinute.value) * 60 +
          parseInt(inpSecond.value);

        //Отрисовка элементов

        //Контейнер для дел//
        let divText = document.createElement(`div`);
        allDivText.append(divText);

        //Текст дела//
        let text = document.createElement(`p`);
        divText.append(text);
        text.textContent =
          inp.value +
          " " +
          ` after ${inpHour.value} Hour ${inpMinute.value} Minute ${inpSecond.value} seconds`;

        //Время на исполнение
        const func = () => {
          alert(`${inp.value} время вышло`);
          divText.style.color = `red`;
        };
        setTimeout(func, time * 1000);

        //Кнопка выполнить//
        let confirmButton = document.createElement(`button`);
        confirmButton.setAttribute(`id`, `confirmButton`);
        divText.append(confirmButton);

        //Кнопка удалить//
        let cancelButton = document.createElement(`button`);
        cancelButton.setAttribute(`id`, `cancelButton`);
        divText.append(cancelButton);

        //Функционал//

        //Функция подтвердить//
        function confirms() {
          console.log(`Выполнено`);
          text.style.textDecoration = `line-through`;
          text.style.color = `green`;
          text.style.backgroundColor = `blacks`;
        }

        //Функция отменить//
        function cancel() {
          console.log(`Удалить`);
          if (confirm("Вы уверены что хотите удалить дело ?")) {
            divText.removeChild(text);
            divText.removeChild(confirmButton);
            divText.removeChild(cancelButton);
            massiveWork.splice(massiveWork.indexOf(text.textContent), 1);
          }
        }

        //Прослушка на подтверждение//
        document.querySelector(`#confirmbutton`);
        confirmButton.textContent = `✔`;
        confirmButton.addEventListener(`click`, confirms);

        //Прослушка отмена//
        document.querySelector(`#cancelButton`);
        cancelButton.textContent = `×`;
        cancelButton.addEventListener(`click`, cancel);
      } else alert(`Такое дело уже есть`);
    } else {
      alert(`Вы ничего не ввели`);
    }
  }

  //Кнопка добавления дел
  document.querySelector(`#btn`);
  btn.textContent = `Добавить`;
  btn.addEventListener(`click`, createNewElement);
})();

