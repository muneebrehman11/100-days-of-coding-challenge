"use strict";
// 🚀 100 Days of Coding Challenge 🚀
// Day-01:
Object.defineProperty(exports, "__esModule", { value: true });
// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Explain & TIP: Simply install the following things via any browser of your choice.
// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
// Explain & TIP: First, make a variable to save a name. Then, use this name to say hello. Variables keep data you can use later. 
let MyName = "Muneeb ur rehman";
console.log(`Hello ${MyName}, would you like to learn some TypeScript today?`);
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.
let PersonalName = "Muneeb ur rehman";
console.log(PersonalName.toLocaleLowerCase()); // lowercase
console.log(PersonalName.toLocaleUpperCase()); // uppercase
console.log(PersonalName.charAt(0).toLocaleUpperCase() + PersonalName.slice(1, 10).toLocaleLowerCase() + PersonalName.charAt(10).toLocaleUpperCase() + PersonalName.slice(11).toLocaleLowerCase()); // titlecase
