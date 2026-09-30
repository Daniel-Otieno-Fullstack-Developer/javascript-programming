// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 4: SMS Character Counter
// Run with: open task4.html in a web browser

const LIMIT = 160;
const box = document.querySelector("#message");
const counter = document.querySelector("#counter");
const preview = document.querySelector("#preview");

// The input event fires every time the text changes
box.addEventListener("input", () => {
  const text = box.value;
  const left = LIMIT - text.length;
  preview.textContent = text.toUpperCase();

  if (left >= 0) {
    counter.textContent = `${left} characters left`;
    counter.className = "";
  } else {
    counter.textContent = `${-left} characters too many!`;
    counter.className = "error";
  }
});
