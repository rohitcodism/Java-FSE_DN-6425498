
# E-commerce Platform Search Function

This Java project demonstrates how to implement and compare `Linear Search` and `Binary Search` to build an efficient product search system in an e-commerce platform.

## Output

![Search Output Screenshot](/Week_1/Data_structures_and_algorithms/E-Commerce-Search-Function/output/image.png "Search Output")

The output shows the result of both linear search and binary search for a product with the name Laptop and Watch. It confirms that both methods return the correct product if found, demonstrating the effectiveness of the search logic.

## Description

- `Product.java`: Defines the product structure with attributes like product ID, name, and category.
- `SearchFunction.java`: Contains the implementation of both linear and binary search.
- `Main.java`: Tests both search methods using a sample array of products.

## Analysis

- **Time Complexity**:
  - Linear Search: O(n)
  - Binary Search: O(log n)
- **Comparison**:
  - Linear search checks each item one by one. It works on unsorted data but becomes slow as the list grows.
  - Binary search is faster but only works when the data is sorted.
- **Conclusion**:
  - For large datasets where search speed is important and sorting is manageable, binary search is more suitable.
  - For smaller or dynamic datasets where sorting is not guaranteed, linear search can be used.