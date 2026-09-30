// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 6: Word Tools
// Run with: node task6.js

const prompt = require("prompt-sync")();

const sentence = prompt("Type a sentence: ");
const words = sentence.split(" ");

let longest = "";
for (const word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}
const hashtag = "#" + words.map((w) => w[0].toUpperCase() + w.slice(1)).join("");

console.log(`Number of words: ${words.length}`);
console.log(`Longest word:    ${longest}`);
console.log(`Reversed order:  ${[...words].reverse().join(" ")}`);
console.log(`Joined with -:   ${words.join("-")}`);
console.log(`Hashtag:         ${hashtag}`);

// Count how many times a chosen word appears, ignoring case
const target = prompt("Word to count: ").toLowerCase();
const times = words.filter((w) => w.toLowerCase() === target).length;
console.log(`'${target}' appears ${times} time(s)`);
