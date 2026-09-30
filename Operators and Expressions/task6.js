// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Operators and Expressions Assignment
// Task 6: CAT Average
// Run with: node task6.js

const prompt = require("prompt-sync")();

const PASS_MARK = 50;

const cat1 = Number(prompt("CAT 1 mark: "));
const cat2 = Number(prompt("CAT 2 mark: "));
const cat3 = Number(prompt("CAT 3 mark: "));

const total = cat1 + cat2 + cat3;
// Brackets make JavaScript add first, then divide
const average = (cat1 + cat2 + cat3) / 3;
const passed = average >= PASS_MARK;

console.log("Total:  ", total);
console.log("Average:", Math.round(average * 10) / 10);
console.log("Passed: ", passed);
