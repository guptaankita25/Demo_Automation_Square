/*
**There are two different kinds of “count” in UI automation:
| Type | Meaning |
| ---------------------------- | --------------------------------------------------- |
| **UI count (text)**          | A number displayed as text → “Total # Invoices: 12” |
| **Row count (DOM elements)** | Actual rows/cards/items rendered in UI              |

^^^^^^CASE 1: You want to verify ONLY what the UI TEXT shows
Total # Invoices: 12

This is TEXT validation, NOT array validation.

✔ Correct approach
Get text
Assert against expected value

await assertUtils.verifyElementToHaveText(
  this.locators.totalInvoiceCountText,
  '12'
);
When to use this:
Summary cards
Badges
Counters
Headers
Totals
📌 You do NOT use array count here
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


CASE 2: You want to verify ROW COUNT (actual invoices listed)
Invoice table
----------------
Row 1
Row 2
...
Row 12
This is DOM validation (multiple elements).

Correct approach
Use $$ locator
Count elements
Assert length

await assertUtils.verifyElementsArrayCount(
  this.locators.invoiceRows,
  12
);

When to use this
Tables
Lists
Cards
Rows
Repeated components

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Which function to use & WHEN
1️⃣ Verify UI text count
Use when number is displayed as text
verifyElementToHaveText(locator, '12')
or 
getElementText → expect(value).toBe(12)


2️⃣ Verify element/row count
Use when items are repeated in DOM
verifyElementsArrayCount(locator, expectedCount)
or
$$(locator).length

3️⃣ Verify UI count == row count (Recommended)

Use when both exist

UI text count === DOM row count


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
| Scenario          | Function                       |
| ----------------- | ------------------------------ |
| Verify label text | `verifyElementToHaveText`      |       
| Verify UI count   | `verifyUICount`                |
| Verify rows       | `verifyElementsArrayCount`     |
| UI vs rows        | `verifyUICountMatchesRowCount` |
| Dynamic wait      | `waitForTextToBe`              |

















*/
