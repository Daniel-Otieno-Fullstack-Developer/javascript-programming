// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 7: Password Strength
// Run with: node task7.js

const prompt = require("prompt-sync")();

// Return a list of the rules the password breaks
function checkPassword(password) {
  const problems = [];
  if (password.length < 8) problems.push("at least 8 characters");
  if (password === password.toLowerCase()) problems.push("a capital letter");
  if (password === password.toUpperCase()) problems.push("a small letter");

  let hasDigit = false;
  for (const ch of password) {
    if (ch >= "0" && ch <= "9") hasDigit = true;
  }
  if (!hasDigit) problems.push("a digit");
  return problems;
}

while (true) {
  const password = prompt("Choose a password: ");
  const missing = checkPassword(password);
  if (missing.length === 0) {
    console.log("Strong password. Account created.");
    break;
  }
  console.log(`Weak. It needs ${missing.join(", ")}.`);
}
