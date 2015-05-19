package upm.miw.pfm.integracion;

import static org.junit.Assert.assertEquals;

import java.util.HashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.ejbs.ContractControllerEjb;
import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class AddEmployeeControllerTest {

    private EmployeeController addEmployeeController;
    
    private ContractController contractController;

    private Employee employee;

    private Contract contract;

    private Set<RoleType> roles;

    @Before
    public void before() {
        addEmployeeController = new EmployeeControllerEjb();
        contractController = new ContractControllerEjb();
        contract = new Contract("Fijo", 32.5);
        contractController.saveContract(contract);
        roles = new HashSet<RoleType>();
        roles.add(RoleType.PROJECT_MANAGEMENT);
        roles.add(RoleType.REQUIREMENTS);
        roles.add(RoleType.ANALYSIS_DESIGN);
        employee = new Employee("Anibal", "Lecter", "A", 40500.00, contract, roles);
    }

    @Test
    public void addEmployeeTest() {
        addEmployeeController.addEmployee(employee);
        assertEquals(addEmployeeController.getEmployee(employee.getId()), employee);
    }
}

