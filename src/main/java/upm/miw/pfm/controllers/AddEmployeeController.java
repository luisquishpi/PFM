package upm.miw.pfm.controllers;

import upm.miw.pfm.models.entities.Employee;

public interface AddEmployeeController {

	public void addEmployee(Employee employee);
	
	public Employee getEmployee(Integer id);

}
