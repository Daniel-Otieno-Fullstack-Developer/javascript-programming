// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 2: Shopping List
// Run with: node task2.js

const prompt = require("prompt-sync")();

const shopping = ["maize flour", "sugar", "milk"];
console.log(`Start: ${shopping.join(", ")}`);

shopping.push("bread");            // add to the end
shopping.unshift("cooking oil");   // add to the start
console.log(`After adding: ${shopping.join(", ")}`);

const item = prompt("Which item did you already buy? ");
const position = shopping.indexOf(item);
if (position !== -1) {
  shopping.splice(position, 1);    // remove 1 item at that position
  console.log(`Removed ${item}.`);
} else {
  console.log(`${item} is not on the list.`);
}

const last = shopping.pop();       // take the last item off
console.log(`Took off the last item: ${last}`);
console.log(`Items left (${shopping.length}): ${shopping.join(", ")}`);
