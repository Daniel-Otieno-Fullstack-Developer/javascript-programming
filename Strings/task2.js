// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 2: Username Generator
// Run with: node task2.js

const prompt = require("prompt-sync")();

const first = prompt("First name: ").trim().toLowerCase();
const last = prompt("Last name: ").trim().toLowerCase();
const year = prompt("Year of admission: ").trim();

// first three letters of the first name + surname + last two digits of the year
const username = first.slice(0, 3) + last + year.slice(-2);
const email = `${username}@delhicollege.co.ke`;

console.log(`Username: ${username}`);
console.log(`Email:    ${email}`);
