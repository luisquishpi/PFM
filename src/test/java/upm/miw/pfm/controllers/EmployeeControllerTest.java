package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class EmployeeControllerTest {

    private EmployeeController employeeController;

    private Employee employee;

    private Contract contract;

    private Set<RoleType> roles;

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

}
