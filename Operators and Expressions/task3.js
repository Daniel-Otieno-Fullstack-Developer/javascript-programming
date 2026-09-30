// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 3: Change Machine
// Run with: node task3.js

const prompt = require("prompt-sync")();

let change = Number(prompt("Change to give (KES): "));

// Work from the largest note down: Math.floor counts how many fit,
// % keeps what is still left to give.
const thousands = Math.floor(change / 1000);
change %= 1000;
const fiveHundreds = Math.floor(change / 500);
change %= 500;
const twoHundreds = Math.floor(change / 200);
change %= 200;
const hundreds = Math.floor(change / 100);
change %= 100;
const fifties = Math.floor(change / 50);
change %= 50;
const twenties = Math.floor(change / 20);
change %= 20;
const tens = Math.floor(change / 10);
change %= 10;
const fives = Math.floor(change / 5);
const ones = change % 5;

console.log("1000 notes:", thousands);
console.log(" 500 notes:", fiveHundreds);
console.log(" 200 notes:", twoHundreds);
console.log(" 100 notes:", hundreds);
console.log("  50 notes:", fifties);
console.log("  20 coins:", twenties);
console.log("  10 coins:", tens);
console.log("   5 coins:", fives);
console.log("   1 coins:", ones);
