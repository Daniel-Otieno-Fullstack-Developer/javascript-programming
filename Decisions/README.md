# JavaScript Decisions

Eight beginner tasks on making choices with `if`, `else if` and `else`, combined and nested conditions, `switch`, the ternary operator and truthy and falsy values.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Fee Reminder | `if`, `else` | Prints a reminder only when fees are owed |
| [task2.js](task2.js) | Grade Calculator | `else if` chain | Turns a mark into a grade A to E |
| [task3.js](task3.js) | Peak Hour Fare | `&&`, `||` | Picks a peak or off-peak fare with a student discount |
| [task4.js](task4.js) | Largest of Three | `else if` with `&&` | Finds the largest of three numbers with comparisons |
| [task5.js](task5.js) | Leap Year Checker | `%`, `? :` | Decides if a year is a leap year |
| [task6.js](task6.js) | M-Pesa Withdrawal | nested `if` | Checks a PIN, works out the fee and approves or refuses |
| [task7.js](task7.js) | Student Portal Menu | `switch` | Responds to a menu choice with `switch` |
| [task8.js](task8.js) | Contact Checker | truthy/falsy, `||` | Uses truthy and falsy values to validate a contact |

## Sample output

**Task 2: Grade Calculator**
```
Enter the mark (0-100): 64
Grade B - Credit
```

**Task 6: M-Pesa Withdrawal**
```
Enter your PIN: 4821
Amount to withdraw (KES): 3000
Withdrawn KES 3000.00. Fee KES 52.
New balance: KES 4298.00
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
