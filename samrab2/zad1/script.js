const users = [
  {
    _name: "Adolf",
    login: "hilterov1945",
    password: "zipfile",
  },
  {
    _name: "Misha",
    login: "Misha2284890",
    password: "2284890",
  },
  {
    _name: "Nikita",
    login: "Mr.Twister",
    password: "Lovebs",
  },
  {
    _name: "Oleg",
    login: "Oleggo",
    password: "password",
  },
];
let userLogin = prompt("Введите ваш логин");
let userPassword = prompt("Введите пароль");

function auth(user, userlogin, userpassword) {
  for (let i = 0; i < users.length; i++) {
    if (userLogin === users[i].login && userPassword === users[i].password) {
      alert(`Привет ${users[i]._name}`);
      break;
    } else if (i === users.length - 1) alert(`Такого пользователя нет`);
  }
}
auth(users, userLogin, userPassword);
