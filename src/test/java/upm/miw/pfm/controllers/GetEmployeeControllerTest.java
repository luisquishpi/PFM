package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.util.HashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class GetEmployeeControllerTest {

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
        employee = new Employee(1, "Anibal", "Lecter", "A", 40500.00, contract, roles);
        new MockEmployeeDao(employee);
        employeeController.addEmployee(employee);
    }

    
}
