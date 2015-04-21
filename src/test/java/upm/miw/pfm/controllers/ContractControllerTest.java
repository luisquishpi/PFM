package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ContractControllerEjb;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class ContractControllerTest {

    ContractControllerEjb contractControllerEjb;

    @Before
    public void before() {
        contractControllerEjb = new ContractControllerEjb();
        contractControllerEjb.saveContract(new Contract(ContractType.BECARIO, 32.5));
    }

    @Test
    public void testNewContract() {
        Contract contract = new Contract(ContractType.FIJO, 32.5);
        contractControllerEjb.saveContract(contract);
        List<Contract> contractList= contractControllerEjb.contractList();
        assertEquals(2, contractList.size());
        assertTrue(contractControllerEjb.existContract(contract));
    }
    @Test
    public void testExistContract() {
        assertTrue(contractControllerEjb.existContract(new Contract(ContractType.BECARIO, 32.5)));
    }
}
