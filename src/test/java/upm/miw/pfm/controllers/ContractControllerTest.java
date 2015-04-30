package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ContractControllerEjb;
import upm.miw.pfm.mocks.MockContractDao;
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
        new MockContractDao();
        contract=new Contract("Becario", 32.5);
        contractController.saveContract(contract);                

        assertTrue(contractController.existContract(contract));
    }
    
    @Test
    public void listContractsTest() {
        List<Contract> contractList = new ArrayList<Contract>();

        Contract contract1 = new Contract("Fijo", 32.5);
        contractList.add(contract1);

        Contract contract2 = new Contract("Becario", 2.0);
        contractList.add(contract2);
        
        new MockContractDao(contractList);
        assertEquals(2, contractController.contractList().size());
    }

    @Test 
    public void emptyListContractsTest(){ 
      List<Contract> contractList = new ArrayList<Contract>();
      new MockContractDao(contractList);
      assertEquals(0, contractController.contractList().size()); 
    }
}