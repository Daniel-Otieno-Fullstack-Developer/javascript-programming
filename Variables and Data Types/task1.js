// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 1: Hello, Delhi College
// Run with: node task1.js

const prompt = require("prompt-sync")();

// prompt() always gives back text (a string)
const name = prompt("What is your name? ");
const course = prompt("Which course are you taking? ");

console.log();
console.log(`Hello, ${name}!`);
console.log("Welcome to Delhi College, Eastleigh.");
console.log(`Course: ${course}`);
