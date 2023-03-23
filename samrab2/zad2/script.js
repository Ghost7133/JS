function ugadayka() {
  let diopazon = prompt(
    "Введите максимальное число для диапозона от 0 до вашего числа"
  );
  let vvod = Math.floor(Math.random() * diopazon);
  let random = Math.floor(Math.random() * diopazon);
  let number = Math.floor(Math.random() * diopazon);

  while (
    (vvod = prompt(
      `Попробуйте угадать число в диапозона от 0 до ${diopazon}`
    )) !== null
  ) {
    if ((number = +vvod) !== parseFloat(vvod) || !Number.isFinite(number))
      alert(`Введите число`);
    else if (number > random) alert(`Меньше`);
    else if (number < random) alert(`Больше`);
    else if (number == random) {
      alert(`Правильно`);
      break;
    }
  }
}
ugadayka();
