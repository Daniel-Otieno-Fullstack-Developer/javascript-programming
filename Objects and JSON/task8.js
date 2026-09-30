// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Objects and JSON Assignment
// Task 8: Shop Order
// Run with: node task8.js

const fs = require("fs");
const prompt = require("prompt-sync")();

const data = JSON.parse(fs.readFileSync("products.json", "utf8"));
const codes = data.products.map((p) => `${p.code} ${p.name}`);
console.log(`${data.shop.toUpperCase()}: ${codes.join(", ")}`);

const order = [];
while (true) {
  const code = prompt("Product code (or done): ").toUpperCase();
  if (code === "DONE") break;
  const product = data.products.find((p) => p.code === code);
  if (!product) {
    console.log("  No such product.");
    continue;
  }
  const qty = Number(prompt("Quantity: "));
  order.push({ name: product.name, qty, lineTotal: product.price * qty });
}

const subtotal = order.reduce((sum, line) => sum + line.lineTotal, 0);
const vat = subtotal * data.vatRate;
console.log();
order.forEach((line) => {
  console.log(`${line.name.padEnd(15)} x${String(line.qty).padEnd(4)}` +
    `KES ${line.lineTotal.toFixed(2).padStart(9)}`);
});
console.log(`${"VAT".padEnd(21)}KES ${vat.toFixed(2).padStart(9)}`);
console.log(`${"TOTAL".padEnd(21)}KES ${(subtotal + vat).toFixed(2).padStart(9)}`);
