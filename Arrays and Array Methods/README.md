# JavaScript Arrays and Array Methods

Eight beginner tasks on arrays: indexes, `push`/`pop`, searching, and the array methods `forEach`, `map`, `filter`, `reduce` and `sort`.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Class List | indexes, `forEach()` | Reads items by index and slice, then numbers them |
| [task2.js](task2.js) | Shopping List | `push`, `splice`, `pop` | Adds and removes items with array methods |
| [task3.js](task3.js) | Weekly Sales Report | `reduce()`, `Math.max()` | Totals a week of sales and finds the best and worst day |
| [task4.js](task4.js) | Passed Students | `filter()`, `some()`, `every()` | Selects passing students with `filter()` |
| [task5.js](task5.js) | Price List With VAT | `map()` | Transforms prices and labels with `map()` |
| [task6.js](task6.js) | Search the Register | linear search | Searches an array with a loop and with built-in methods |
| [task7.js](task7.js) | Top Marks | `sort((a, b) => b - a)` | Sorts marks numerically and slices the top three |
| [task8.js](task8.js) | Marks Table | array of arrays | Averages rows and columns of a 2D array |

## Sample output

**Task 3: Weekly Sales Report**
```
Sales on Mon (KES): 4200
Sales on Tue (KES): 3850.5
Sales on Wed (KES): 5100
Sales on Thu (KES): 2975
Sales on Fri (KES): 6320
Sales on Sat (KES): 7480

Total sales:   KES 29925.50
Average a day: KES 4987.58
Best day:      Sat (KES 7480.00)
Worst day:     Thu (KES 2975.00)
```

**Task 4: Passed Students**
```
All marks:     78, 45, 91, 38, 66, 52
Passed marks:  78, 91, 66, 52
Passed:        Halima, Mercy, Wanjiku, Yusuf
Pass rate:     4 of 6
Anyone scored 90+?   true
Everyone passed?     false
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
