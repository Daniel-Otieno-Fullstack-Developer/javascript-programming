// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 6: Savings Goal
// Run with: node task6.js

const prompt = require("prompt-sync")();

const goal = Number(prompt("Savings goal (KES): "));
const weekly = Number(prompt("Amount saved each week (KES): "));

let saved = 0;
let weeks = 0;

// We do not know how many weeks it will take, so we use while
while (saved < goal) {
  weeks++;
  saved += weekly;
  console.log(`Week ${weeks}: KES ${saved.toFixed(2)}`);
}

console.log(`Goal reached in ${weeks} weeks.`);
