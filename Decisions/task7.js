// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 7: Student Portal Menu
// Run with: node task7.js

const prompt = require("prompt-sync")();

console.log("DELHI COLLEGE STUDENT PORTAL");
console.log("1. View timetable");
console.log("2. Check fee balance");
console.log("3. Exam results");
console.log("4. Exit");
const choice = prompt("Choose an option: ");

// switch compares choice with each case using ===
switch (choice) {
  case "1":
    console.log("Monday: JavaScript 8:00 - 10:00, Web Design 10:30 - 12:30");
    break;
  case "2":
    console.log("Your fee balance is KES 4,500.00");
    break;
  case "3":
    console.log("Results will be released on Friday.");
    break;
  case "4":
  case "q":
  case "Q":
    console.log("Goodbye!");
    break;
  default:
    console.log("Invalid choice. Please enter 1 to 4.");
}
