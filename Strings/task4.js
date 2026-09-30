// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 4: Palindrome Checker
// Run with: node task4.js

const prompt = require("prompt-sync")();

// True if the text reads the same backwards, ignoring case, spaces and punctuation
function isPalindrome(text) {
  let cleaned = "";
  for (const ch of text.toLowerCase()) {
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      cleaned += ch;
    }
  }
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

for (let i = 0; i < 3; i++) {
  const word = prompt("Word or phrase: ");
  const verdict = isPalindrome(word) ? "is" : "is not";
  console.log(`"${word}" ${verdict} a palindrome.`);
}
