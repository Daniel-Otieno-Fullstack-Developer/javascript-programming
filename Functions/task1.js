// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 1: Welcome Banner
// Run with: node task1.js

const prompt = require("prompt-sync")();

// Print a title centred between two lines of = signs
function printBanner(title, width) {
  const left = Math.floor((width - title.length) / 2);
  console.log("=".repeat(width));
  console.log(" ".repeat(left) + title);
  console.log("=".repeat(width));
}

const course = prompt("Course name: ");
printBanner("DELHI COLLEGE", 30);
printBanner(course, 30);
