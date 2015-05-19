package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;

@Stateless
public class ContractControllerEjb implements ContractController {

    private ContractDao contractDao;

    public ContractControllerEjb() {
        contractDao = DaoFactory.getFactory().getContractDao();
    }

    @Override
    public void saveContract(Contract contract) {
        contractDao.create(contract);
    }

    @Override
    public boolean existContract(Contract contract) {
        return contractDao.read(contract.getId()) != null;
    }

    @Override
    public List<Contract> contractList() {
        return contractDao.findAll();
    }

    @Override
    public Contract getContract(int selectedContractId) {
        return DaoFactory.getFactory().getContractDao().read(selectedContractId);
    }

	@Override
	public void update(Contract contract) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}
}
