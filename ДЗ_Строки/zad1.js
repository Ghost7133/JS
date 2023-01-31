// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// только половину строки до @
// robin_singh@example.com -> robin...@example.com
"use strict";
let email = "Ghost007192@gmail.com"
 
const center = Math.round((email.slice(0,email.indexOf("@"))).length/2);
console.log("Исходный email адрес - ", email);
console.log("Защищенный email адрес - ",email.slice(0,center)+"..."+email.slice(email.indexOf("@")));