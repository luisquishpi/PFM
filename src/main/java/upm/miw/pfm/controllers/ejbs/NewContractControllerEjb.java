package upm.miw.pfm.controllers.ejbs;

import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.models.entities.Contract;

public class NewContractControllerEjb implements NewContractController {

    @Override
    public void saveContract(Contract contract) {
        
    }

    @Override
    public boolean existContract(Contract contract) {
        return true;
    }

}
