// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 8: Multiplication Grid
// Run with: node task8.js

const prompt = require("prompt-sync")();

const size = Number(prompt("Grid size: "));

// Heading row
let heading = "   |";
for (let col = 1; col <= size; col++) {
  heading += String(col).padStart(4);
}
console.log(heading);
console.log("---+" + "-".repeat(4 * size));

// The outer loop picks the row, the inner loop fills in each column
for (let row = 1; row <= size; row++) {
  let line = `${String(row).padStart(2)} |`;
  for (let col = 1; col <= size; col++) {
    line += String(row * col).padStart(4);
  }
  console.log(line);
}
