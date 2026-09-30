// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 1: First Student Class
// Run with: node task1.js

class Student {
  // The constructor runs every time a new Student is made
  constructor(name, admNo, course) {
    this.name = name;
    this.admNo = admNo;
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I am ${this.name} (${this.admNo}), studying ${this.course}.`);
  }
}

// Two separate objects made from the same class
const s1 = new Student("Halima Noor", "DC101", "Diploma in ICT");
const s2 = new Student("Kevin Mutua", "DC104", "Certificate in ICT");

s1.introduce();
s2.introduce();
console.log(`s2 course: ${s2.course}`);
