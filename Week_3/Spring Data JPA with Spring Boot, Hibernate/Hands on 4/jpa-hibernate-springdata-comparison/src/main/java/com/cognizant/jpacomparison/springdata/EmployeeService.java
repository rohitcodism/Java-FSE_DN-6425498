package com.cognizant.jpacomparison.springdata;

import com.cognizant.jpacomparison.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA Service Implementation
 * - Uses EmployeeRepository (Spring Data JPA)
 * - Automatic transaction management with @Transactional
 * - Minimal boilerplate code
 * - Built-in exception handling
 */
@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;
    
    /**
     * CREATE - Add a new employee using Spring Data JPA
     * @Transactional automatically manages transaction boundaries
     */
    @Transactional
    public Employee addEmployee(Employee employee) {
        // Spring Data JPA automatically handles:
        // - Transaction begin
        // - Entity persistence
        // - Transaction commit
        // - Exception handling and rollback
        return employeeRepository.save(employee);
    }
    
    /**
     * READ - Find employee by ID using Spring Data JPA
     */
    @Transactional(readOnly = true)
    public Employee findEmployeeById(Integer id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.orElse(null);
    }
    
    /**
     * READ - Get all employees using Spring Data JPA
     */
    @Transactional(readOnly = true)
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    /**
     * UPDATE - Update an existing employee using Spring Data JPA
     */
    @Transactional
    public Employee updateEmployee(Employee employee) {
        // save() method works for both insert and update
        return employeeRepository.save(employee);
    }
    
    /**
     * DELETE - Remove an employee using Spring Data JPA
     */
    @Transactional
    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }
    
    /**
     * QUERY - Find employees by department using derived query
     */
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByDepartment(String department) {
        return employeeRepository.findByDepartment(department);
    }
    
    /**
     * QUERY - Find employees by name containing text
     */
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByName(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }
    
    /**
     * QUERY - Find employees with salary greater than specified amount
     */
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesWithHighSalary(Double salary) {
        return employeeRepository.findBySalaryGreaterThan(salary);
    }
    
    /**
     * QUERY - Find employees by department and salary criteria
     */
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByDepartmentAndSalary(String department, Double minSalary) {
        return employeeRepository.findByDepartmentAndSalaryGreaterThan(department, minSalary);
    }
    
    /**
     * QUERY - Get all employees ordered by salary (descending)
     */
    @Transactional(readOnly = true)
    public List<Employee> getAllEmployeesBySalaryDesc() {
        return employeeRepository.findAllByOrderBySalaryDesc();
    }
    
    /**
     * QUERY - Find employees by email domain
     */
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByEmailDomain(String domain) {
        return employeeRepository.findByEmailDomain(domain);
    }
    
    /**
     * QUERY - Get average salary by department
     */
    @Transactional(readOnly = true)
    public List<Object[]> getAverageSalaryByDepartment() {
        return employeeRepository.getAverageSalaryByDepartment();
    }
    
    /**
     * QUERY - Get employee count by department
     */
    @Transactional(readOnly = true)
    public List<Object[]> getEmployeeCountByDepartment() {
        return employeeRepository.getEmployeeCountByDepartment();
    }
    
    /**
     * QUERY - Find employees within salary range
     */
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesBySalaryRange(Double minSalary, Double maxSalary) {
        return employeeRepository.findEmployeesBySalaryRange(minSalary, maxSalary);
    }
    
    /**
     * Business method - Check if employee exists
     */
    @Transactional(readOnly = true)
    public boolean employeeExists(Integer id) {
        return employeeRepository.existsById(id);
    }
    
    /**
     * Business method - Count total employees
     */
    @Transactional(readOnly = true)
    public long getTotalEmployeeCount() {
        return employeeRepository.count();
    }
}
