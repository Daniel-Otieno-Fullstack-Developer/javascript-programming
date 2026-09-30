// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 8: Exam Eligibility
// Run with: node task8.js

const prompt = require("prompt-sync")();

const MIN_ATTENDANCE = 75;

const feeBalance = Number(prompt("Fee balance (KES): "));
const attendance = Number(prompt("Attendance (%): "));

const feesCleared = feeBalance === 0;
const attendedEnough = attendance >= MIN_ATTENDANCE;

// && : both must be true.  || : at least one true.  ! : flips the value.
const eligible = feesCleared && attendedEnough;
const needsFollowUp = !feesCleared || attendance < 50;

console.log("Fees cleared:    ", feesCleared);
console.log("Attendance OK:   ", attendedEnough);
console.log("Can sit the exam:", eligible);
console.log("Needs follow-up: ", needsFollowUp);
