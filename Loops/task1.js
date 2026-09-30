// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 1: Countdown
// Run with: node task1.js

const prompt = require("prompt-sync")();

const start = Number(prompt("Count down from: "));

// Build the line in a string, then print it once
let line = "";
for (let n = start; n >= 1; n--) {
  line += `${n} `;
}
console.log(line);
console.log("Time up! Pens down.");

let evens = "";
for (let n = 2; n <= start; n += 2) {
  evens += `${n} `;
}
console.log(`Even numbers up to ${start}: ${evens}`);
