package com.cognizant.jpacomparison.jpa;

import com.cognizant.jpacomparison.model.Employee;
import org.springframework.stereotype.Component;

import jakarta.persistence.*;
import java.util.List;

/**
 * Pure JPA Implementation (JSR 338 Specification)
 * - Uses EntityManager for persistence operations
 * - Manual transaction management
 * - More boilerplate code
 * - Direct use of JPA API without additional abstractions
 */
@Component
public class JpaEmployeeDao {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    /**
     * CREATE - Add a new employee using pure JPA
     */
    public Integer addEmployee(Employee employee) {
        EntityTransaction transaction = null;
        try {
            // Begin transaction manually
            transaction = entityManager.getTransaction();
            transaction.begin();
            
            // Persist the entity
            entityManager.persist(employee);
            
            // Commit transaction
            transaction.commit();
            
            return employee.getId();
        } catch (Exception e) {
            // Rollback on error
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw new RuntimeException("Error adding employee: " + e.getMessage(), e);
        }
    }
    
    /**
     * READ - Find employee by ID using pure JPA
     */
    public Employee findEmployeeById(Integer id) {
        try {
            return entityManager.find(Employee.class, id);
        } catch (Exception e) {
            throw new RuntimeException("Error finding employee: " + e.getMessage(), e);
        }
    }
    
    /**
     * READ - Get all employees using pure JPA
     */
    public List<Employee> getAllEmployees() {
        try {
            TypedQuery<Employee> query = entityManager.createQuery(
                "SELECT e FROM Employee e", Employee.class);
            return query.getResultList();
        } catch (Exception e) {
            throw new RuntimeException("Error getting all employees: " + e.getMessage(), e);
        }
    }
    
    /**
     * UPDATE - Update an existing employee using pure JPA
     */
    public void updateEmployee(Employee employee) {
        EntityTransaction transaction = null;
        try {
            transaction = entityManager.getTransaction();
            transaction.begin();
            
            // Merge the entity (update)
            entityManager.merge(employee);
            
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw new RuntimeException("Error updating employee: " + e.getMessage(), e);
        }
    }
    
    /**
     * DELETE - Remove an employee using pure JPA
     */
    public void deleteEmployee(Integer id) {
        EntityTransaction transaction = null;
        try {
            transaction = entityManager.getTransaction();
            transaction.begin();
            
            Employee employee = entityManager.find(Employee.class, id);
            if (employee != null) {
                entityManager.remove(employee);
            }
            
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw new RuntimeException("Error deleting employee: " + e.getMessage(), e);
        }
    }
    
    /**
     * QUERY - Find employees by department using JPQL
     */
    public List<Employee> findEmployeesByDepartment(String department) {
        try {
            TypedQuery<Employee> query = entityManager.createQuery(
                "SELECT e FROM Employee e WHERE e.department = :dept", Employee.class);
            query.setParameter("dept", department);
            return query.getResultList();
        } catch (Exception e) {
            throw new RuntimeException("Error finding employees by department: " + e.getMessage(), e);
        }
    }
}
