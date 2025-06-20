# Financial Forecasting Using Recursion

This Java project demonstrates how recursion can be used to forecast future financial values based on past growth rates. It includes a simple recursive function to calculate the projected value for a future year.

---

## 1. Understanding Recursive Algorithms

### What is Recursion?

Recursion is a programming technique where a method calls itself to solve a smaller version of the same problem. It is useful for problems that can be broken down into subproblems of the same type.

Example:
Instead of using a loop to multiply growth multiple times, recursion breaks it into:

```text
futureValue(years) = growthRate × futureValue(years - 1)
```

---

## 2. Setup and Recursive Formula

We assume:

* `initialValue` = value at year 0
* `growthRate` = multiplier per year ( 1.05 for 5% annual growth )
* `years` = how far into the future to forecast

**Recursive Formula**:

```text
futureValue(years) = initialValue × (growthRate ^ years)
```

## 4. Output

![Forecast Output Screenshot](/Week_1/Data_structures_and_algorithms/Financial-Forecasting/output/image.png "Search Output")

---

## 5. Analysis

### Time Complexity

* **Time Complexity**: O(n)
  Each recursive call reduces the `years` by 1, resulting in `n` calls.

* **Space Complexity**: O(n) due to function call stack (recursion depth = years)

---

### Optimization

The current method recalculates values for every step. For large values of `years`, this can be inefficient.

#### Possible Optimizations

1. **Memoization**: Store intermediate results in an array or map.
2. **Iterative Approach**: Convert recursion to a loop for O(1) space.
