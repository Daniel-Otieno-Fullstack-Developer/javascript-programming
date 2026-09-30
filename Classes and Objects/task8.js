// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 8: Library System
// Run with: node task8.js

class Book {
  constructor(code, title) {
    this.code = code;
    this.title = title;
    this.borrowedBy = null;       // null means it is on the shelf
  }

  get isAvailable() {
    return this.borrowedBy === null;
  }
}

class Library {
  #books = {};                    // private object: code -> Book

  addBook(code, title) {
    this.#books[code] = new Book(code, title);
  }

  borrow(code, student) {
    const book = this.#books[code];
    if (!book) return "No such book.";
    if (!book.isAvailable) {
      return `'${book.title}' is already out with ${book.borrowedBy}.`;
    }
    book.borrowedBy = student;
    return `${student} borrowed '${book.title}'.`;
  }

  giveBack(code) {
    const book = this.#books[code];
    if (!book || book.isAvailable) return "That book is not on loan.";
    book.borrowedBy = null;
    return `'${book.title}' is back on the shelf.`;
  }

  report() {
    for (const book of Object.values(this.#books)) {
      const status = book.isAvailable ? "available" : `out: ${book.borrowedBy}`;
      console.log(`  ${book.code}  ${book.title.padEnd(26)}${status}`);
    }
  }
}

const library = new Library();
library.addBook("B1", "JavaScript for Beginners");
library.addBook("B2", "Networking Essentials");
library.addBook("B3", "Web Design with HTML");

console.log(library.borrow("B1", "Omar Farah"));
console.log(library.borrow("B1", "Mercy Achieng"));
console.log(library.borrow("B9", "Mercy Achieng"));
console.log(library.giveBack("B1"));
console.log(library.borrow("B3", "Mercy Achieng"));
console.log("Library report:");
library.report();
