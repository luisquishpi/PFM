package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.NewContractControllerEjb;
import upm.miw.pfm.mocks.MockContractDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class NewContractControllerTest {

    NewContractControllerEjb contractControllerEjb;

    @Before
    public void before() {
        contractControllerEjb = new NewContractControllerEjb();
        contractControllerEjb.saveContract(new Contract(ContractType.BECARIO, 32.5));
    }

    @Test
    public void testNewContract() {
        Contract contract = new Contract(ContractType.FIJO, 32.5);
        contractControllerEjb.saveContract(contract);

        List<Contract> contractList = new ArrayList<Contract>();
        contractList.add(contract);
        new MockContractDao(contractList);
        contractList = contractControllerEjb.contractList();

        assertEquals(1, contractList.size());
    }

    @Test
    public void testExistContract() {
        Contract contract = new Contract(ContractType.BECARIO, 32.5);
        new MockContractDao(contract);
        assertTrue(contractControllerEjb.existContract(new Contract(ContractType.BECARIO, 32.5)));
    }
}
