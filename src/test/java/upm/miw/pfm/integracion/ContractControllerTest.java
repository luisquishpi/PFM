package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

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

public class ContractControllerTest {

    ContractController contractController;
    Contract contract;

    @Before
    public void before() {
        contractController = new ContractControllerEjb();        
    }

    @Test
    public void testNewContract() {
        List<Contract> contractList = new ArrayList<Contract>();
        
        contract = new Contract("Becario", 32.5);
        contractController.saveContract(contract);        
        contract = new Contract("Fijo", 32.5);
        contractController.saveContract(contract);
        
        contractList = contractController.contractList();

        assertEquals(contractList.size(), 2);
    }

    @Test
    public void testExistContract() {
        contract = new Contract("Becario", 32.5);
        contractController.saveContract(contract);
        assertTrue(contractController.existContract(contract));
    }
    
    @Test
    public void listContractsTest() {
        List<Contract> contractList = new ArrayList<Contract>();

        Contract contract1 = new Contract("Fijo", 32.5);
        contractController.saveContract(contract1);
        contractList.add(contract1);

        Contract contract2 = new Contract("Becario", 2.0);
        contractController.saveContract(contract2);
        contractList.add(contract2);

        assertEquals(2, contractController.contractList().size());
    }

    @Test 
    public void emptyListContractsTest(){ 
        assertEquals(0, contractController.contractList().size()); 
    }
    
    @Test
    public void deleteContractTest(){
        EmployeeController employeeController = new EmployeeControllerEjb();
        
        Set<RoleType> roles = new HashSet<RoleType>();
        roles.add(RoleType.PROJECT_MANAGEMENT);
   	
    	Contract contract1 = new Contract("Becario", 00.0);
        contractController.saveContract(contract1);
        
        Contract contract2 = new Contract("Fijo", 32.5);
        contractController.saveContract(contract2);
        
        Employee employee = new Employee("Anibal", "Lecter", "A", 40500.00, contract2, roles);
        employeeController.addEmployee(employee);
    	
    	contractController.delete(contract1.getId());
    	contractController.delete(contract2.getId());
    	assertNull(contractController.getContract(contract1.getId()));
    	assertNotNull(contractController.getContract(contract2.getId()));
    }
    
    @After
    public void after() {
        List<Employee> employeeList = DaoFactory.getFactory().getEmployeeDao().findAllWithoutRoles();
        for (Employee tmpEmployee : employeeList) {
        	DaoFactory.getFactory().getEmployeeDao().deleteById(tmpEmployee.getId());
        }        
        DaoFactory.getFactory().getContractDao().query("delete from Contract");
    }
}
