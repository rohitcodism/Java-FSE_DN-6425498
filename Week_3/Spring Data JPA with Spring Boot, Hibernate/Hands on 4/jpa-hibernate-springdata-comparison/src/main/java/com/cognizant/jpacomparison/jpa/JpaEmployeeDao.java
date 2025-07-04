package com.cognizant.jpacomparison.jpa;

import com.cognizant.jpacomparison.model.Employee;
import org.springframework.stereotype.Component;

import jakarta.persistence.*;
import java.util.List;

@Component
public class JpaEmployeeDao {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public Integer addEmployee(Employee employee) {
        EntityTransaction transaction = null;
        try {
            transaction = entityManager.getTransaction();
            transaction.begin();
            
            entityManager.persist(employee);
            
            transaction.commit();
            
            return employee.getId();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw new RuntimeException("Error adding employee: " + e.getMessage(), e);
        }
    }
    
    public Employee findEmployeeById(Integer id) {
        try {
            return entityManager.find(Employee.class, id);
        } catch (Exception e) {
            throw new RuntimeException("Error finding employee: " + e.getMessage(), e);
        }
    }
    
    public List<Employee> getAllEmployees() {
        try {
            TypedQuery<Employee> query = entityManager.createQuery(
                "SELECT e FROM Employee e", Employee.class);
            return query.getResultList();
        } catch (Exception e) {
            throw new RuntimeException("Error getting all employees: " + e.getMessage(), e);
        }
    }
    
    public void updateEmployee(Employee employee) {
        EntityTransaction transaction = null;
        try {
            transaction = entityManager.getTransaction();
            transaction.begin();
            
            entityManager.merge(employee);
            
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw new RuntimeException("Error updating employee: " + e.getMessage(), e);
        }
    }
    
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
