// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 2: Price List
// Run with: node task2.js

const prompt = require("prompt-sync")();

// An object used as a lookup table: item name -> price
const prices = {
  "exercise book": 65,
  "biro pen": 20,
  ruler: 50,
  "geometry set": 380,
  "flash disk": 1200,
};

const item = prompt("Item to look up: ").trim().toLowerCase();

if (item in prices) {
  console.log(`The price of a ${item} is KES ${prices[item]}`);
} else {
  console.log(`Sorry, we do not sell '${item}'.`);
  console.log(`We sell: ${Object.keys(prices).sort().join(", ")}`);
}
