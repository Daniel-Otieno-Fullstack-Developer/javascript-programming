// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 2: Morning Announcements
// Run with: node task2.js

const announcements = [
  { delay: 1500, text: "Lab 2 is closed for maintenance today." },
  { delay: 500, text: "Good morning, Delhi College!" },
  { delay: 2500, text: "Have a great day of learning." },
  { delay: 1000, text: "CAT 1 for DICT 2 is on Monday." },
];

console.log("Scheduling announcements...");

// Each setTimeout waits on its own; the shortest delay runs first,
// whatever order the lines are written in
announcements.forEach((a, i) => {
  setTimeout(() => {
    console.log(`[after ${a.delay / 1000}s] ${a.text}`);
  }, a.delay);
  console.log(`  Announcement ${i + 1} scheduled for ${a.delay} ms`);
});

console.log("All scheduled. Waiting...");
