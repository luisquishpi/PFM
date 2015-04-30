package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.controllers.ejbs.ContractControllerEjb;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;

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

        assertEquals(2, contractList.size());
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
    
    @After
    public void after() {
        DaoFactory.getFactory().getContractDao().query("delete from contract");
    }
}
