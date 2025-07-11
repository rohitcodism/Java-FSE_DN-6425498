# Hands-on 4: Spring Core – Load Country from Spring Configuration XML

## What the code does

This Spring Boot application demonstrates how to use Spring's XML-based configuration to define a simple bean representing a country. The application loads the bean using `ApplicationContext`, logs the construction and method calls, and prints the country details (ISO code and name).

The key components:
- A `Country` class with `code` and `name` properties, using setters/getters with debug logs.
- A Spring XML configuration (`country.xml`) that defines the `country` bean.
- A `displayCountry()` method that reads the bean and logs it.

## Output

![output](/Week_4/1-spring-rest-handson/hands-on-4/outputs/image.png)
