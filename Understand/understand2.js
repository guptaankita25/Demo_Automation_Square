/**
 * 1.| Operator | Meaning          | Strict? | Example             |   |        |
| -------- | ---------------- | ------- | ------------------- | - | ------ |
| ==       | equal            | ❌       | `5 == "5"` → true   |   |        |
| ===      | equal            | ✅       | `5 === "5"` → false |   |        |
| !=       | not equal        | ❌       | `5 != "5"` → false  |   |        |
| !==      | not equal        | ✅       | `5 !== "5"` → true  |   |        |
| >        | greater          | —       | `7 > 3`             |   |        |
| <        | less             | —       | `2 < 5`             |   |        |
| >=       | greater or equal | —       | `5 >= 5`            |   |        |
| <=       | less or equal    | —       | `3 <= 9`            |   |        |
| &&       | AND              | —       | `true && false`     |   |        |
| ||       | OR               | —       | `true               |   | false` |
| !        | NOT              | —       | `!true`             |   |        |

 
 2. 🔹 1. push()

Adds one or more elements to the end of an array.
Returns the new length.

let arr = [1, 2];
arr.push(3); // [1, 2, 3]

🔹 2. pop()

Removes the last element from an array.
Returns the removed element.

let arr = [1, 2, 3];
arr.pop(); // returns 3, arr becomes [1, 2]

🔹 3. shift()

Removes the first element from an array.
Returns the removed element.

let arr = [1, 2, 3];
arr.shift(); // returns 1, arr becomes [2, 3]

🔹 4. unshift()

Adds elements to the start of an array.
Returns the new length.

let arr = [2, 3];
arr.unshift(1); // [1, 2, 3]

🔹 5. slice()

Copies a portion of an array (does NOT modify original).
Returns a new array.

let arr = [1, 2, 3, 4];
arr.slice(1, 3); // [2, 3]

🔹 6. splice()

Adds, removes, or replaces elements in an array.
Modifies the original array.

let arr = [1, 2, 3, 4];
arr.splice(1, 2); // removes 2 elements starting at index 1 → [1, 4]

🔹 7. map()

Creates a new array by applying a function to each element.

let arr = [1, 2, 3];
arr.map(x => x * 2); // [2, 4, 6]

🔹 8. filter()

Creates a new array with elements that match a condition.

let arr = [1, 2, 3, 4];
arr.filter(x => x % 2 === 0); // [2, 4]


9.| Feature              | CSS Selector                    | XPath                                  |
| -------------------- | ------------------------------- | -------------------------------------- |
| **Starts with**      | `tag[attr=""]`, `.class`, `#id` | `//` or `.//`                          |
| **Speed**            | Faster                          | Slower                                 |
| **Readability**      | Easier                          | Harder                                 |
| **Select by text()** | ❌ No                            | ✔ Yes                                  |
| **Navigate up DOM**  | ❌ No                            | ✔ Yes                                  |
| **Best Use Case**    | Simple element                  | Complex structure / text-based element |

10.| Symbol | Meaning        | Searches       | Strict? |
| ------ | -------------- | -------------- | ------- |
| `/`    | direct child   | one level only | Yes ✔   |
| `//`   | any descendant | all levels     | No ✖    |


11.

 */