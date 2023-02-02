const password = "123456";

password.length > 4
  ? password.includes("_") || password.includes("-")
    ? console.log("Пароль надежный")
    : console.log("Пароль недостаточно надежный")
  : console.log("Пароль недостаточно надежный");
