package upm.miw.pfm.mocks;

import java.util.List;

import upm.miw.pfm.models.daos.hibernate.ContractDaoHibernate;
import upm.miw.pfm.models.entities.Contract;
import mockit.Mock;
import mockit.MockUp;

public class MockContractDao extends MockUp<ContractDaoHibernate> {

	private Contract contract;

	private List<Contract> listContract;

	public MockContractDao(Contract contract) {
		this.contract = contract;
	}

	public MockContractDao() {
	}

	public MockContractDao(List<Contract> listContract) {
		this.listContract = listContract;
	}

	@Mock
	public List<Contract> findAll() {
		return listContract;
	}

	@Mock
	public Contract create(Contract contract) {
		this.contract = contract;
		contract.setId(10);
		return contract;
	}

	@Mock
	public Contract read(Integer id) {
		contract.setId(id);
		return contract;
	}

	@Mock
	public void update(Contract contract) {
		this.contract = contract;
	}
}
