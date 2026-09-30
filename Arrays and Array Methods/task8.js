// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 8: Marks Table
// Run with: node task8.js

const subjects = ["JavaScript", "Web", "Maths"];
const students = ["Rehema", "Tobias", "Ubah"];
// An array of arrays: one inner array of marks for each student
const marks = [
  [78, 64, 55],
  [52, 71, 69],
  [88, 90, 74],
];

const average = (list) => list.reduce((sum, m) => sum + m, 0) / list.length;

let heading = "Student".padEnd(10);
subjects.forEach((s) => (heading += s.padStart(11)));
console.log(heading + "Average".padStart(9));

marks.forEach((row, r) => {
  let line = students[r].padEnd(10);
  row.forEach((mark) => (line += String(mark).padStart(11)));
  console.log(line + average(row).toFixed(1).padStart(9));
});

// Column averages: pick out one subject from every row with map
let footer = "Average".padEnd(10);
subjects.forEach((s, c) => {
  const column = marks.map((row) => row[c]);
  footer += average(column).toFixed(1).padStart(11);
});
console.log(footer);
