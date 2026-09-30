// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 5: Leap Year Checker
// Run with: node task5.js

const prompt = require("prompt-sync")();

const year = Number(prompt("Enter a year: "));

// A leap year divides by 4, except century years, which must divide by 400
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// The ternary operator picks one of two values
const days = isLeap ? 29 : 28;
const verdict = isLeap ? "is a leap year" : "is not a leap year";

console.log(`${year} ${verdict}. February has ${days} days.`);
