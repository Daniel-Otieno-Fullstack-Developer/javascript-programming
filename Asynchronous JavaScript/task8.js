// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 8: Results Lookup
// Run with: node task8.js

const fs = require("fs/promises");
const prompt = require("prompt-sync")();

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Pretend "server": looks up a student's results after a short delay
async function fetchResults(admNo) {
  await wait(600);
  const results = JSON.parse(await fs.readFile("results.json", "utf8"));
  if (!(admNo in results)) {
    throw new Error(`no results found for ${admNo}`);
  }
  return results[admNo];
}

async function main() {
  while (true) {
    const admNo = prompt("Admission number (or Q to quit): ").trim().toUpperCase();
    if (admNo === "Q") break;

    console.log("Fetching results...");
    try {
      const results = await fetchResults(admNo);
      const marks = Object.values(results);
      for (const [unit, mark] of Object.entries(results)) {
        console.log(`  ${unit.padEnd(12)}${mark}`);
      }
      const average = marks.reduce((sum, m) => sum + m, 0) / marks.length;
      console.log(`  Average     ${average.toFixed(1)}`);
    } catch (error) {
      console.log(`  Sorry, ${error.message}.`);
    }
  }
  console.log("Goodbye.");
}

main();
