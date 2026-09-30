// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 3: Weekly Sales Report
// Run with: node task3.js

const prompt = require("prompt-sync")();

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const sales = [];

for (const day of days) {
  sales.push(Number(prompt(`Sales on ${day} (KES): `)));
}

// reduce adds every value into one total
const total = sales.reduce((sum, amount) => sum + amount, 0);
const best = Math.max(...sales);
const worst = Math.min(...sales);

console.log();
console.log(`Total sales:   KES ${total.toFixed(2)}`);
console.log(`Average a day: KES ${(total / sales.length).toFixed(2)}`);
console.log(`Best day:      ${days[sales.indexOf(best)]} (KES ${best.toFixed(2)})`);
console.log(`Worst day:     ${days[sales.indexOf(worst)]} (KES ${worst.toFixed(2)})`);
