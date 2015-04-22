package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ListContractsControllerEjb;
import upm.miw.pfm.mocks.MockContractDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class ListContractsControllerTest {

	private ListContractsController listContractsController;

	@Before
	public void before() {
		listContractsController = new ListContractsControllerEjb();
	}

	@Test
	public void listContractsTest() {
		List<Contract> contractList = new ArrayList<Contract>();

		Contract contract1 = new Contract(ContractType.FIJO, 32.5);
		contractList.add(contract1);

		Contract contract2 = new Contract(ContractType.BECARIO, 2.0);
		contractList.add(contract2);
		
		new MockContractDao(contractList);
		assertEquals(2, listContractsController.listContracts().size());
	}

	@Test 
	public void emptyListContractsTest(){ 
	  List<Contract> contractList = new ArrayList<Contract>();
	  new MockContractDao(contractList);
	  assertEquals(0, listContractsController.listContracts().size()); 
	}
}
