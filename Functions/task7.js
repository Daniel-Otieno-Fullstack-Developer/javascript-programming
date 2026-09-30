// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 7: Scope Explorer
// Run with: node task7.js

const prompt = require("prompt-sync")();

const college = "Delhi College";   // global: visible everywhere in this file
let visitors = 0;                  // global counter

function showScope() {
  const room = "Lab 3";            // local: only exists inside this function
  console.log(`Inside the function: ${college} - ${room}`);
}

function signIn(name) {
  visitors++;                      // changes the global variable
  console.log(`${name} signed in. Visitors today: ${visitors}`);
}

showScope();
console.log(`Outside the function: ${college}`);
console.log(`Is room visible here? ${typeof room !== "undefined"}`);

for (let i = 0; i < 3; i++) {
  signIn(prompt("Visitor name: "));
}
console.log(`Final count: ${visitors}`);
