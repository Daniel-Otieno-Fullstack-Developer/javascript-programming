# JavaScript Operators and Expressions

Eight beginner tasks on arithmetic, remainders with `%`, the Math object, `===` versus `==`, compound assignment and the logical operators `&&`, `||` and `!`.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Simple Calculator | `+ - * / % **` | Shows every arithmetic operator on two numbers |
| [task2.js](task2.js) | Journey Time | `Math.floor()`, `%` | Splits minutes into hours and minutes |
| [task3.js](task3.js) | Change Machine | `%=` in steps | Breaks an amount into Kenyan notes and coins |
| [task4.js](task4.js) | PIN Match | `===`, `Number()` | Shows why typed input must be converted before `===` |
| [task5.js](task5.js) | SACCO Savings | `**`, brackets | Works out compound interest on savings |
| [task6.js](task6.js) | CAT Average | brackets, `Math.round()` | Averages three marks and checks for a pass |
| [task7.js](task7.js) | Running Balance | `+=`, `-=`, `++` | Updates a balance with `+=`, `-=` and `++` |
| [task8.js](task8.js) | Exam Eligibility | `&&`, `||`, `!` | Combines conditions with `&&`, `||` and `!` |

## Sample output

**Task 3: Change Machine**
```
Change to give (KES): 3786
1000 notes: 3
 500 notes: 1
 200 notes: 1
 100 notes: 0
  50 notes: 1
  20 coins: 1
  10 coins: 1
   5 coins: 1
   1 coins: 1
```

**Task 4: PIN Match**
```
Enter your PIN: 4821
Typed value: 4821 | type: string
typed === SAVED_PIN: false
Number(typed) === SAVED_PIN: true
Four digits long: true
Not the old PIN 0000: true
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
