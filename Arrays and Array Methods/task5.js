// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Arrays and Array Methods Assignment
// Task 5: Price List With VAT
// Run with: node task5.js

const items = ["Exercise book", "Biro pen", "Ruler", "Geometry set"];
const prices = [65, 20, 50, 380];

// map makes a NEW array by changing every item
const withVat = prices.map((price) => price * 1.16);
const labels = items.map((item, i) => `${item}: KES ${withVat[i].toFixed(2)}`);

console.log("Prices before VAT:", prices);
console.log("Prices with VAT:  ", withVat.map((p) => Number(p.toFixed(2))));
console.log();
labels.forEach((label) => console.log(label));
