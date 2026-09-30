# JavaScript Functions

Eight beginner tasks on writing your own functions: declarations, arrow functions, parameters, `return`, default parameters and scope.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Welcome Banner | `function`, parameters | Prints a centred banner with a two-parameter function |
| [task2.js](task2.js) | Grade Function | `return` | Returns a grade letter for each of three marks |
| [task3.js](task3.js) | Area Calculator | arrow functions | Three arrow functions that return areas |
| [task4.js](task4.js) | Fare With Discount | defaults | Uses default parameters for discounts |
| [task5.js](task5.js) | Journey Planner | functions calling functions | Formats travel times with small helper functions |
| [task6.js](task6.js) | Valid Mark Reader | loop in a function | Validates marks inside a reusable function |
| [task7.js](task7.js) | Scope Explorer | scope | Shows global and local variables |
| [task8.js](task8.js) | Loan Repayment | functions together | Works out a loan's monthly repayment and interest |

## Sample output

**Task 4: Fare With Discount**
```
Normal fare (KES): 120
Full fare:          KES 120
10% discount:       KES 108
Student fare:       KES 100
Student + 10% off:  KES 88
```

**Task 8: Loan Repayment**
```
Loan amount (KES): 150000
Interest rate per year (%): 14
Months to repay: 24
Monthly payment: KES 7,201.93
Total repaid:    KES 172,846.38
Total interest:  KES 22,846.38
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
