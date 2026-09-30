// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 1: Welcome Page
// Run with: open task1.html in a web browser

const studentName = "Halima Noor";
const classes = ["JavaScript", "Web Design", "Networking"];

// Find elements on the page and change their text
document.querySelector("#title").textContent = "Delhi College Student Portal";
document.querySelector("#greeting").textContent = `Karibu, ${studentName}!`;
const countText = `${classes.length} (${classes.join(", ")})`;
document.querySelector("#count").textContent = countText;

// Change the style of an element
const note = document.querySelector(".note");
note.style.color = "#b3261e";
note.style.fontWeight = "bold";

console.log("Page updated for", studentName);
