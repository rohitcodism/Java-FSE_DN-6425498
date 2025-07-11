# Hands-On: Spring REST – Country Web Services

## What the code does

This Spring Boot application exposes two REST endpoints that serve country details using Spring's Web framework and XML-based configuration.

### 1. `/country` – Get India Details

* Loads the `"country"` bean from `country.xml`.
* Returns details of India (`code = IN`, `name = India`) in JSON format.
* Uses Spring’s `ApplicationContext` to load XML beans.
* Demonstrates how XML bean configuration integrates with REST controllers.

**Request:**

```
GET http://localhost:8083/country
```

**Response:**

```json
{
  "code": "IN",
  "name": "India"
}
```

---

# Hands-On: Spring REST – Get country based on country code 

### 2. `/api/country/{code}` – Get Country by Code

* Accepts a **country code** as path variable (`/countries/in`, `/countries/us`, etc.).
* Loads a list of countries from `countryList` bean in `country.xml`.
* Performs a **case-insensitive** search on the country code.
* Returns the matching country in JSON format.
* Demonstrates use of `@PathVariable`, lambda filtering, and service layer.

**Request:**

```
GET http://localhost:8083/api/country/in
```

**Response:**

```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Output - Country Web Services

### `/country` endpoint

![Country Output](/Week_4/2-spring-rest-handson/country-code-REST/outputs/image.png)

## Output - Country Web Services

### `/api/country/in` endpoint

![Country Output](/Week_4/2-spring-rest-handson/country-code-REST/outputs/country-code.png)