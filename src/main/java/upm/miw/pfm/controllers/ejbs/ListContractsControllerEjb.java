package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import upm.miw.pfm.controllers.ListContractsController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;

public class ListContractsControllerEjb implements ListContractsController{

	@Override
	public List<Contract> listContracts() {
		return DaoFactory.getFactory().getContractDao().findAll();
	}

}
