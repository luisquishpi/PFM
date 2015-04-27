package upm.miw.pfm.views.beans;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.models.entities.Contract;
@ManagedBean
public class NewContractBean extends ViewBean {

    private Contract contract;
    @EJB
    private NewContractController newContractsController;
    
    public Contract getContract() {
        return contract;
    }
    public void setContract(Contract contract) {
        this.contract = contract;
    }
    public String process() {
        newContractsController.saveContract(contract);
        return "home";
    }

}
