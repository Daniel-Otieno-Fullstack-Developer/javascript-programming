// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 4: Class Average
// Run with: node task4.js

const prompt = require("prompt-sync")();

let total = 0;
let count = 0;

let mark = Number(prompt("Enter a mark (-1 to finish): "));

// -1 is the sentinel: the signal to stop
while (mark !== -1) {
  total += mark;
  count++;
  mark = Number(prompt("Enter a mark (-1 to finish): "));
}

if (count > 0) {
  console.log(`Marks entered: ${count}`);
  console.log(`Total: ${total}`);
  console.log(`Average: ${(total / count).toFixed(1)}`);
} else {
  console.log("No marks entered.");
}
