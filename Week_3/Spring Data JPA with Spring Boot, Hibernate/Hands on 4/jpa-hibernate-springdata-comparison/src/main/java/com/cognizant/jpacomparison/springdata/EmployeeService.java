package com.cognizant.jpacomparison.springdata;

import com.cognizant.jpacomparison.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;
    
    @Transactional
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    
    @Transactional(readOnly = true)
    public Employee findEmployeeById(Integer id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.orElse(null);
    }
    
    @Transactional(readOnly = true)
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    @Transactional
    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    
    @Transactional
    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }
    
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByDepartment(String department) {
        return employeeRepository.findByDepartment(department);
    }
    
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByName(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }
    
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesWithHighSalary(Double salary) {
        return employeeRepository.findBySalaryGreaterThan(salary);
    }
    
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByDepartmentAndSalary(String department, Double minSalary) {
        return employeeRepository.findByDepartmentAndSalaryGreaterThan(department, minSalary);
    }
    
    @Transactional(readOnly = true)
    public List<Employee> getAllEmployeesBySalaryDesc() {
        return employeeRepository.findAllByOrderBySalaryDesc();
    }
    
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByEmailDomain(String domain) {
        return employeeRepository.findByEmailDomain(domain);
    }
    
    @Transactional(readOnly = true)
    public List<Object[]> getAverageSalaryByDepartment() {
        return employeeRepository.getAverageSalaryByDepartment();
    }
    
    @Transactional(readOnly = true)
    public List<Object[]> getEmployeeCountByDepartment() {
        return employeeRepository.getEmployeeCountByDepartment();
    }
    
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesBySalaryRange(Double minSalary, Double maxSalary) {
        return employeeRepository.findEmployeesBySalaryRange(minSalary, maxSalary);
    }
    
    @Transactional(readOnly = true)
    public boolean employeeExists(Integer id) {
        return employeeRepository.existsById(id);
    }
    
    @Transactional(readOnly = true)
    public long getTotalEmployeeCount() {
        return employeeRepository.count();
    }
}
