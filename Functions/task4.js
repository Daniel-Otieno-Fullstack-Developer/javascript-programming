// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 4: Fare With Discount
// Run with: node task4.js

const prompt = require("prompt-sync")();

// Default parameters are used when an argument is left out
function fareToPay(fare, discount = 0, isStudent = false) {
  let amount = fare - (fare * discount) / 100;
  if (isStudent) {
    amount -= 20;
  }
  return amount;
}

const fare = Number(prompt("Normal fare (KES): "));

console.log(`Full fare:          KES ${fareToPay(fare)}`);
console.log(`10% discount:       KES ${fareToPay(fare, 10)}`);
console.log(`Student fare:       KES ${fareToPay(fare, 0, true)}`);
console.log(`Student + 10% off:  KES ${fareToPay(fare, 10, true)}`);
