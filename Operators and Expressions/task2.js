// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 2: Journey Time
// Run with: node task2.js

const prompt = require("prompt-sync")();

const MINUTES_PER_HOUR = 60;

const minutes = Number(prompt("Journey time in minutes: "));

// Math.floor gives the whole hours, % gives the minutes left over
const hours = Math.floor(minutes / MINUTES_PER_HOUR);
const leftOver = minutes % MINUTES_PER_HOUR;

console.log(`${minutes} minutes is ${hours} hours and ${leftOver} minutes.`);
