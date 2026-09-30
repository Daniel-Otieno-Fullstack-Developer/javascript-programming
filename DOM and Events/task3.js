// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 3: Gate Counter
// Run with: open task3.html in a web browser

const CAPACITY = 5;
let inside = 0;

const insideText = document.querySelector("#inside");
const statusText = document.querySelector("#status");

// One function updates the page, so every button shows the same thing
function show() {
  insideText.textContent = inside;
  if (inside >= CAPACITY) {
    statusText.textContent = "Full! Please wait outside.";
    statusText.className = "error";
  } else {
    statusText.textContent = `${CAPACITY - inside} more can enter.`;
    statusText.className = "";
  }
}

document.querySelector("#enter").addEventListener("click", () => {
  if (inside < CAPACITY) inside++;
  show();
});
document.querySelector("#leave").addEventListener("click", () => {
  if (inside > 0) inside--;
  show();
});
document.querySelector("#reset").addEventListener("click", () => {
  inside = 0;
  show();
});

show();
