// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 4: Marks With Validation
// Run with: node task4.js

const prompt = require("prompt-sync")();

class Result {
  #mark = 0;

  constructor(unit, mark) {
    this.unit = unit;
    this.mark = mark;             // goes through the setter below
  }

  get mark() {
    return this.#mark;
  }

  set mark(value) {
    if (value >= 0 && value <= 100) {
      this.#mark = value;
    } else {
      console.log(`  ${value} is not a valid mark for ${this.unit}. Using 0.`);
      this.#mark = 0;
    }
  }

  get grade() {
    if (this.#mark >= 70) return "A";
    if (this.#mark >= 60) return "B";
    if (this.#mark >= 50) return "C";
    if (this.#mark >= 40) return "D";
    return "E";
  }
}

const results = [];
for (const unit of ["JavaScript", "Web Design", "Networking"]) {
  results.push(new Result(unit, Number(prompt(`Mark for ${unit}: `))));
}

console.log();
for (const r of results) {
  console.log(`${r.unit.padEnd(12)}${String(r.mark).padStart(4)}  ${r.grade}`);
}
