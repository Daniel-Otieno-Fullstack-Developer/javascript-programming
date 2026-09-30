// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 3: Matatu Fare
// Run with: node task3.js

const prompt = require("prompt-sync")();

const WEEKS_IN_MONTH = 4;

// Number() turns the typed text into a number we can multiply
const fare = Number(prompt("Fare for one trip (KES): "));
const trips = Number(prompt("Trips per week: "));

const weeklyCost = fare * trips;
const monthlyCost = weeklyCost * WEEKS_IN_MONTH;

console.log(`Weekly cost:  KES ${weeklyCost}`);
console.log(`Monthly cost: KES ${monthlyCost}`);
