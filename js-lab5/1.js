const email = [
"1@mail.ru", "2@gmail.com", "3@mail.ru", "4@gmail,com", "5@yandex.ru"
];
const blackList = ["1@mail.ru", "5@yandex.ru"];
let white = [];

function filter(email, blackList) {
  for (let v = 0; v < email.length; v++) {
    for (let z = 0; z < blackList.length; z++) {
      if (email[v] == blackList[z]) {
        break;
      } else if (z == blackList.length - 1) {
        white.push(email[v]);
      }
    }
  }
}
filter(email, blackList);

console.log(white);
