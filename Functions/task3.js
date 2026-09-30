// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 3: Area Calculator
// Run with: node task3.js

const prompt = require("prompt-sync")();

// Short arrow functions: the value after => is returned
const rectangleArea = (length, width) => length * width;
const triangleArea = (base, height) => 0.5 * base * height;
const circleArea = (radius) => Math.PI * radius ** 2;

const length = Number(prompt("Room length (m): "));
const width = Number(prompt("Room width (m): "));
const radius = Number(prompt("Radius of the round table (m): "));

console.log(`Room floor: ${rectangleArea(length, width).toFixed(2)} square metres`);
console.log(`Half room:  ${triangleArea(length, width).toFixed(2)} square metres`);
console.log(`Table top:  ${circleArea(radius).toFixed(2)} square metres`);
