// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 7: Person and Student
// Run with: node task7.js

class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  describe() {
    return `${this.name}, phone ${this.phone}`;
  }
}

class Student extends Person {    // a Student IS a Person
  constructor(name, phone, admNo, course) {
    super(name, phone);           // let Person set name and phone
    this.admNo = admNo;
    this.course = course;
  }

  describe() {                    // override: add the student details
    return `${super.describe()} | ${this.admNo}, ${this.course}`;
  }
}

class Lecturer extends Person {
  constructor(name, phone, department) {
    super(name, phone);
    this.department = department;
  }

  describe() {
    return `${super.describe()} | lecturer, ${this.department}`;
  }
}

const people = [
  new Person("Hassan Ali", "0701 111 222"),
  new Student("Chebet Rono", "0722 333 444", "DC107", "DICT"),
  new Lecturer("Peter Kamau", "0733 555 666", "ICT"),
];
people.forEach((p) => console.log(p.describe()));

console.log(people[1] instanceof Person, people[0] instanceof Student);
