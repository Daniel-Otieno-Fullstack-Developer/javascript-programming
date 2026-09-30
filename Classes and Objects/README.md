# JavaScript Classes and Objects

Eight intermediate tasks on classes: `constructor`, methods, private `#` fields, getters and setters, `static` members and inheritance with `extends`.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | First Student Class | `class`, `constructor` | Creates two student objects and introduces them |
| [task2.js](task2.js) | Rectangle | methods | Rectangle methods for area, perimeter and tiles |
| [task3.js](task3.js) | Bank Account | `#private`, `get` | An account that checks deposits and withdrawals |
| [task4.js](task4.js) | Marks With Validation | `get`, `set` | Validates marks with a setter and grades them |
| [task5.js](task5.js) | Gate Counter | `static`, `toString()` | Counts people in and out with a static property |
| [task6.js](task6.js) | Shop Stock | array of objects | Totals stock value from an array of objects |
| [task7.js](task7.js) | Person and Student | `extends`, `super` | Student and Lecturer extend Person |
| [task8.js](task8.js) | Library System | classes together | A library that lends and returns books |

## Sample output

**Task 3: Bank Account**
```
Account holder: Wanjiku Mwangi
Opening balance (KES): 5000
Deposit (KES): 2500
  Deposited KES 2500.00
Withdraw (KES): 10000
  Refused: balance is only KES 7500.00
Withdraw (KES): 3200
  Withdrew KES 3200.00
Wanjiku Mwangi's balance: KES 4300.00
```

**Task 8: Library System**
```
Omar Farah borrowed 'JavaScript for Beginners'.
'JavaScript for Beginners' is already out with Omar Farah.
No such book.
'JavaScript for Beginners' is back on the shelf.
Mercy Achieng borrowed 'Web Design with HTML'.
Library report:
  B1  JavaScript for Beginners  available
  B2  Networking Essentials     available
  B3  Web Design with HTML      out: Mercy Achieng
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
