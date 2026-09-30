// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Variables and Data Types Assignment
// Task 5: Temperature Converter
// Run with: node task5.js

const prompt = require("prompt-sync")();

const celsius = Number(prompt("Temperature in Nairobi (Celsius): "));

// Formula: F = C x 9 / 5 + 32
const fahrenheit = celsius * 9 / 5 + 32;

console.log(`${celsius} Celsius is ${fahrenheit.toFixed(1)} Fahrenheit`);
