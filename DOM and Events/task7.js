// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 7: Class List Builder
// Run with: open task7.html in a web browser

const input = document.querySelector("#student");
const list = document.querySelector("#list");
const total = document.querySelector("#total");

function updateTotal() {
  const count = list.children.length;
  total.textContent = count === 0 ? "No students yet." : `Students: ${count}`;
}

function addStudent() {
  const name = input.value.trim();
  if (name === "") return;

  // Build a new <li> with a Remove button inside it
  const item = document.createElement("li");
  item.textContent = name + " ";
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    item.remove();
    updateTotal();
  });
  item.appendChild(removeButton);
  list.appendChild(item);

  input.value = "";
  input.focus();
  updateTotal();
}

document.querySelector("#add").addEventListener("click", addStudent);
// Pressing Enter in the box also adds the student
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addStudent();
});
