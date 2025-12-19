# Day-wise Aggregation in JavaScript

## Problem Statement

Given a dictionary where:

- Key is a date in `YYYY-MM-DD` format
- Value is an integer

Return a new dictionary where:

- Key is the day of the week (`Mon`–`Sun`)
- Value is the sum of all values for that day

If a day is missing, its value is calculated as the **mean of the previous and next day**.

---

## Approach

1. Parse each date and determine its weekday.
2. Accumulate values per weekday.
3. Ensure all 7 days exist in the output.
4. Fill missing days using the average of adjacent days.

---

## Time & Space Complexity

- **Time:** O(N)
- **Space:** O(1)

---

## How to Run

```bash
node solution.test.js
```
