# Exercise 1: Configuring a Basic Spring Application & Exercise 2: Implementing Dependency Injection

This project sets up a simple Spring Framework application for managing a library. It uses Spring Core to define and wire together service and repository classes for handling books.

## **Implementation of Excercise 1:**  
- The application uses an XML file (`applicationContext.xml`) to configure Spring beans for `BookService` and `BookRepository`.
- The main class loads the Spring context and demonstrates basic usage of these beans.

## **Implementation of Excercise 2:** 

- This code also demonstrates how to use Spring's Inversion of Control (IoC) and Dependency Injection (DI) to manage the relationship between `BookService` and `BookRepository`. The XML configuration is updated to inject the repository into the service, and the service class is modified to accept the repository via a setter method.

## Output

![Sample Output](/Week_3/Spring%20Core_Maven/Excercise%201%20&%202/outputs/image.png)
