package com.cognizant.jpacomparison.springdata;

import com.cognizant.jpacomparison.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    
    List<Employee> findByDepartment(String department);
    
    List<Employee> findByNameContainingIgnoreCase(String name);
    
    List<Employee> findBySalaryGreaterThan(Double salary);
    
    List<Employee> findByDepartmentAndSalaryGreaterThan(String department, Double salary);
    
    List<Employee> findAllByOrderBySalaryDesc();
    
    @Query("SELECT e FROM Employee e WHERE e.email LIKE %:domain%")
    List<Employee> findByEmailDomain(@Param("domain") String domain);
    
    @Query("SELECT e.department, AVG(e.salary) FROM Employee e GROUP BY e.department")
    List<Object[]> getAverageSalaryByDepartment();
    
    @Query("SELECT e.department, COUNT(e) FROM Employee e GROUP BY e.department")
    List<Object[]> getEmployeeCountByDepartment();
    
    @Query(value = "SELECT * FROM employees WHERE emp_salary BETWEEN ?1 AND ?2", nativeQuery = true)
    List<Employee> findEmployeesBySalaryRange(Double minSalary, Double maxSalary);
}
