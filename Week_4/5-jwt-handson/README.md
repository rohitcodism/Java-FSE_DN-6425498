# Hands-On: Create authentication service that returns JWT 

## What the code does

This Spring Boot application exposes a **JWT-based authentication service** at the `/authenticate` endpoint. It performs the following:

- Accepts **Basic Auth credentials** (`username:password`) from the request header.
- Verifies the user credentials (hardcoded or via UserDetailsService).
- Generates a **JWT token** using a secret key.
- Returns the token in JSON format.

## Endpoint Specification

- **Method:** `GET`
- **URL:** `http://localhost:8090/authenticate`
- **Authentication:** Basic (via `-u` in curl or Postman authorization header)
- **Response:** JSON containing the generated JWT token.

## Sample Usage

### Request (Using curl)

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
````

### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzEw..."
}
```

## Output

![JWT Token Output](/Week_4/5-jwt-handson/outputs/image.png)
