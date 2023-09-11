const users = [
  {
    login: "login",
    password: "password",
    status: "true",
  },
];

const iconLogin = document.querySelector(".icon");
const modalAuth = document.querySelector(".modal-auth");
const modalOut = document.querySelector(".close-auth");
const loginModal = document.getElementById("login");
const passwordModal = document.getElementById("password");
const loginForm = document.getElementById("logInForm");
const userLoged = document.querySelector(".iconlogin");
const exitButton = document.querySelector(".exit");

iconLogin.addEventListener("click", (event) => {
  modalAuth.style.display = "flex";
  event.preventDefault();
});

modalOut.addEventListener("click", () => {
  modalAuth.style.display = "none";
});

loginForm.addEventListener("submit", () => {
  event.preventDefault();
  users.push({ login: loginModal.value, password: passwordModal.value });
  localStorage.setItem("user", JSON.stringify(users));
  console.log(userLoged);
  userLoged.textContent = loginModal.value;
  modalAuth.style.display = "none";
  exitButton.style.display = "flex";
  localStorage.setItem("status", JSON.stringify("true"));
});

document.addEventListener("DOMContentLoaded", () => {
  const parse = JSON.parse(localStorage.getItem(`status`));
  if (parse == "true") {
    userLoged.textContent = JSON.parse(localStorage.getItem(`user`))[1].login;
    exitButton.style.display = "flex";
  } else {
    userLoged.textContent = "";
    exitButton.style.display = "none";
  }
});

exitButton.addEventListener("click", () => {
  localStorage.setItem("status", "false");
  userLoged.textContent = "";
  console.log(JSON.parse(localStorage.getItem(`status`)));
  exitButton.style.display = "none";
});
