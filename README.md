# JavaScript Programming

JavaScript exercises and worked solutions from the ICT courses I teach at Delhi College, Eastleigh, Nairobi.

The course runs from the first variables through to asynchronous code. Each topic folder has eight tasks, each with a tested solution, and the examples use everyday local data: KES prices, matatu fares, M-Pesa balances and class registers. The code is modern JavaScript throughout: `let` and `const`, `===`, and arrow functions.

## Contents

| # | Topic | What it covers | Level |
|---|---|---|---|
| 1 | [Variables and Data Types](Variables%20and%20Data%20Types) | `let`, `const`, `typeof`, template literals, `Number()` | Beginner |
| 2 | [Operators and Expressions](Operators%20and%20Expressions) | Arithmetic, `%`, `==` vs `===`, logical operators, type conversion | Beginner |
| 3 | [Decisions](Decisions) | `if`, `else if`, `else`, `switch`, ternary, truthy and falsy | Beginner |
| 4 | [Loops](Loops) | `for`, `while`, `do...while`, `break`, `continue`, nested loops | Beginner |
| 5 | [Functions](Functions) | Declarations, arrow functions, parameters, `return`, scope | Beginner |
| 6 | [Arrays and Array Methods](Arrays%20and%20Array%20Methods) | `push`/`pop`, `indexOf`, `forEach`, `map`, `filter`, `reduce`, `sort` | Beginner |
| 7 | [Strings](Strings) | `length`, `slice`, `indexOf`, `split`/`join`, `toUpperCase`, `includes` | Beginner |
| 8 | [Objects and JSON](Objects%20and%20JSON) | Object literals, arrays of objects, `JSON.stringify` / `JSON.parse` | Beginner |
| 9 | [DOM and Events](DOM%20and%20Events) | `querySelector`, changing text and styles, click and input events, forms | Intermediate |
| 10 | [Classes and Objects](Classes%20and%20Objects) | `class`, `constructor`, methods, getters and setters, `extends` | Intermediate |
| 11 | [Asynchronous JavaScript](Asynchronous%20JavaScript) | `setTimeout`, callbacks, promises, `async`/`await` | Intermediate |

## In each folder

- **README**: what each task does, with sample output.
- **task1.js … task8.js**: a worked solution for each task.
- **Sample data**: some folders also have the JSON files their tasks read.
- **DOM and Events**: each task is a `taskN.html` page with its own `taskN.js`, plus a shared `style.css`.

## Installing

You need [Node.js](https://nodejs.org) 18 or newer. Check with:

```bash
node --version
```

Tasks that read the keyboard use the [prompt-sync](https://www.npmjs.com/package/prompt-sync) package. After cloning or downloading this repository, install it once from the root folder:

```bash
npm install
```

This reads `package.json` and creates a `node_modules` folder, which is not stored in the repository.

## Running a task

Open a terminal in the topic folder and run:

```bash
node task1.js
```

The DOM and Events tasks run in a web browser instead: double-click `task1.html` to open it, and press F12 to see the Console.
