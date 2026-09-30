// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 4: PIN Match
// Run with: node task4.js

const prompt = require("prompt-sync")();

const SAVED_PIN = 4821;                 // stored as a number

const typed = prompt("Enter your PIN: ");   // prompt() gives a string

// === compares value AND type, so a string never equals a number
console.log("Typed value:", typed, "| type:", typeof typed);
console.log("typed === SAVED_PIN:", typed === SAVED_PIN);

// Convert first, then compare
const pin = Number(typed);
console.log("Number(typed) === SAVED_PIN:", pin === SAVED_PIN);
console.log("Four digits long:", typed.length === 4);
console.log("Not the old PIN 0000:", typed !== "0000");
