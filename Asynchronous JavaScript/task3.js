// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 3: Fee Payment Callbacks
// Run with: node task3.js

const prompt = require("prompt-sync")();

// A pretend payment service: it takes a moment, then calls one of two callbacks
function processPayment(amount, balance, onSuccess, onFailure) {
  console.log(`Processing KES ${amount}...`);
  setTimeout(() => {
    if (amount <= 0) {
      onFailure("amount must be more than zero");
    } else if (amount > balance) {
      onFailure(`only KES ${balance} available`);
    } else {
      onSuccess(balance - amount);
    }
  }, 800);
}

const amount = Number(prompt("Fee payment (KES): "));

processPayment(
  amount,
  20000,
  (newBalance) => console.log(`Success! M-Pesa balance now KES ${newBalance}.`),
  (reason) => console.log(`Payment failed: ${reason}.`),
);

console.log("Waiting for the payment service...");
