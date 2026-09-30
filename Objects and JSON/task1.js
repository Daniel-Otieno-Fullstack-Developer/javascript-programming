// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 1: Student Record
// Run with: node task1.js

const student = {
  admNo: "DC118",
  name: "Wanjiku Mwangi",
  course: "Diploma in ICT",
  year: 2,
  feesCleared: false,
};

// Dot notation and bracket notation read the same property
console.log(`Name:   ${student.name}`);
console.log(`Course: ${student["course"]}`);

// Change one value and add a new property
student.year = 3;
student.phone = "0722 555 010";

console.log();
for (const [key, value] of Object.entries(student)) {
  console.log(`${key.padEnd(12)}: ${value}`);
}
console.log(`Number of properties: ${Object.keys(student).length}`);
