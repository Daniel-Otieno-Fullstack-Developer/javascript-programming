// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Strings Assignment
// Task 5: M-Pesa Message Reader
// Run with: node task5.js

const message = "QJK7TX2L9P Confirmed. Ksh1,250.00 sent to AMINA YUSUF 0712345678 " +
  "on 30/9/26 at 10:15 AM. New M-PESA balance is Ksh3,480.50.";

// The code is everything before the first space
const code = message.slice(0, message.indexOf(" "));

// The amount sits between "Ksh" and " sent"
const start = message.indexOf("Ksh") + 3;
const end = message.indexOf(" sent");
const amount = Number(message.slice(start, end).replaceAll(",", ""));

// The name sits between "sent to " and the phone number
const nameStart = message.indexOf("sent to ") + "sent to ".length;
const nameEnd = message.indexOf(" 07");
const name = message.slice(nameStart, nameEnd);

// The balance is the last Ksh value; drop the full stop at the end
const balanceText = message.slice(message.lastIndexOf("Ksh") + 3, -1);
const balance = Number(balanceText.replaceAll(",", ""));

console.log(`Transaction code: ${code}`);
console.log(`Amount sent:      KES ${amount.toFixed(2)}`);
console.log(`Sent to:          ${name}`);
console.log(`Balance left:     KES ${balance.toFixed(2)}`);
console.log(`Sent to Amina?    ${message.includes("AMINA")}`);
