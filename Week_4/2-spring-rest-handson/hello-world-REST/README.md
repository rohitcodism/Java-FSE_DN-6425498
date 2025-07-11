# Hands-on: Hello World RESTful Web Service

## What the code does

This Spring Boot application sets up a RESTful web service that responds with the message:

Hello World!!


- It listens for **GET** requests on the URL: `http://localhost:8083/hello`
- It uses a controller class `HelloController` located in the package:  
  `com.cognizant.springlearn.controller`
- Inside the controller, the `sayHello()` method returns the hardcoded string `"Hello World!!"`
- Logs are included at the **start** and **end** of the method for debugging purposes.

## Output Image

![Output](/Week_4/2-spring-rest-handson/hello-world-REST/outputs/image.png)
