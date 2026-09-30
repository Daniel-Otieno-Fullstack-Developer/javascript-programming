// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 2: Student Profile
// Run with: node task2.js

// One value of each basic type
const name = "Hodan Abdi";      // string
const age = 19;                 // number (whole)
const feesPaid = 18500.5;       // number (with decimals)
const isRegistered = true;      // boolean
let club;                       // declared but not given a value: undefined
const scholarship = null;       // deliberately "no value"

console.log("STUDENT PROFILE");
console.log("---------------");
// typeof tells us which type each value is
console.log("Name:        ", name, "|", typeof name);
console.log("Age:         ", age, "|", typeof age);
console.log("Fees paid:   ", feesPaid, "|", typeof feesPaid);
console.log("Registered:  ", isRegistered, "|", typeof isRegistered);
console.log("Club:        ", club, "|", typeof club);
console.log("Scholarship: ", scholarship, "|", typeof scholarship);
