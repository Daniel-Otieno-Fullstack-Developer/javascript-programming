// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 1: Name Formatter
// Run with: node task1.js

const prompt = require("prompt-sync")();

const fullName = prompt("Enter your full name: ");

// Turn "  wanjiru   KAMAU " into "Wanjiru Kamau"
const words = fullName.trim().toLowerCase().split(" ").filter((w) => w !== "");
const clean = words.map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
const initials = words.map((w) => w[0].toUpperCase() + ".").join("");

console.log(`Cleaned:    ${clean}`);
console.log(`Upper case: ${clean.toUpperCase()}`);
console.log(`Lower case: ${clean.toLowerCase()}`);
console.log(`Letters:    ${clean.replaceAll(" ", "").length}`);
console.log(`Initials:   ${initials}`);
