// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 3: Class List
// Run with: node task3.js

// An array of objects: one object for each student
const students = [
  { name: "Halima Noor", course: "DICT", mark: 78 },
  { name: "Kevin Mutua", course: "CICT", mark: 45 },
  { name: "Mercy Achieng", course: "DICT", mark: 91 },
  { name: "Omar Farah", course: "CICT", mark: 38 },
  { name: "Wanjiku Mwangi", course: "DICT", mark: 66 },
];

console.log("ALL STUDENTS");
students.forEach((s, i) => {
  console.log(`${i + 1}. ${s.name.padEnd(16)}${s.course.padEnd(6)}${s.mark}`);
});

const dict = students.filter((s) => s.course === "DICT");
const passed = students.filter((s) => s.mark >= 50).map((s) => s.name);
const top = students.reduce((best, s) => (s.mark > best.mark ? s : best));

console.log();
console.log(`DICT students: ${dict.length}`);
console.log(`Passed: ${passed.join(", ")}`);
console.log(`Top student: ${top.name} (${top.mark})`);
