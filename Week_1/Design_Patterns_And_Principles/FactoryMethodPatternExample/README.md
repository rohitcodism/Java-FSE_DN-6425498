# Factory Method Pattern Example

This Java project demonstrates the Factory Method Design Pattern by showing how different types of documents (Word, PDF, and Excel) can be created using separate factory classes. The main goal of this pattern is to allow the creation of objects without specifying their exact class, promoting flexibility and scalability in the code.

## Overall Process

- An interface `Document` defines three common methods `open()`, `edit()` and `close()` that all document types must implement.

- Three concrete classes (`WordDocument`, `PdfDocument`, and `ExcelDocument`) implement the `Document` interface and define their own versions of the `open()`, `edit()` and `close()` methods.

- An abstract class `DocumentFactory` declares a method `createDocument()`.

- Concrete factory classes (`WordFactory`, `PdfFactory`, and `ExcelFactory`) extend `DocumentFactory` and return instances of specific document types.

- The `Main` class demonstrates the use of different factories to create and open documents.

## Output

![Alt text](/Week_1/Design_Patterns_And_Principles/FactoryMethodPatternExample/output/image.png "Factory Method Output")

The output shows that different document types are created using their respective factory classes. Each document correctly calls its own `open()`, `edit()` and `close()` methods, proving that the Factory Method Pattern is implemented successfully.
