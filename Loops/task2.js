// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 2: Times Table
// Run with: node task2.js

const prompt = require("prompt-sync")();

const number = Number(prompt("Which times table? "));

for (let i = 1; i <= 12; i++) {
  const answer = number * i;
  console.log(`${number} x ${String(i).padStart(2)} = ${String(answer).padStart(3)}`);
}
