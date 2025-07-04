package com.cognizant.jpacomparison.hibernate;

import com.cognizant.jpacomparison.model.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.List;

public class HibernateEmployeeDao {
    
    @Autowired
    @Qualifier("hibernateSessionFactory")
    private SessionFactory sessionFactory;
    
    /**
     * CREATE - Add a new employee using Hibernate
     */
    public Integer addEmployee(Employee employee) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        Integer employeeId = null;
        
        try {
            transaction = session.beginTransaction();
            
            // Save the employee and get the generated ID
            employeeId = (Integer) session.save(employee);
            
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new RuntimeException("Error adding employee: " + e.getMessage(), e);
        } finally {
            session.close();
        }
        
        return employeeId;
    }
    
    /**
     * READ - Find employee by ID using Hibernate
     */
    public Employee findEmployeeById(Integer id) {
        Session session = sessionFactory.openSession();
        Employee employee = null;
        
        try {
            employee = session.get(Employee.class, id);
        } catch (Exception e) {
            throw new RuntimeException("Error finding employee: " + e.getMessage(), e);
        } finally {
            session.close();
        }
        
        return employee;
    }
    
    /**
     * READ - Get all employees using Hibernate
     */
    public List<Employee> getAllEmployees() {
        Session session = sessionFactory.openSession();
        List<Employee> employees = null;
        
        try {
            Query<Employee> query = session.createQuery("FROM Employee", Employee.class);
            employees = query.list();
        } catch (Exception e) {
            throw new RuntimeException("Error getting all employees: " + e.getMessage(), e);
        } finally {
            session.close();
        }
        
        return employees;
    }
    
    /**
     * UPDATE - Update an existing employee using Hibernate
     */
    public void updateEmployee(Employee employee) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        
        try {
            transaction = session.beginTransaction();
            
            // Update the employee
            session.update(employee);
            
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new RuntimeException("Error updating employee: " + e.getMessage(), e);
        } finally {
            session.close();
        }
    }
    
    /**
     * DELETE - Remove an employee using Hibernate
     */
    public void deleteEmployee(Integer id) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        
        try {
            transaction = session.beginTransaction();
            
            Employee employee = session.get(Employee.class, id);
            if (employee != null) {
                session.delete(employee);
            }
            
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new RuntimeException("Error deleting employee: " + e.getMessage(), e);
        } finally {
            session.close();
        }
    }
    
    /**
     * QUERY - Find employees by department using HQL
     */
    public List<Employee> findEmployeesByDepartment(String department) {
        Session session = sessionFactory.openSession();
        List<Employee> employees = null;
        
        try {
            Query<Employee> query = session.createQuery(
                "FROM Employee WHERE department = :dept", Employee.class);
            query.setParameter("dept", department);
            employees = query.list();
        } catch (Exception e) {
            throw new RuntimeException("Error finding employees by department: " + e.getMessage(), e);
        } finally {
            session.close();
        }
        
        return employees;
    }
    
    /**
     * QUERY - Find employees with salary greater than specified amount using HQL
     */
    public List<Employee> findEmployeesWithSalaryGreaterThan(Double salary) {
        Session session = sessionFactory.openSession();
        List<Employee> employees = null;
        
        try {
            Query<Employee> query = session.createQuery(
                "FROM Employee WHERE salary > :sal ORDER BY salary DESC", Employee.class);
            query.setParameter("sal", salary);
            employees = query.list();
        } catch (Exception e) {
            throw new RuntimeException("Error finding employees by salary: " + e.getMessage(), e);
        } finally {
            session.close();
        }
        
        return employees;
    }
}
