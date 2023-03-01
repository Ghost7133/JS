//Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
const emails = [
    "battoufeummipoi-5478@yopmail.com",
    "quemisseppole-1126@yopmail.com",
    "wahikotrepo-1057@yopmail.com",
    "vokequautraunne-9139@yopmail.com",
    "quarunneppohu-3552@yopmail.com",
];
const blacklist = [
    "wahikotrepo-1057@yopmail.com",
    "battoufeummipoi-5478@yopmail.com"
];
function filter(validEmails = [], invalidEmails = []) {
    const filteredEmails = [];
    for (let item of validEmails) {
        if (!invalidEmails.includes(item)) {
            filteredEmails.push(item);
        }
    }
    return filteredEmails;
}
console.log(filter(emails,blacklist));