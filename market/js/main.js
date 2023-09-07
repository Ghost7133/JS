const authButton = document.querySelector(`.button-auth`);
const modal = document.querySelector(`.modal-auth`);
const closeModal = document.querySelector(`.close-auth`);
const username = document.getElementById(`login`);
const password = document.getElementById(`password`);
const loginButton = document.querySelector(`.button-login`);
const buttonDiv = document.querySelector(`.buttons`);
const logErr = document.getElementById(`log`);
const passErr = document.getElementById(`pass`);

const logout = document.createElement("button");
const loggedInUser = document.createElement("span");
const container = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", () => {
  event.preventDefault;
});
authButton.addEventListener("click", function () {
  modal.style.display = "block";
  logErr.style.fontSize = "0";
  passErr.style.fontSize = "0";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

loginButton.addEventListener("click", function () {
  if (username.value == "") {
    logErr.style.fontSize = "0.8vh";
    setTimeout(function () {
      logErr.style.fontSize = "0";
    }, 5000);
  }
  if (password.value == "") {
    passErr.style.fontSize = "0.8vh";
    setTimeout(function () {
      passErr.style.fontSize = "0";
    }, 5000);
  }
  if (username.value !== "" && password.value !== "") {
    logout.setAttribute(`class`, `button2 button-secondary`);
    // Создаем текст с логином авторизованного пользователя
    loggedInUser.textContent = `${username.value}   `;
    buttonDiv.append(loggedInUser);

    // Создаем кнопку "ВЫЙТИ"
    logout.textContent = "ВЫЙТИ";
    buttonDiv.append(logout);

    // Скрываем кнопку "ВОЙТИ"
    authButton.style.display = "none";

    // Закрываем модальное окно
    modal.style.display = "none";
    username.value = ``;
    password.value = ``;
  }
});

logout.addEventListener("click", function () {
  // Очищаем поле логина
  loggedInUser.textContent = "";

  // Удаляем кнопку "ВЫЙТИ"
  buttonDiv.removeChild(logout);

  // Показываем кнопку "ВОЙТИ"
  authButton.style.display = "block";
});
