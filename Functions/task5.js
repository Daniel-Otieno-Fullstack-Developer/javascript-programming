// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 5: Journey Planner
// Run with: node task5.js

const prompt = require("prompt-sync")();

// Small functions, each doing one job
const wholeHours = (totalMinutes) => Math.floor(totalMinutes / 60);
const minutesLeft = (totalMinutes) => totalMinutes % 60;

// This function calls the two above to build its answer
function formatTime(totalMinutes) {
  return `${wholeHours(totalMinutes)} h ${minutesLeft(totalMinutes)} min`;
}

const trip1 = Number(prompt("Nairobi to Nakuru (minutes): "));
const trip2 = Number(prompt("Nakuru to Kisumu (minutes): "));

console.log(`First leg:  ${formatTime(trip1)}`);
console.log(`Second leg: ${formatTime(trip2)}`);
console.log(`Whole trip: ${formatTime(trip1 + trip2)}`);
