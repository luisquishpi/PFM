package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.controllers.ejbs.NewContractControllerEjb;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class NewContractControllerTest {

    NewContractController contractController;

    @Before
    public void before() {
        contractController = new NewContractControllerEjb();
        contractController.saveContract(new Contract(ContractType.BECARIO, 32.5));
    }

    @Test
    public void testNewContract() {
        Contract contract = new Contract(ContractType.FIJO, 32.5);
        contractController.saveContract(contract);

        List<Contract> contractList = new ArrayList<Contract>();
        contractList.add(contract);
        contractList = contractController.contractList();

        assertEquals(1, contractList.size());
    }

    @Test
    public void testExistContract() {
        new Contract(ContractType.BECARIO, 32.5);
        //new MockContractDao(contract);
        assertTrue(contractController.existContract(new Contract(ContractType.BECARIO, 32.5)));
    }
}