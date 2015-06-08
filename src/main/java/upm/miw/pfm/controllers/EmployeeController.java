package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Employee;

public interface EmployeeController {

    public void addEmployee(Employee employee);

    public Employee getEmployee(Integer id);
    
    public List<Employee> listEmployees();
    
    public List<Employee> listEmployeesWithVacations();

	public void updateEmployee(Employee employee);

}
