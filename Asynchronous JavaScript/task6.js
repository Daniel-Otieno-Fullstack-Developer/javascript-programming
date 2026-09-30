// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 6: Load Student Records
// Run with: node task6.js

const fs = require("fs/promises");    // the promise version of fs

async function loadStudents(fileName) {
  try {
    const text = await fs.readFile(fileName, "utf8");   // wait for the file
    const students = JSON.parse(text);
    console.log(`Loaded ${students.length} students from ${fileName}:`);
    students.forEach((s) => console.log(`  ${s.admNo}  ${s.name.padEnd(16)}${s.course}`));
  } catch (error) {
    console.log(`Could not load ${fileName} (${error.code})`);
  }
}

async function main() {
  await loadStudents("students.json");
  await loadStudents("staff.json");     // this file does not exist
  console.log("Done.");
}

main();
