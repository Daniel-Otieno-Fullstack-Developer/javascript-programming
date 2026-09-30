// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 3: Peak Hour Fare
// Run with: node task3.js

const prompt = require("prompt-sync")();

const PEAK_FARE = 100;
const OFF_PEAK_FARE = 70;

const hour = Number(prompt("Hour of travel (0-23): "));
const answer = prompt("Student with ID? (yes/no): ");
const isStudent = answer === "yes";

let fare;
// Morning peak is 6 to 9, evening peak is 17 to 19
if ((hour >= 6 && hour <= 9) || (hour >= 17 && hour <= 19)) {
  fare = PEAK_FARE;
  console.log("Peak hour fare");
} else {
  fare = OFF_PEAK_FARE;
  console.log("Off-peak fare");
}

if (isStudent) {
  fare -= 20;
  console.log("Student discount of KES 20 applied");
}

console.log(`Fare to pay: KES ${fare}`);
