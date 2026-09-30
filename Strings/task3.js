// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 3: Letter Counter
// Run with: node task3.js

const prompt = require("prompt-sync")();

const sentence = prompt("Type a sentence: ");

let vowels = 0;
let consonants = 0;
let digits = 0;
let spaces = 0;

for (const ch of sentence) {
  const lower = ch.toLowerCase();
  if ("aeiou".includes(lower)) {
    vowels++;
  } else if (lower >= "a" && lower <= "z") {
    consonants++;
  } else if (ch >= "0" && ch <= "9") {
    digits++;
  } else if (ch === " ") {
    spaces++;
  }
}

console.log(`Characters: ${sentence.length}`);
console.log(`Vowels:     ${vowels}`);
console.log(`Consonants: ${consonants}`);
console.log(`Digits:     ${digits}`);
console.log(`Spaces:     ${spaces}`);
console.log(`Words:      ${sentence.trim().split(" ").filter((w) => w).length}`);
