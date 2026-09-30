// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Classes and Objects Assignment
// Task 3: Bank Account
// Run with: node task3.js

const prompt = require("prompt-sync")();

class BankAccount {
  #balance;                     // private field: only this class can touch it

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("  Deposit must be more than zero.");
      return;
    }
    this.#balance += amount;
    console.log(`  Deposited KES ${amount.toFixed(2)}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`  Refused: balance is only KES ${this.#balance.toFixed(2)}`);
      return;
    }
    this.#balance -= amount;
    console.log(`  Withdrew KES ${amount.toFixed(2)}`);
  }

  get balance() {               // a getter: read it like a property
    return this.#balance;
  }
}

const owner = prompt("Account holder: ");
const account = new BankAccount(owner, Number(prompt("Opening balance (KES): ")));
account.deposit(Number(prompt("Deposit (KES): ")));
account.withdraw(Number(prompt("Withdraw (KES): ")));
account.withdraw(Number(prompt("Withdraw (KES): ")));
console.log(`${account.owner}'s balance: KES ${account.balance.toFixed(2)}`);
