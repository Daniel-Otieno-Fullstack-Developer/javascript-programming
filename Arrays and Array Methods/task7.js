// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 7: Top Marks
// Run with: node task7.js

const prompt = require("prompt-sync")();

const count = Number(prompt("How many marks? "));
const marks = [];
for (let i = 1; i <= count; i++) {
  marks.push(Number(prompt(`Mark ${i}: `)));
}

// sort() changes the array, so sort a copy made with [...marks].
// (a, b) => b - a sorts numbers from highest to lowest.
const ranked = [...marks].sort((a, b) => b - a);

console.log(`Marks as entered: ${marks.join(", ")}`);
console.log(`Highest first:    ${ranked.join(", ")}`);
console.log(`Top three:        ${ranked.slice(0, 3).join(", ")}`);
console.log(`Lowest mark:      ${ranked[ranked.length - 1]}`);
