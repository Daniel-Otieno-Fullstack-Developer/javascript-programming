// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 2: Rectangle
// Run with: node task2.js

const prompt = require("prompt-sync")();

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }

  isSquare() {
    return this.length === this.width;
  }
}

const length = Number(prompt("Classroom length (m): "));
const width = Number(prompt("Classroom width (m): "));
const room = new Rectangle(length, width);

console.log(`Area:      ${room.area().toFixed(2)} square metres`);
console.log(`Perimeter: ${room.perimeter().toFixed(2)} metres`);
console.log(`Square room? ${room.isSquare()}`);

const tile = new Rectangle(0.5, 0.5);
console.log(`Tiles needed: ${Math.ceil(room.area() / tile.area())}`);
