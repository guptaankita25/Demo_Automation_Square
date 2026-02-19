/*
*If a function performs an action → don’t return anything
If a function provides data → return something



>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
---const match = countString.match(/\d+$/);

Let’s break this down:

🔹 /\d+$/ means:

\d+ → one or more digits

$ → at the end of the string

| Text                   | Match      |
| ---------------------- | ---------- |
| `"Total: 25"`          | `25`       |
| `"Showing 1–10 of 42"` | `42`       |
| `"Count"`              | ❌ no match |

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

--lastNumber = match ? match[0] : null;
This line is a conditional (ternary) operator that assigns a value to lastNumber based on whether a match was found:
If a number is found:

match[0] contains the matched digits

If not found:

lastNumber becomes null

This is called a ternary operator:

condition ? valueIfTrue : valueIfFalse




*/