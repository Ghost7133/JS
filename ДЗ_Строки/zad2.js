// Write a JavaScript function to convert a string into lower camel case
// JavaScript Exercises -> javaScriptExercises
"use strict";
const string = "JavaScript Exercises"

console.log(string[string.indexOf("J")].toLowerCase() + string.slice(1,string.indexOf(" ")) + string.slice(string.indexOf(" ") + 1))