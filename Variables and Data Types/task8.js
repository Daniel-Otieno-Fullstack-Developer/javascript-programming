// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 8: Age Calculator
// Run with: node task8.js

const prompt = require("prompt-sync")();

const name = prompt("Name: ");
const age = Number(prompt("Age in years: "));

const months = age * 12;
const days = age * 365;
const isAdult = age >= 18;       // a comparison gives a boolean

console.log(`${name} is about ${months} months old.`);
console.log(`That is roughly ${days.toLocaleString("en-KE")} days.`);
console.log(`Adult (18 or over): ${isAdult}`);
