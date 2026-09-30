// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 5: Registration Steps
// Run with: node task5.js

// A helper that waits for a number of milliseconds
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function checkFees(student) {
  return wait(400).then(() => {
    if (student.balance > 0) {
      throw new Error(`${student.name} owes KES ${student.balance}`);
    }
    console.log(`1. Fees cleared for ${student.name}`);
    return student;
  });
}

function assignClass(student) {
  return wait(400).then(() => {
    student.className = student.course === "DICT" ? "DICT 2A" : "CICT 1B";
    console.log(`2. Assigned to ${student.className}`);
    return student;
  });
}

function printCard(student) {
  return wait(400).then(() => {
    console.log(`3. Card printed: ${student.name} | ${student.className}`);
  });
}

function register(student) {
  // Each step starts only when the one before has finished
  return checkFees(student)
    .then(assignClass)
    .then(printCard)
    .catch((error) => console.log(`Registration stopped: ${error.message}`));
}

register({ name: "Halima Noor", course: "DICT", balance: 0 })
  .then(() => register({ name: "Omar Farah", course: "CICT", balance: 24000 }));
