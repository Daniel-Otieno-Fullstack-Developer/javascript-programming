// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 2: Grade Function
// Run with: node task2.js

const prompt = require("prompt-sync")();

// Return the Delhi College grade letter for a mark out of 100
function getGrade(mark) {
  if (mark >= 70) return "A";
  if (mark >= 60) return "B";
  if (mark >= 50) return "C";
  if (mark >= 40) return "D";
  return "E";
}

for (let student = 1; student <= 3; student++) {
  const mark = Number(prompt(`Mark for student ${student}: `));
  console.log(`Grade: ${getGrade(mark)}`);
}
