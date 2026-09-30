// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 8: Receipt Printer
// Run with: node task8.js

const WIDTH = 34;
const items = ["Exercise books x10", "Biro pens x5", "Geometry set",
  "Scientific calculator"];
const prices = [650, 100, 380, 1850];

// Centre text by padding both sides
const centre = (text) => {
  const left = Math.floor((WIDTH + text.length) / 2);
  return text.padStart(left).padEnd(WIDTH);
};
const money = (n) => n.toLocaleString("en-KE", { minimumFractionDigits: 2 });
const row = (label, amount) => label.padEnd(22) + money(amount).padStart(12);

console.log("=".repeat(WIDTH));
console.log(centre("DELHI COLLEGE BOOKSHOP"));
console.log(centre("Eastleigh, Nairobi"));
console.log("=".repeat(WIDTH));

let total = 0;
items.forEach((item, i) => {
  console.log(row(item, prices[i]));
  total += prices[i];
});

const vat = (total * 16) / 116;       // prices already include 16% VAT
console.log("-".repeat(WIDTH));
console.log(row("TOTAL", total));
console.log(row("Includes VAT (16%)", Math.round(vat * 100) / 100));
console.log("=".repeat(WIDTH));
console.log(centre("Asante sana!"));
