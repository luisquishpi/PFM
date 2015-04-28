package upm.miw.pfm.controllers.ejbs;

import java.util.List;
import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;

public class NewContractControllerEjb implements NewContractController {

    private ContractDao contractDao;

    public NewContractControllerEjb() {
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
}
