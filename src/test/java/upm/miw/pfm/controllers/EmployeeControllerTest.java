package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;
import upm.miw.pfm.utils.RoleType;
import upm.miw.pfm.utils.Utils;

public class EmployeeControllerTest {

    private EmployeeController employeeController;

    private Employee employee;

    private Contract contract;

    private Set<RoleType> roles;
    
    Date startDate;

    Date endDate;
    
    @Before
    public void before() {
        employeeController = new EmployeeControllerEjb();
        contract = new Contract("Fijo", 32.5);
        roles = new HashSet<RoleType>();
        roles.add(RoleType.PROJECT_MANAGEMENT);
        roles.add(RoleType.REQUIREMENTS);
        roles.add(RoleType.ANALYSIS_DESIGN);
        employee = new Employee("Anibal", "Lecter", "A", 40500.00, contract, roles);
        new MockEmployeeDao(new Employee());
    }

    @Test
    public void addAndGetEmployeeTest() {
        employeeController.addEmployee(employee);
        Employee employee = employeeController.getEmployee(1);
        assertEquals(new Employee(1, "Anibal", "Lecter", "A", 40500.00, contract, roles), employee);
    }
    
    @Test
    public void listEmployeesTest() {
        List<Employee> employeeList = new ArrayList<Employee>();
        employeeList.add(employee);
        employeeList.add(new Employee(2, "Manuel", "Leunam", "A", 40500.00, contract, roles));
        new MockEmployeeDao(employeeList);
        assertEquals(employeeController.listEmployees(), employeeList);
    }
    
    @Test
    public void updateEmployeeTest(){
    	employeeController.addEmployee(employee);
    	employee.setName("Josefina");
    	employeeController.updateEmployee(employee);
    	assertEquals(employeeController.getEmployee(employee.getId()), employee);
    }
    
    @Test
    public void listEmployeesWithVacation(){
    	List<Employee> employeeListWithVacation = new ArrayList<Employee>();
    	Employee employee = new Employee(2, "Manuel", "Leunam", "A", 40500.00, contract, roles);
    	List<Vacation> vacations = new ArrayList<Vacation>();	
    	startDate = Utils.buildDate(2015, 10, 1);
        endDate = Utils.buildDate(2015, 10, 2);
    	vacations.add(new Vacation(startDate, endDate, employee));
    	employee.setVacations(vacations);
    	employeeListWithVacation.add(employee);
    	new MockEmployeeDao(employeeListWithVacation);
    	assertEquals(employeeController.listEmployeesWithVacations(), employeeListWithVacation);
    }

}
