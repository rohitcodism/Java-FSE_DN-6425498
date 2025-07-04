package com.cognizant.jpacomparison;

import com.cognizant.jpacomparison.model.Employee;
import com.cognizant.jpacomparison.springdata.EmployeeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class JpaComparisonApplicationTests {

    @Autowired
    private EmployeeService employeeService;

    @Test
    void contextLoads() {
        // Test that Spring context loads successfully
        assertNotNull(employeeService);
    }

    @Test
    void testSpringDataJpaOperations() {
        // Test Spring Data JPA CRUD operations
        
        // Create
        Employee employee = new Employee("Test User", "test@example.com", "IT", 50000.0);
        Employee savedEmployee = employeeService.addEmployee(employee);
        assertNotNull(savedEmployee.getId());
        
        // Read
        Employee foundEmployee = employeeService.findEmployeeById(savedEmployee.getId());
        assertNotNull(foundEmployee);
        assertEquals("Test User", foundEmployee.getName());
        
        // Update
        foundEmployee.setSalary(55000.0);
        Employee updatedEmployee = employeeService.updateEmployee(foundEmployee);
        assertEquals(55000.0, updatedEmployee.getSalary());
        
        // Query
        var itEmployees = employeeService.findEmployeesByDepartment("IT");
        assertTrue(itEmployees.size() > 0);
        
        // Delete
        employeeService.deleteEmployee(savedEmployee.getId());
        Employee deletedEmployee = employeeService.findEmployeeById(savedEmployee.getId());
        assertNull(deletedEmployee);
    }
}
