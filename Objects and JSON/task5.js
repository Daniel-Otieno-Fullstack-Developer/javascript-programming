// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 5: Stock Tracker
// Run with: node task5.js

const prompt = require("prompt-sync")();

const stock = { sugar: 40, "maize flour": 25, "cooking oil": 12, salt: 30 };

const sales = Number(prompt("How many sales to record? "));
for (let i = 0; i < sales; i++) {
  const item = prompt("Item sold: ").trim().toLowerCase();
  if (!(item in stock)) {
    console.log("  Unknown item.");
    continue;
  }
  const qty = Number(prompt("Quantity: "));
  if (qty > stock[item]) {
    console.log(`  Only ${stock[item]} left. Sale refused.`);
  } else {
    stock[item] -= qty;
  }
}

console.log();
console.log("STOCK LEVELS");
for (const [item, qty] of Object.entries(stock)) {
  const flag = qty < 10 ? "  <- reorder" : "";
  console.log(`${item.padEnd(12)}${String(qty).padStart(3)}${flag}`);
}
