// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 6: Search the Register
// Run with: node task6.js

const prompt = require("prompt-sync")();

const admissionNumbers = ["DC101", "DC104", "DC107", "DC112", "DC118", "DC125"];
const names = ["Halima", "Kevin", "Mercy", "Omar", "Wanjiku", "Yusuf"];

const wanted = prompt("Admission number to find: ");

// Linear search: check each position until we find a match
let foundAt = -1;
for (let i = 0; i < admissionNumbers.length; i++) {
  if (admissionNumbers[i] === wanted) {
    foundAt = i;
    break;
  }
}

if (foundAt !== -1) {
  console.log(`Found at position ${foundAt}: ${names[foundAt]}`);
} else {
  console.log(`${wanted} is not on the register.`);
}

// The built-in ways to do the same thing
console.log(`includes(): ${admissionNumbers.includes(wanted)}`);
console.log(`indexOf():  ${admissionNumbers.indexOf(wanted)}`);
