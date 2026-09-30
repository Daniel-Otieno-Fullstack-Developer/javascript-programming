// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 1: Fee Reminder
// Run with: node task1.js

const prompt = require("prompt-sync")();

const name = prompt("Student name: ");
const balance = Number(prompt("Fee balance (KES): "));

if (balance > 0) {
  console.log(`Dear ${name}, you have a fee balance of KES ${balance.toFixed(2)}.`);
  console.log("Please clear it before the end of the month.");
} else {
  console.log(`Thank you, ${name}. Your fees are fully paid.`);
}
