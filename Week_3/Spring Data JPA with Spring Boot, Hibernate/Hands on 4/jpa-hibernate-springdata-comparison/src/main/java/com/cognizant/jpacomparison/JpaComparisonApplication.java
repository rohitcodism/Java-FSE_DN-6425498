package com.cognizant.jpacomparison;

import com.cognizant.jpacomparison.model.Employee;
import com.cognizant.jpacomparison.jpa.JpaEmployeeDao;
// import com.cognizant.jpacomparison.hibernate.HibernateEmployeeDao;
import com.cognizant.jpacomparison.springdata.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class JpaComparisonApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(JpaComparisonApplication.class);

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(JpaComparisonApplication.class, args);

        // Get beans from context
        JpaEmployeeDao jpaDao = context.getBean(JpaEmployeeDao.class);
        // HibernateEmployeeDao hibernateDao = context.getBean(HibernateEmployeeDao.class);
        EmployeeService springDataService = context.getBean(EmployeeService.class);

        LOGGER.info("=== Demonstrating JPA, Hibernate, and Spring Data JPA Differences ===");

        // Demonstrate Spring Data JPA (Simplest approach)
        demonstrateSpringDataJPA(springDataService);

        // Demonstrate Pure JPA
        demonstratePureJPA(jpaDao);

        // Demonstrate Hibernate (disabled due to configuration complexity in Spring Boot)
        // demonstrateHibernate(hibernateDao);
        LOGGER.info("\n--- Hibernate Demonstration ---");
        LOGGER.info("Hibernate DAO is disabled in this Spring Boot demo due to configuration conflicts.");
        LOGGER.info("In practice, you would use either pure Hibernate configuration OR Spring Boot auto-configuration,");
        LOGGER.info("but mixing both approaches can lead to circular dependencies.");
        LOGGER.info("See the HibernateEmployeeDao class for complete Hibernate implementation example.");

        LOGGER.info("=== Comparison Complete ===");
    }

    private static void demonstrateSpringDataJPA(EmployeeService service) {
        LOGGER.info("\n--- Spring Data JPA Demonstration ---");
        
        try {
            // Create employees
            Employee emp1 = new Employee("John Doe", "john.doe@company.com", "IT", 75000.0);
            Employee emp2 = new Employee("Jane Smith", "jane.smith@company.com", "HR", 65000.0);
            Employee emp3 = new Employee("Bob Johnson", "bob.johnson@company.com", "IT", 80000.0);

            // Save employees (minimal code)
            service.addEmployee(emp1);
            service.addEmployee(emp2);
            service.addEmployee(emp3);
            LOGGER.info("Spring Data JPA: Added 3 employees with minimal code");

            // Query employees (derived queries)
            List<Employee> itEmployees = service.findEmployeesByDepartment("IT");
            LOGGER.info("Spring Data JPA: Found {} IT employees using derived query", itEmployees.size());

            // Advanced query
            List<Employee> highSalaryEmployees = service.findEmployeesWithHighSalary(70000.0);
            LOGGER.info("Spring Data JPA: Found {} employees with salary > 70000", highSalaryEmployees.size());

            // Business logic
            long totalCount = service.getTotalEmployeeCount();
            LOGGER.info("Spring Data JPA: Total employees count: {}", totalCount);

        } catch (Exception e) {
            LOGGER.error("Spring Data JPA Demo Error: {}", e.getMessage());
        }
    }

    private static void demonstratePureJPA(JpaEmployeeDao jpaDao) {
        LOGGER.info("\n--- Pure JPA Demonstration ---");
        
        try {
            // Create and save employee (more manual code)
            Employee emp = new Employee("Alice Brown", "alice.brown@company.com", "Finance", 70000.0);
            Integer empId = jpaDao.addEmployee(emp);
            LOGGER.info("Pure JPA: Added employee with ID: {} (manual transaction management)", empId);

            // Find by ID
            Employee foundEmp = jpaDao.findEmployeeById(empId);
            LOGGER.info("Pure JPA: Found employee: {}", foundEmp.getName());

            // Query with JPQL
            List<Employee> financeEmployees = jpaDao.findEmployeesByDepartment("Finance");
            LOGGER.info("Pure JPA: Found {} Finance employees using JPQL", financeEmployees.size());

        } catch (Exception e) {
            LOGGER.error("Pure JPA Demo Error: {}", e.getMessage());
        }
    }

    // private static void demonstrateHibernate(HibernateEmployeeDao hibernateDao) {
    //     LOGGER.info("\n--- Hibernate Demonstration ---");
    //     
    //     try {
    //         // Create and save employee (Hibernate-specific APIs)
    //         Employee emp = new Employee("Charlie Wilson", "charlie.wilson@company.com", "Marketing", 60000.0);
    //         Integer empId = hibernateDao.addEmployee(emp);
    //         LOGGER.info("Hibernate: Added employee with ID: {} (using Session and HQL)", empId);
    //
    //         // Hibernate-specific query
    //         List<Employee> highSalaryEmps = hibernateDao.findEmployeesWithSalaryGreaterThan(65000.0);
    //         LOGGER.info("Hibernate: Found {} employees with salary > 65000 using HQL", highSalaryEmps.size());
    //
    //         // Show all employees
    //         List<Employee> allEmployees = hibernateDao.getAllEmployees();
    //         LOGGER.info("Hibernate: Total employees in database: {}", allEmployees.size());
    //
    //     } catch (Exception e) {
    //         LOGGER.error("Hibernate Demo Error: {}", e.getMessage());
    //     }
    // }
}
