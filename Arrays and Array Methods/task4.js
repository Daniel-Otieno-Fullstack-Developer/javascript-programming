// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 4: Passed Students
// Run with: node task4.js

const names = ["Halima", "Kevin", "Mercy", "Omar", "Wanjiku", "Yusuf"];
const marks = [78, 45, 91, 38, 66, 52];

// filter keeps the items for which the arrow function returns true
const passedMarks = marks.filter((mark) => mark >= 50);
const passedNames = names.filter((name, i) => marks[i] >= 50);

console.log(`All marks:     ${marks.join(", ")}`);
console.log(`Passed marks:  ${passedMarks.join(", ")}`);
console.log(`Passed:        ${passedNames.join(", ")}`);
console.log(`Pass rate:     ${passedNames.length} of ${names.length}`);

// some and every answer yes/no questions about the whole array
console.log(`Anyone scored 90+?   ${marks.some((m) => m >= 90)}`);
console.log(`Everyone passed?     ${marks.every((m) => m >= 50)}`);
