package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.NewContractControllerEjb;
import upm.miw.pfm.mocks.MockContractDao;
import upm.miw.pfm.models.entities.Contract;

public class NewContractControllerTest {

    NewContractController contractController;
    Contract contract;

    @Before
    public void before() {
        contractController = new NewContractControllerEjb();
        contract=new Contract("Becario", 32.5);
        contractController.saveContract(contract);
    }

    @Test
    public void testNewContract() {
        List<Contract> contractList = new ArrayList<Contract>();
        contractList.add(contract);
        
        Contract contract = new Contract("Fijo", 32.5);
        contractController.saveContract(contract);
        
        contractList.add(contract);       
        new MockContractDao(contractList);
        contractList = contractController.contractList();

        assertEquals(2, contractList.size());
    }

    @Test
    public void testExistContract() {
        new MockContractDao(contract);
        assertTrue(contractController.existContract(contract));
    }
}