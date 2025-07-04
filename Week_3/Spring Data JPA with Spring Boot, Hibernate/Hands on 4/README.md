# Hands On 4: JPA vs Hibernate vs Spring Data JPA Comparison Project

## Implementation Overview

This project demonstrates three Java persistence approaches:
- **JPA**: Direct `EntityManager` usage
- **Spring Data JPA**: Repository pattern with Spring Boot
- **Hibernate**: Direct `SessionFactory` usage (currently disabled)

## Conclusion

When we compare the three approaches:
- **JPA** gives us fine-grained control, but we need to write more boilerplate code.
- **Hibernate** adds extra features beyond JPA, but it can make things more complex and doesn't integrate as smoothly with Spring Boot.
- **Spring Data JPA** lets us access data with minimal code, taking advantage of Spring Boot's auto-configuration and repository abstraction.

Overall, we find Spring Data JPA to be the most productive choice for typical Spring Boot applications, while JPA and Hibernate work well when we need more customization.

## Output 

![Sample Output](/Week_3/Spring%20Data%20JPA%20with%20Spring%20Boot,%20Hibernate/Hands%20on%204/outputs/image.png)
