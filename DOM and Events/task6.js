// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 6: Grade Checker Form
// Run with: open task6.html in a web browser

function getGrade(mark) {
  if (mark >= 70) return "A";
  if (mark >= 60) return "B";
  if (mark >= 50) return "C";
  if (mark >= 40) return "D";
  return "E";
}

const form = document.querySelector("#grade-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();          // stop the page from reloading

  const name = document.querySelector("#name").value.trim();
  const markText = document.querySelector("#mark").value.trim();
  const mark = Number(markText);

  if (name === "") {
    result.innerHTML = '<span class="error">Please enter the student name.</span>';
  } else if (markText === "" || Number.isNaN(mark) || mark < 0 || mark > 100) {
    result.innerHTML = '<span class="error">The mark must be from 0 to 100.</span>';
  } else {
    result.textContent = `${name} scored ${mark}: grade ${getGrade(mark)}`;
    form.reset();                  // clear the boxes for the next student
  }
});
