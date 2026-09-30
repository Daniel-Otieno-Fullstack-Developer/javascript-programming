// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 5: Fare Calculator
// Run with: open task5.html in a web browser

const result = document.querySelector("#result");

document.querySelector("#calculate").addEventListener("click", () => {
  // .value is always a string, so convert it before doing sums
  const fare = Number(document.querySelector("#stage").value);
  const people = Number(document.querySelector("#people").value);
  const isStudent = document.querySelector("#student").checked;

  if (!Number.isInteger(people) || people < 1) {
    result.innerHTML = '<span class="error">Enter at least 1 passenger.</span>';
    return;
  }

  const each = isStudent ? fare - 20 : fare;
  const total = each * people;
  result.textContent = `${people} x KES ${each} = KES ${total}`;
});
