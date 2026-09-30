// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 3: Weekly Sales
// Run with: node task3.js

const prompt = require("prompt-sync")();

const days = Number(prompt("How many days did the shop open? "));

let total = 0;                     // running total starts at zero
for (let day = 1; day <= days; day++) {
  const sales = Number(prompt(`Sales on day ${day} (KES): `));
  total += sales;
}

console.log(`Total sales:   KES ${total.toFixed(2)}`);
console.log(`Average a day: KES ${(total / days).toFixed(2)}`);
