// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 7: Shop Receipt
// Run with: node task7.js

const prompt = require("prompt-sync")();

const VAT_RATE = 0.16;

const item = prompt("Item name: ");
const price = Number(prompt("Unit price (KES): "));
const quantity = Number(prompt("Quantity: "));

const subtotal = price * quantity;
const vat = subtotal * VAT_RATE;
const total = subtotal + vat;

// padEnd and padStart line the columns up
console.log("=".repeat(30));
console.log("    DELHI COLLEGE BOOKSHOP");
console.log("=".repeat(30));
console.log(`${item} x ${quantity}`);
console.log("Subtotal".padEnd(10) + "KES " + subtotal.toFixed(2).padStart(12));
console.log("VAT 16%".padEnd(10) + "KES " + vat.toFixed(2).padStart(12));
console.log("TOTAL".padEnd(10) + "KES " + total.toFixed(2).padStart(12));
