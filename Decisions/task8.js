// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Decisions Assignment
// Task 8: Contact Checker
// Run with: node task8.js

const prompt = require("prompt-sync")();

const name = prompt("Full name: ");
const phone = prompt("Phone number: ");
const email = prompt("Email (press Enter to skip): ");

// An empty string is falsy, so if (name) is false when nothing was typed
if (!name) {
  console.log("Name is required.");
} else if (!phone) {
  console.log(`Sorry ${name}, a phone number is required.`);
} else {
  console.log(`Saved: ${name}, ${phone}`);
  // || gives a default when the first value is falsy
  const contactEmail = email || "no email given";
  console.log(`Email: ${contactEmail}`);
}
