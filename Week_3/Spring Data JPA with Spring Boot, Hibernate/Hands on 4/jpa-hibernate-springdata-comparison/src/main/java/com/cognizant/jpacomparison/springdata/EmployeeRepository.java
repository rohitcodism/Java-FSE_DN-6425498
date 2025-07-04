package com.cognizant.jpacomparison.springdata;

import com.cognizant.jpacomparison.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA Repository Interface
 * - Extends JpaRepository for automatic CRUD operations
 * - No implementation needed - Spring generates it automatically
 * - Automatic transaction management
 * - Minimal boilerplate code
 * - Built-in pagination and sorting support
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    
    // Derived query methods - Spring Data JPA generates implementation automatically
    
    /**
     * Find employees by department name
     * Method name follows Spring Data JPA naming convention
     */
    List<Employee> findByDepartment(String department);
    
    /**
     * Find employees by name containing specific text (case-insensitive)
     */
    List<Employee> findByNameContainingIgnoreCase(String name);
    
    /**
     * Find employees with salary greater than specified amount
     */
    List<Employee> findBySalaryGreaterThan(Double salary);
    
    /**
     * Find employees by department and salary greater than specified amount
     */
    List<Employee> findByDepartmentAndSalaryGreaterThan(String department, Double salary);
    
    /**
     * Find employees ordered by salary in descending order
     */
    List<Employee> findAllByOrderBySalaryDesc();
    
    // Custom JPQL queries using @Query annotation
    
    /**
     * Custom query to find employees by email domain
     */
    @Query("SELECT e FROM Employee e WHERE e.email LIKE %:domain%")
    List<Employee> findByEmailDomain(@Param("domain") String domain);
    
    /**
     * Custom query to get average salary by department
     */
    @Query("SELECT e.department, AVG(e.salary) FROM Employee e GROUP BY e.department")
    List<Object[]> getAverageSalaryByDepartment();
    
    /**
     * Custom query to count employees in each department
     */
    @Query("SELECT e.department, COUNT(e) FROM Employee e GROUP BY e.department")
    List<Object[]> getEmployeeCountByDepartment();
    
    /**
     * Native SQL query example
     */
    @Query(value = "SELECT * FROM employees WHERE emp_salary BETWEEN ?1 AND ?2", nativeQuery = true)
    List<Employee> findEmployeesBySalaryRange(Double minSalary, Double maxSalary);
}
