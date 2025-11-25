/**
 1. String Methods [Used to work with text]
 | Method           | Example                  | What it does                 |
| ---------------- | ------------------------ | ---------------------------- |
| `.toString()`    | `num.toString()`         | Converts a value to a string |
| `.toUpperCase()` | `"hello".toUpperCase()`  | → `"HELLO"`                  |
| `.toLowerCase()` | `"HELLO".toLowerCase()`  | → `"hello"`                  |
| `.includes()`    | `"apple".includes("pp")` | Checks if substring exists   |
| `.split()`       | `"a,b,c".split(",")`     | Splits text into an array    |
| `.trim()`        | `" hello ".trim()`       | Removes extra spaces         |


2. Number Methods [Used with numbers] 

| Method        | Example            | What it does             |
| ------------- | ------------------ | ------------------------ |
| `.toFixed()`  | `5.678.toFixed(2)` | → `"5.68"`               |
| `.toString()` | `123.toString()`   | Converts number to text  |
| `Number()`    | `Number("55")`     | Converts string → number |



3. Array Methods [Very commonly used, especially in automation tests.]

| Method        | Example                | What it does         |
| ------------- | ---------------------- | -------------------- |
| `.push()`     | `arr.push(5)`          | Adds item to end     |
| `.pop()`      | `arr.pop()`            | Removes last item    |
| `.shift()`    | `arr.shift()`          | Removes first item   |
| `.unshift()`  | `arr.unshift(1)`       | Adds to beginning    |
| `.map()`      | `arr.map(x => x*2)`    | Creates new array    |
| `.filter()`   | `arr.filter(x => x>2)` | Filters data         |
| `.find()`     | `arr.find(x => x===3)` | Finds one item       |
| `.includes()` | `arr.includes(5)`      | Checks if exists     |
| `.join()`     | `arr.join(",")`        | Turns array → string |

4.Object Methods [Used for numbers, randomness, etc.]

| Method            | Example              | What it does        |
| ----------------- | -------------------- | ------------------- |
| `Object.keys()`   | `Object.keys(obj)`   | Returns object keys |
| `Object.values()` | `Object.values(obj)` | Returns values      |
| `Object.assign()` | Combines objects     |                     |

5. Math Methods [Used for mathematical operations]
| Method          | Example           | What it does |
| --------------- | ----------------- | ------------ |
| `Math.random()` | Random number 0–1 |              |
| `Math.floor()`  | Rounds down       |              |
| `Math.ceil()`   | Rounds up         |              |
| `Math.round()`  | Normal rounding   |              |

6.JSON Methods [Very useful when working with APIs or test data.]

| Method             | Example                | What it does |
| ------------------ | ---------------------- | ------------ |
| `JSON.parse()`     | Converts text → object |              |
| `JSON.stringify()` | Converts object → text |              |

7.Async/Await Methods [Used for asynchronous code, like your enterText() and random number generator]

| Command    | What it does                |
| ---------- | --------------------------- |
| `async`    | Declares async function     |
| `await`    | Waits for promise to finish |
| `.then()`  | Runs after promise resolves |
| `.catch()` | Handles errors              |

8.Console Methods [Useful for debugging]

| Method            | What it does        |
| ----------------- | ------------------- |
| `console.log()`   | Print messages      |
| `console.error()` | Print errors        |
| `console.table()` | Print table of data |

9.math.pow [Math.pow(base, exponent)

base → the number you want to raise
exponent → the power you want to raise it to
Math.pow(2, 3);   // 8   (2³)]

10.  in the cases of locators, you can use the following CSS attribute selectors to locate elements based on partial matches of their attributes:
| Operator | Meaning           | Example          |
| -------- | ----------------- | ---------------- |
| `^=`     | Starts with       | `id^="mat-"`     |
| `$=`     | Ends with         | `id$="-button"`  |
| `*=`     | Contains anywhere | `id*="calendar"` |

11.Use following:: when the element you want to reach is NOT a direct sibling or child, but appears somewhere after the reference element in the page's DOM, e.g.:
When the target element is not directly connected (not a sibling or child).

When the layout is complex, such as Angular/Material components.

When the element visually appears after another but DOM structure is nested.

🧠 How following:: works

It selects all nodes in the document that come after the current node (in source order).

It does not check level or hierarchy.

It’s broader than following-sibling::, which only matches siblings.

| You use it when…                                             | Why?                          |
| ------------------------------------------------------------ | ----------------------------- |
| The desired element is somewhere *after* a reference element | Ensures order-based searching |
| Parent/child or sibling relationships are unreliable         | DOM often messy in frameworks |
| You want the first matching element after another            | Use `[1]` as in your locator  |

12. return date.getDate();

.getDate() is a built-in method

It returns the day of the month (1–31)  [It returns today’s day number (like 1, 2, 3 … 31).]


















 */
