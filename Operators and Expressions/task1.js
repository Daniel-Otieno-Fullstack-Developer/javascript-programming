// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 1: Simple Calculator
// Run with: node task1.js

const prompt = require("prompt-sync")();

const a = Number(prompt("First whole number: "));
const b = Number(prompt("Second whole number: "));

// One line for each arithmetic operator
console.log("a + b  =", a + b);
console.log("a - b  =", a - b);
console.log("a * b  =", a * b);
console.log("a / b  =", a / b);
console.log("a % b  =", a % b);                 // remainder
console.log("a ** b =", a ** b);                // a to the power of b
console.log("whole  =", Math.floor(a / b));     // whole-number division
