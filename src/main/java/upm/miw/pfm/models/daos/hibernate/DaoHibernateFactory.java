package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.hibernate.ProjectDaoHibernate;
import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.ProjectDao;

public class DaoHibernateFactory extends DaoFactory  {

	@Override
	public ProjectDao getProjectDao() {
		return new ProjectDaoHibernate();
	}

	@Override
	public ContractDao getContractDao() {
		return new ContractDaoHibernate();
	}

}
