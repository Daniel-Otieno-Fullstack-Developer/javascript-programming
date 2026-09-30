// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 4: Largest of Three
// Run with: node task4.js

const prompt = require("prompt-sync")();

const a = Number(prompt("First number: "));
const b = Number(prompt("Second number: "));
const c = Number(prompt("Third number: "));

let largest;
// Compare each number with the other two (without Math.max)
if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log(`The largest number is ${largest}`);
