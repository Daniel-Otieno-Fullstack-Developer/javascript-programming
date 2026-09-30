# JavaScript Objects and JSON

Eight beginner tasks on objects: object literals, lookups and counting, arrays of objects, and reading and writing JSON with `JSON.parse()` and `JSON.stringify()`.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Student Record | object literals | Reads, changes and lists an object's properties |
| [task2.js](task2.js) | Price List | `in`, `Object.keys()` | Looks up a price by name |
| [task3.js](task3.js) | Class List | arrays of objects | Filters, maps and reduces an array of objects |
| [task4.js](task4.js) | Word Frequency | counting | Counts words and draws a bar for each |
| [task5.js](task5.js) | Stock Tracker | updating values | Updates stock levels and flags reorders |
| [task6.js](task6.js) | Results From JSON | `JSON.parse()` | Reads student records from a JSON file and grades them |
| [task7.js](task7.js) | Save a Registration | `JSON.stringify()` | Writes an object to a JSON file and reads it back |
| [task8.js](task8.js) | Shop Order | `find()`, JSON data | Builds an order from JSON product data |

## Sample data

Tasks 6 and 8 read these sample JSON files. Run them from inside this folder so Node can find the files. Task 7 creates `registration.json` when it runs.

- [products.json](products.json)
- [students.json](students.json)

## Sample output

**Task 3: Class List**
```
ALL STUDENTS
1. Halima Noor     DICT  78
2. Kevin Mutua     CICT  45
3. Mercy Achieng   DICT  91
4. Omar Farah      CICT  38
5. Wanjiku Mwangi  DICT  66

DICT students: 3
Passed: Halima Noor, Mercy Achieng, Wanjiku Mwangi
Top student: Mercy Achieng (91)
```

**Task 7: Save a Registration**
```
Student name: Halima Noor
Course: DICT
Year of study: 2
Units (separate with commas): Networking, Web Design, JavaScript
Saved to registration.json
Halima Noor takes 3 units in year 2.
```

Contents of `registration.json` afterwards:
```
{
  "name": "Halima Noor",
  "course": "DICT",
  "year": 2,
  "units": [
    "Networking",
    "Web Design",
    "JavaScript"
  ],
  "registered": true
}
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.

Run the tasks from inside this folder so they can find the sample data files.
