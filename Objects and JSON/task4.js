// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 4: Word Frequency
// Run with: node task4.js

const prompt = require("prompt-sync")();

const text = prompt("Type a sentence: ").toLowerCase();

// Each different word becomes a key; its value is the count
const counts = {};
for (let word of text.split(" ")) {
  word = word.replaceAll(".", "").replaceAll(",", "").replaceAll("!", "");
  if (word === "") continue;
  counts[word] = (counts[word] ?? 0) + 1;
}

console.log(`Different words: ${Object.keys(counts).length}`);
for (const word of Object.keys(counts).sort()) {
  console.log(`${word.padEnd(10)} ${"*".repeat(counts[word])} (${counts[word]})`);
}
