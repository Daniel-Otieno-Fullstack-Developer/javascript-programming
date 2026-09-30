// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 5: PIN Check
// Run with: node task5.js

const prompt = require("prompt-sync")();

const CORRECT_PIN = "2580";
const MAX_ATTEMPTS = 3;

let attempts = 0;
let pin;

// do...while always runs the body at least once
do {
  pin = prompt("Enter PIN: ");
  attempts++;
  if (pin !== CORRECT_PIN && attempts < MAX_ATTEMPTS) {
    console.log(`Wrong PIN. ${MAX_ATTEMPTS - attempts} attempt(s) left.`);
  }
} while (pin !== CORRECT_PIN && attempts < MAX_ATTEMPTS);

if (pin === CORRECT_PIN) {
  console.log("PIN accepted. Welcome.");
} else {
  console.log("Card blocked. Visit your nearest branch.");
}
