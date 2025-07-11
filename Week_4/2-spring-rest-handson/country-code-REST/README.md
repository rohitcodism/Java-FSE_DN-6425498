# Hands-On: REST - Country Web Service

## What the code does

This Spring Boot REST application returns country details (India) in JSON format when a client sends a GET request to the `/country` endpoint.

- Loads the country details from Spring XML configuration.
- Converts the bean to a JSON response using Spring’s built-in HTTP message converters.
- Logs the method invocation using SLF4J.
- Can be tested on browser or Postman.

## Sample Output

**Request:**  
`GET http://localhost:8083/country`

**Response:**
```json
{
  "code": "IN",
  "name": "India"
}
```

## Output
![Sample Output Screenshot](/Week_4/2-spring-rest-handson/country-code-REST/outputs/image.png)
