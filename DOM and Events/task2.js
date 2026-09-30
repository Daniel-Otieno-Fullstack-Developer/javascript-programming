// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 2: Theme Switcher
// Run with: open task2.html in a web browser

const panel = document.querySelector("#panel");
const themeButton = document.querySelector("#theme");
const sizeInfo = document.querySelector("#size-info");
let textSize = 16;

// classList.toggle adds the class if it is missing and removes it if it is there
themeButton.addEventListener("click", () => {
  panel.classList.toggle("dark");
  const isDark = panel.classList.contains("dark");
  themeButton.textContent = isDark ? "Light mode" : "Dark mode";
});

function setSize(size) {
  textSize = size;
  panel.style.fontSize = `${textSize}px`;
  sizeInfo.textContent = `Text size: ${textSize}px`;
}

document.querySelector("#bigger").addEventListener("click", () => setSize(textSize + 2));
document.querySelector("#smaller").addEventListener("click", () => setSize(textSize - 2));
