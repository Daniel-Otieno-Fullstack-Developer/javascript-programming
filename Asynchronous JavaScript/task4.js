// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: JavaScript Programming - Asynchronous JavaScript Assignment
// Task 4: M-Pesa Promise
// Run with: node task4.js

// sendMoney returns a Promise: a value that will be ready later
function sendMoney(to, amount, balance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > balance) {
        reject(new Error(`Failed: KES ${amount} is more than your balance`));
      } else {
        resolve({ to, amount, newBalance: balance - amount });
      }
    }, 700);
  });
}

console.log("Sending KES 1,500 to Amina...");
sendMoney("Amina Yusuf", 1500, 5000)
  .then((receipt) => {
    console.log(`Sent KES ${receipt.amount} to ${receipt.to}.`);
    console.log(`New balance: KES ${receipt.newBalance}`);
    console.log("Sending KES 9,000 to Brian...");
    return sendMoney("Brian Otieno", 9000, receipt.newBalance);
  })
  .then((receipt) => console.log(`Sent KES ${receipt.amount} to ${receipt.to}.`))
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Thank you for using M-Pesa."));
