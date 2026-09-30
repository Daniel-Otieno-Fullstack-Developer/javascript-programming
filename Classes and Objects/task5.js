// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 5: Gate Counter
// Run with: node task5.js

class GateCounter {
  static totalGates = 0;          // static: shared by the class, not each object

  constructor(name) {
    this.name = name;
    this.inside = 0;
    GateCounter.totalGates++;
  }

  enter(people = 1) {
    this.inside += people;
  }

  leave(people = 1) {
    // never let the count go below zero
    this.inside = Math.max(0, this.inside - people);
  }

  toString() {
    return `${this.name}: ${this.inside} inside`;
  }
}

const mainGate = new GateCounter("Main gate");
const backGate = new GateCounter("Back gate");

mainGate.enter(25);
mainGate.leave(7);
backGate.enter(4);
backGate.leave(10);

console.log(`${mainGate}`);       // a template literal uses toString()
console.log(`${backGate}`);
console.log(`Gates being counted: ${GateCounter.totalGates}`);
