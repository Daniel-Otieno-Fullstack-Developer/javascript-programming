// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Functions Assignment
// Task 8: Loan Repayment
// Run with: node task8.js

const prompt = require("prompt-sync")();

// Fixed monthly repayment for a loan (reducing balance)
function monthlyPayment(amount, yearlyRate, months) {
  const r = yearlyRate / 100 / 12;
  if (r === 0) {
    return amount / months;
  }
  return (amount * r) / (1 - (1 + r) ** -months);
}

const kes = (value) => value.toLocaleString("en-KE", { minimumFractionDigits: 2,
  maximumFractionDigits: 2 });

function printSummary(amount, yearlyRate, months) {
  const payment = monthlyPayment(amount, yearlyRate, months);
  const total = payment * months;
  console.log(`Monthly payment: KES ${kes(payment)}`);
  console.log(`Total repaid:    KES ${kes(total)}`);
  console.log(`Total interest:  KES ${kes(total - amount)}`);
}

const loan = Number(prompt("Loan amount (KES): "));
const rate = Number(prompt("Interest rate per year (%): "));
const months = Number(prompt("Months to repay: "));
printSummary(loan, rate, months);
