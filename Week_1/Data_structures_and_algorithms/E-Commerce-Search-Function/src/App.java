import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String target = "";

        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shoes", "Footwear"),
                new Product(3, "Watch", "Accessories"),
                new Product(4, "Mobile", "Electronics"),
                new Product(5, "Backpack", "Bags")
        };

        System.out.print("Enter the product name: ");
        target = sc.nextLine();

        // Linear Search
        System.out.println("Linear Search: ");
        Product result1 = SearchFunction.linearSearch(products, target);
        System.out.println(result1 != null ? result1 : "Product not found");

        // Binary Search
        SearchFunction.sortByName(products);
        System.out.println("\nBinary Search: ");
        Product result2 = SearchFunction.binarySearch(products, target);
        System.out.println(result2 != null ? result2 : "Product not found");

        sc.close();
    }
}
