package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.NewContractControllerEjb;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class AddContractControllerTest {

    NewContractControllerEjb newContractControllerEjb;
    @Before
    public void before(){
        newContractControllerEjb=new NewContractControllerEjb();
        newContractControllerEjb.saveContract(new Contract(ContractType.BECARIO, 32.5));
    }
    @Test
    public void newContractControllerTest() {
        Contract contract=new Contract(ContractType.FIJO, 32.5);
        newContractControllerEjb.saveContract(contract);
        assertTrue(newContractControllerEjb.existContract(contract));
    }

}
