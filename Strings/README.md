# JavaScript Strings

Eight beginner tasks on working with text: `length`, indexes and `slice()`, case methods, `indexOf()` and `includes()`, `split()` and `join()`, and padded reports.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Name Formatter | `trim()`, `split()`, `join()` | Cleans a name and prints its case forms and initials |
| [task2.js](task2.js) | Username Generator | `slice()`, `toLowerCase()` | Builds a username and email from name and year |
| [task3.js](task3.js) | Letter Counter | `for...of` | Counts letters, digits and spaces |
| [task4.js](task4.js) | Palindrome Checker | reversing a string | Checks whether text reads the same backwards |
| [task5.js](task5.js) | M-Pesa Message Reader | `indexOf()`, `slice()` | Extracts details from an M-Pesa style SMS |
| [task6.js](task6.js) | Word Tools | `split()`, `join()` | Splits, reverses, joins and counts words |
| [task7.js](task7.js) | Password Strength | case tests, `join()` | Tests a password against four rules until it passes |
| [task8.js](task8.js) | Receipt Printer | `padStart()`, `padEnd()` | Prints an aligned receipt with VAT |

## Sample output

**Task 5: M-Pesa Message Reader**
```
Transaction code: QJK7TX2L9P
Amount sent:      KES 1250.00
Sent to:          AMINA YUSUF
Balance left:     KES 3480.50
Sent to Amina?    true
```

**Task 8: Receipt Printer**
```
==================================
      DELHI COLLEGE BOOKSHOP      
        Eastleigh, Nairobi        
==================================
Exercise books x10          650.00
Biro pens x5                100.00
Geometry set                380.00
Scientific calculator     1,850.00
----------------------------------
TOTAL                     2,980.00
Includes VAT (16%)          411.03
==================================
           Asante sana!           
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.
