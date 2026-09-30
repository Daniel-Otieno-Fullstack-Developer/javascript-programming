// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 1: Exam Countdown
// Run with: node task1.js

let secondsLeft = 5;

console.log("Exam countdown started. Pens down in 5 seconds.");

// setInterval runs the function again and again, every 1000 ms (1 second)
const timer = setInterval(() => {
  console.log(`${secondsLeft}...`);
  secondsLeft--;

  if (secondsLeft === 0) {
    clearInterval(timer);            // stop the repeating timer
    console.log("Time up! Pens down.");
  }
}, 1000);

console.log("(This line prints before the countdown, because the timer waits.)");
