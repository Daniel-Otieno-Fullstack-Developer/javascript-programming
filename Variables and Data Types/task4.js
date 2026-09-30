// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 4: M-Pesa Balance
// Run with: node task4.js

const prompt = require("prompt-sync")();

const TRANSACTION_COST = 13;

const balance = Number(prompt("Current balance (KES): "));
const amount = Number(prompt("Amount to send (KES): "));

const newBalance = balance - amount - TRANSACTION_COST;

// toFixed(2) shows exactly two decimal places
console.log(`Amount sent:      KES ${amount.toFixed(2)}`);
console.log(`Transaction cost: KES ${TRANSACTION_COST.toFixed(2)}`);
console.log(`New balance:      KES ${newBalance.toFixed(2)}`);
