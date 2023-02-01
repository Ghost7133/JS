// Write a JavaScript function to convert a string into lower camel case
// JavaScript Exercises -> javaScriptExercises
"use strict";
const string = "JavaScript еxercises"

console.log(string.slice(0,string.indexOf(" ")) + (string.slice(string.indexOf(" ")+1,string.indexOf(" ")+2).toUpperCase()) + string.slice(string.indexOf(" ") + 2))
