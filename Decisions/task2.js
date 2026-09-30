// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 2: Grade Calculator
// Run with: node task2.js

const prompt = require("prompt-sync")();

const mark = Number(prompt("Enter the mark (0-100): "));

// Reject impossible marks first, then test the highest band first
if (mark < 0 || mark > 100) {
  console.log("Invalid mark. It must be between 0 and 100.");
} else if (mark >= 70) {
  console.log("Grade A - Distinction");
} else if (mark >= 60) {
  console.log("Grade B - Credit");
} else if (mark >= 50) {
  console.log("Grade C - Pass");
} else if (mark >= 40) {
  console.log("Grade D - Referral");
} else {
  console.log("Grade E - Fail");
}
