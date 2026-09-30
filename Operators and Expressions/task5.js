// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 5: SACCO Savings
// Run with: node task5.js

const prompt = require("prompt-sync")();

const principal = Number(prompt("Amount saved (KES): "));
const rate = Number(prompt("Interest rate per year (%): "));
const years = Number(prompt("Number of years: "));

// Compound interest: A = P x (1 + r / 100) ** n
const amount = principal * (1 + rate / 100) ** years;
const interest = amount - principal;

console.log(`After ${years} years you will have KES ${amount.toFixed(2)}`);
console.log(`Interest earned: KES ${interest.toFixed(2)}`);
