// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 6: Shop Stock
// Run with: node task6.js

class Product {
  constructor(code, name, price, quantity) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  get value() {
    return this.price * this.quantity;
  }

  toString() {
    const money = (n) => n.toLocaleString("en-KE", { minimumFractionDigits: 2 });
    const qty = String(this.quantity).padStart(4);
    return `${this.code.padEnd(5)}${this.name.padEnd(15)}${qty}` +
      ` x ${money(this.price).padStart(8)} = ${money(this.value).padStart(9)}`;
  }
}

const shelf = [
  new Product("P01", "Exercise book", 65, 120),
  new Product("P02", "Biro pen", 20, 300),
  new Product("P03", "Geometry set", 380, 15),
  new Product("P04", "Flash disk", 1200, 8),
];

shelf.forEach((item) => console.log(`${item}`));

const total = shelf.reduce((sum, item) => sum + item.value, 0);
const top = shelf.reduce((best, item) => (item.value > best.value ? item : best));
console.log(`Total stock value: KES ${total.toLocaleString("en-KE")}`);
console.log(`Most valuable line: ${top.name}`);
