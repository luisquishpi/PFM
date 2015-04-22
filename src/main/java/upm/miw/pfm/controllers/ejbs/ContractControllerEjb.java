package upm.miw.pfm.controllers.ejbs;

import java.util.ArrayList;
import java.util.List;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class ContractControllerEjb implements ContractController {

    @Override
    public void saveContract(Contract contract) {
        
    }

    @Override
    public boolean existContract(Contract contract) {
        return true;
    }

    public List<Contract> contractList() {
        List<Contract> lista=new ArrayList<Contract>();
        lista.add(new Contract(ContractType.BECARIO, 1));
        lista.add(new Contract(ContractType.BECARIO, 2));
        return lista;
    }

}
