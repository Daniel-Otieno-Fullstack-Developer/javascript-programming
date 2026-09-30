// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 6: Type Detective
// Run with: node task6.js

const prompt = require("prompt-sync")();

const text = prompt("Type a whole number: ");
console.log(`You typed ${text} and its type is ${typeof text}`);

// The same value converted to other types
const asNumber = Number(text);
const asBoolean = Boolean(asNumber);    // 0 becomes false, other numbers true
const backToText = String(asNumber);

console.log("As a number: ", asNumber, typeof asNumber);
console.log("As a boolean:", asBoolean, typeof asBoolean);
console.log("Back to text:", backToText, typeof backToText);
console.log("Doubled as a number:", asNumber * 2);
console.log("Joined as text:     ", text + text);
