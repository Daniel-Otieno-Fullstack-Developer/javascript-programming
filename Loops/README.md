# JavaScript Loops

Eight beginner tasks on repeating code with `for`, `while` and `do...while`, sentinel values, `break` and `continue`, and nested loops.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Countdown | `for`, `--`, `+= 2` | Counts down, then lists even numbers |
| [task2.js](task2.js) | Times Table | `for` | Prints a 12-line times table |
| [task3.js](task3.js) | Weekly Sales | running total | Reads each day's sales and totals them |
| [task4.js](task4.js) | Class Average | `while` + sentinel | Totals marks until the -1 sentinel |
| [task5.js](task5.js) | PIN Check | `do...while` | Up to three PIN attempts with `do...while` |
| [task6.js](task6.js) | Savings Goal | `while` | Repeats weekly savings until a goal is met |
| [task7.js](task7.js) | Guess the Number | `break`, `continue` | Hints until the right guess, using `break` and `continue` |
| [task8.js](task8.js) | Multiplication Grid | nested `for` | Builds a multiplication grid with nested loops |

## Sample output

**Task 5: PIN Check**
```
Enter PIN: 1234
Wrong PIN. 2 attempt(s) left.
Enter PIN: 0000
Wrong PIN. 1 attempt(s) left.
Enter PIN: 2580
PIN accepted. Welcome.
```

**Task 8: Multiplication Grid**
```
Grid size: 6
   |   1   2   3   4   5   6
---+------------------------
 1 |   1   2   3   4   5   6
 2 |   2   4   6   8  10  12
 3 |   3   6   9  12  15  18
 4 |   4   8  12  16  20  24
 5 |   5  10  15  20  25  30
 6 |   6  12  18  24  30  36
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
