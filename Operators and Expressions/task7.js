// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 7: Running Balance
// Run with: node task7.js

const prompt = require("prompt-sync")();

const WITHDRAWAL_FEE = 29;

let balance = Number(prompt("Opening balance (KES): "));
const deposit = Number(prompt("Deposit (KES): "));
const withdrawal = Number(prompt("Withdrawal (KES): "));
let transactions = 0;

balance += deposit;                 // same as balance = balance + deposit
transactions++;
console.log(`After deposit:    KES ${balance.toFixed(2)}`);

balance -= withdrawal;
transactions++;
console.log(`After withdrawal: KES ${balance.toFixed(2)}`);

balance -= WITHDRAWAL_FEE;
console.log(`After the fee:    KES ${balance.toFixed(2)}`);
console.log(`Transactions:     ${transactions}`);
