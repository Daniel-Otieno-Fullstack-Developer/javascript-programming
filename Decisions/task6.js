// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 6: M-Pesa Withdrawal
// Run with: node task6.js

const prompt = require("prompt-sync")();

const CORRECT_PIN = "4821";
let balance = 7350;

const pin = prompt("Enter your PIN: ");

if (pin === CORRECT_PIN) {
  const amount = Number(prompt("Amount to withdraw (KES): "));
  // Simplified fee table for this task
  let fee;
  if (amount <= 2500) {
    fee = 29;
  } else if (amount <= 5000) {
    fee = 52;
  } else {
    fee = 69;
  }

  if (amount + fee <= balance) {
    balance -= amount + fee;
    console.log(`Withdrawn KES ${amount.toFixed(2)}. Fee KES ${fee}.`);
    console.log(`New balance: KES ${balance.toFixed(2)}`);
  } else {
    console.log("Failed. You do not have enough money for this withdrawal.");
  }
} else {
  console.log("Wrong PIN. Transaction cancelled.");
}
