package upm.miw.pfm.integracion;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.ejbs.ContractControllerEjb;
import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class EmployeeControllerTest {

    private EmployeeController employeeController;
    
    private ContractController contractController;

    private Employee employee;

    private Contract contract;

    private Set<RoleType> roles;

    @Before
    public void before() {
        employeeController = new EmployeeControllerEjb();
        contractController = new ContractControllerEjb();
        contract = new Contract("Fijo", 32.5);
        contractController.saveContract(contract);
        roles = new HashSet<RoleType>();
        roles.add(RoleType.PROJECT_MANAGEMENT);
        roles.add(RoleType.REQUIREMENTS);
        roles.add(RoleType.ANALYSIS_DESIGN);
        employee = new Employee("Anibal", "Lecter", "A", 40500.00, contract, roles);
        employeeController.addEmployee(employee);
    }

    @Test
    public void addEmployeeTest() {
        assertEquals(employeeController.getEmployee(employee.getId()), employee);
    }
    
    @Test
    public void listEmployeesTest() {
    	Employee employee2 = new Employee("Manuel", "Leunam", "A", 40500.00, contract, roles);
    	employeeController.addEmployee(employee2);
        List<Employee> employeeList = new ArrayList<Employee>();
        employeeList.add(employee);
        employeeList.add(employee2);
        assertEquals(employeeController.listEmployees(), employeeList);
    }
    
    @After
    public void afterClass(){
        DaoFactory.getFactory().getEmployeeDao().query("delete from Employee");
        DaoFactory.getFactory().getContractDao().query("delete from Contract");
    }
}

