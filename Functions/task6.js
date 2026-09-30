// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 6: Valid Mark Reader
// Run with: node task6.js

const prompt = require("prompt-sync")();

// Keep asking until the user types a mark from 0 to 100
function readMark(question) {
  let mark = Number(prompt(question));
  while (Number.isNaN(mark) || mark < 0 || mark > 100) {
    console.log("  Marks must be numbers from 0 to 100.");
    mark = Number(prompt(question));
  }
  return mark;
}

const average = (a, b, c) => (a + b + c) / 3;

const cat = readMark("CAT mark: ");
const assignment = readMark("Assignment mark: ");
const exam = readMark("Exam mark: ");
console.log(`Average: ${average(cat, assignment, exam).toFixed(1)}`);
