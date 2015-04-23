package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.entities.Contract;

public class ContractDaoHibernate extends GenericDaoHibernate<Contract, Integer> implements ContractDao{

	public ContractDaoHibernate() {
		super(Contract.class);
	}

}
