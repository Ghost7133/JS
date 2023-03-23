const users_account = [
  { name: "Вася", login: "Vasya123", password: "Vasya" },
  { name: "Петя", login: "Petya123", password: "Petya" },
  { name: "Дима", login: "Dima123", password: "Dima" },
];

let user_asw = {
  login: prompt("login"),
  password: prompt("password"),
};

for (let i = 0; i < users_account.length; i++) {
  if (
    user_asw.login === users_account[i].login &&
    user_asw.password === users_account[i].password
  ) {
    alert("Привет, " + users_account[i].name);
    break;
  } else if (i === users_account.length - 1) {
    alert("Такого пользователя нету :( ");
  }
}
