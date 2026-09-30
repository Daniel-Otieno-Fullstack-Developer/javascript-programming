// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 7: Fee Report From Two Files
// Run with: node task7.js

const fs = require("fs/promises");

async function readJson(fileName) {
  const text = await fs.readFile(fileName, "utf8");
  return JSON.parse(text);
}

async function main() {
  console.log("Loading students and fees at the same time...");
  // Promise.all waits for BOTH files; they load side by side
  const [students, fees] = await Promise.all([
    readJson("students.json"),
    readJson("fees.json"),
  ]);

  let totalOwed = 0;
  console.log("FEE REPORT");
  for (const s of students) {
    const f = fees[s.admNo];
    const balance = f.fees - f.paid;
    totalOwed += balance;
    const owed = `owes KES ${balance.toLocaleString("en-KE")}`;
    const status = balance === 0 ? "cleared" : owed;
    console.log(`${s.admNo}  ${s.name.padEnd(16)}${status}`);
  }
  console.log(`Total owed: KES ${totalOwed.toLocaleString("en-KE")}`);
}

main().catch((error) => console.log(`Report failed: ${error.message}`));
