// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Loops Assignment
// Task 7: Guess the Number
// Run with: node task7.js

const prompt = require("prompt-sync")();

const SECRET = 37;          // fixed so the sample run can be repeated
const MAX_GUESSES = 6;

let won = false;
for (let guessNo = 1; guessNo <= MAX_GUESSES; guessNo++) {
  const guess = Number(prompt(`Guess ${guessNo} (1-100): `));
  if (Number.isNaN(guess)) {
    console.log("  Please type a number.");
    continue;               // skip to the next guess
  }
  if (guess === SECRET) {
    console.log(`  Correct! You got it in ${guessNo} guesses.`);
    won = true;
    break;                  // stop the loop early
  }
  console.log(guess < SECRET ? "  Too low" : "  Too high");
}

if (!won) {
  console.log(`Out of guesses. The number was ${SECRET}.`);
}
