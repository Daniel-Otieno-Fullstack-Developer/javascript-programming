// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 7: Save a Registration
// Run with: node task7.js

const fs = require("fs");
const prompt = require("prompt-sync")();

const registration = {
  name: prompt("Student name: "),
  course: prompt("Course: "),
  year: Number(prompt("Year of study: ")),
  units: prompt("Units (separate with commas): ").split(",").map((u) => u.trim()),
  registered: true,
};

// JSON.stringify turns the object into text; 2 means indent by 2 spaces
const json = JSON.stringify(registration, null, 2);
fs.writeFileSync("registration.json", json);
console.log("Saved to registration.json");

// Read it back to check
const loaded = JSON.parse(fs.readFileSync("registration.json", "utf8"));
console.log(`${loaded.name} takes ${loaded.units.length} units in year ${loaded.year}.`);
