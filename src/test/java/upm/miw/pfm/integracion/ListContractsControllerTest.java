package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ListContractsController;
import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.controllers.ejbs.ListContractsControllerEjb;
import upm.miw.pfm.controllers.ejbs.NewContractControllerEjb;
import upm.miw.pfm.models.entities.Contract;

public class ListContractsControllerTest {

	private ListContractsController listContractsController;
	private NewContractController newContractController;

	@Before
	public void before() {
		listContractsController = new ListContractsControllerEjb();
		newContractController = new NewContractControllerEjb();
	}

	@Test
	public void listContractsTest() {
		List<Contract> contractList = new ArrayList<Contract>();

		Contract contract1 = new Contract("Fijo", 32.5);
		newContractController.saveContract(contract1);
		contractList.add(contract1);

		Contract contract2 = new Contract("Becario", 2.0);
		newContractController.saveContract(contract2);
		contractList.add(contract2);

		assertEquals(2, listContractsController.listContracts().size());
	}

	@Test 
	public void emptyListContractsTest(){ 
	    assertEquals(0, listContractsController.listContracts().size()); 
	}
}
