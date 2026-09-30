# JavaScript Variables and Data Types

Eight beginner tasks on `let` and `const`, the basic types, `typeof`, converting typed input with `Number()`, and printing with template literals.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Hello, Delhi College | `prompt()`, template literals | Asks for a name and course, then prints a welcome |
| [task2.js](task2.js) | Student Profile | `typeof` | Shows one value of each type next to its `typeof` |
| [task3.js](task3.js) | Matatu Fare | `Number()`, `*` | Multiplies a fare by trips per week and per month |
| [task4.js](task4.js) | M-Pesa Balance | `Number()`, `toFixed()` | Subtracts the amount and a KES 13 charge from a balance |
| [task5.js](task5.js) | Temperature Converter | formula, `toFixed()` | Converts Celsius to Fahrenheit |
| [task6.js](task6.js) | Type Detective | type conversion | Converts one typed value to number, boolean and string |
| [task7.js](task7.js) | Shop Receipt | `padStart()`, `padEnd()` | Prints a receipt with VAT and aligned amounts |
| [task8.js](task8.js) | Age Calculator | booleans | Turns years into months and days and checks for 18+ |

## Sample output

**Task 4: M-Pesa Balance**
```
Current balance (KES): 5230.50
Amount to send (KES): 1500
Amount sent:      KES 1500.00
Transaction cost: KES 13.00
New balance:      KES 3717.50
```

**Task 7: Shop Receipt**
```
Item name: Exercise book
Unit price (KES): 65
Quantity: 12
==============================
    DELHI COLLEGE BOOKSHOP
==============================
Exercise book x 12
Subtotal  KES       780.00
VAT 16%   KES       124.80
TOTAL     KES       904.80
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
