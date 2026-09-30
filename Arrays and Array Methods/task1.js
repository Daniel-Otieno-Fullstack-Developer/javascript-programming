// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 1: Class List
// Run with: node task1.js

const students = ["Amina Yusuf", "Brian Otieno", "Chebet Rono", "Dahir Hassan",
  "Esther Njeri"];

console.log(`Number of students: ${students.length}`);
console.log(`First student: ${students[0]}`);
console.log(`Last student:  ${students[students.length - 1]}`);
console.log(`Middle three:  ${students.slice(1, 4).join(", ")}`);

console.log();
console.log("CLASS REGISTER");
// forEach gives each item and its index
students.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
