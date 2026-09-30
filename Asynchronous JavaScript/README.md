# JavaScript Asynchronous JavaScript

Eight intermediate tasks on asynchronous code: timers, callbacks, promises, `async`/`await` and reading local JSON files. There are no internet calls, so every run gives the same output.

## Tasks

| File | Task | Covers | What it does |
|---|---|---|---|
| [task1.js](task1.js) | Exam Countdown | `setInterval()` | Counts down once a second, then stops the timer |
| [task2.js](task2.js) | Morning Announcements | `setTimeout()` | Schedules messages that appear in order of their delay |
| [task3.js](task3.js) | Fee Payment Callbacks | callbacks | Handles a slow payment with success and failure callbacks |
| [task4.js](task4.js) | M-Pesa Promise | promises | Chains two transfers and catches the one that fails |
| [task5.js](task5.js) | Registration Steps | `then()` chains | Runs registration steps in order and stops on an error |
| [task6.js](task6.js) | Load Student Records | `async`/`await` | Reads a JSON file with `await` and handles a missing file |
| [task7.js](task7.js) | Fee Report From Two Files | `Promise.all()` | Loads two files at once and joins them into a report |
| [task8.js](task8.js) | Results Lookup | `await` in a loop | Looks up results after a simulated delay |

## Sample data

Tasks 6, 7 and 8 read these sample JSON files. Run them from inside this folder so Node can find the files.

- [fees.json](fees.json)
- [results.json](results.json)
- [students.json](students.json)

## Sample output

**Task 4: M-Pesa Promise**
```
Sending KES 1,500 to Amina...
Sent KES 1500 to Amina Yusuf.
New balance: KES 3500
Sending KES 9,000 to Brian...
Failed: KES 9000 is more than your balance
Thank you for using M-Pesa.
```

**Task 7: Fee Report From Two Files**
```
Loading students and fees at the same time...
FEE REPORT
DC101  Halima Noor     cleared
DC104  Kevin Mutua     owes KES 7,500
DC107  Mercy Achieng   cleared
DC112  Omar Farah      owes KES 24,000
DC118  Wanjiku Mwangi  owes KES 6,000
Total owed: KES 37,500
```

## Run a task

```bash
node task1.js
```

Run `npm install` once in the root of the repository first, so the tasks that read the keyboard can find `prompt-sync`.

Run the tasks from inside this folder so they can find the sample data files.
