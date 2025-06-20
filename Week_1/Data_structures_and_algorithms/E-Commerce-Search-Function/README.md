
# E-commerce Platform Search Function

This Java project demonstrates how to implement and compare `Linear Search` and `Binary Search` to build an efficient product search system in an e-commerce platform.

## 1. Understanding Asymptotic Notation

### Big O Notation

Big O notation is used to describe how an algorithm performs as the input size increases. It helps estimate the worst-case performance, regardless of hardware or exact implementation.

Example:

* **O(n)** → Time grows linearly with input size
* **O(log n)** → Time grows slowly even with large inputs (more efficient)

---

## 2. Best, Average, and Worst Case Scenarios

| Algorithm     | Best Case | Average Case | Worst Case |
| ------------- | --------- | ------------ | ---------- |
| Linear Search | O(1)      | O(n)         | O(n)       |
| Binary Search | O(1)      | O(log n)     | O(log n)   |

---

## Output

![Search Output Screenshot](/Week_1/Data_structures_and_algorithms/E-Commerce-Search-Function/output/image.png "Search Output")

The output shows the result of both linear search and binary search for a product with the name Laptop and Watch. It confirms that both methods return the correct product if found, demonstrating the effectiveness of the search logic.

## Analysis

* **Time Complexity**:

  | Algorithm     | Time Complexity |
  | ------------- | --------------- |
  | Linear Search | O(n)            |
  | Binary Search | O(log n)        |

* **Comparison**:
  * Linear search checks each item one by one. It works on unsorted data but becomes slow as the list grows.
  * Binary search is faster but only works when the data is sorted.
