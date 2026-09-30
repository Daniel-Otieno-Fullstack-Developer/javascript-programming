// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 6: Results From JSON
// Run with: node task6.js

const fs = require("fs");

function grade(mark) {
  if (mark >= 70) return "A";
  if (mark >= 60) return "B";
  if (mark >= 50) return "C";
  if (mark >= 40) return "D";
  return "E";
}

// Read the JSON text from the file, then turn it into real objects
const text = fs.readFileSync("students.json", "utf8");
const students = JSON.parse(text);

console.log(`${"Adm".padEnd(7)}${"Name".padEnd(16)}${"Avg".padStart(5)}  Grade`);
for (const s of students) {
  const avg = s.marks.reduce((sum, m) => sum + m, 0) / s.marks.length;
  console.log(`${s.admNo.padEnd(7)}${s.name.padEnd(16)}${avg.toFixed(1).padStart(5)}  ` +
    grade(avg));
}
console.log(`Students read from the file: ${students.length}`);
