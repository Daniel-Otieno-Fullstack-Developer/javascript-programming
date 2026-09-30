// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - DOM and Events Assignment
// Task 8: Bookshop Cart
// Run with: open task8.html in a web browser

const products = [
  { code: "P01", name: "Exercise book", price: 65 },
  { code: "P02", name: "Biro pen", price: 20 },
  { code: "P03", name: "Geometry set", price: 380 },
];
const cart = {};                      // code -> quantity

const productArea = document.querySelector("#products");
const cartText = document.querySelector("#cart");
const totalText = document.querySelector("#total");

function showCart() {
  const lines = [];
  let total = 0;
  for (const product of products) {
    const qty = cart[product.code] ?? 0;
    if (qty > 0) {
      lines.push(`${product.name} x${qty}`);
      total += qty * product.price;
    }
  }
  cartText.textContent = lines.length > 0 ? lines.join(", ") : "empty";
  totalText.textContent = total.toLocaleString("en-KE");
}

// Build one row with a button for every product in the array
products.forEach((product) => {
  const row = document.createElement("p");
  row.textContent = `${product.name} - KES ${product.price} `;
  const button = document.createElement("button");
  button.textContent = "Add to cart";
  button.id = `add-${product.code}`;
  button.addEventListener("click", () => {
    cart[product.code] = (cart[product.code] ?? 0) + 1;
    showCart();
  });
  row.appendChild(button);
  productArea.appendChild(row);
});
