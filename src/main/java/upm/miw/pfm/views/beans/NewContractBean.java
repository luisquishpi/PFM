package upm.miw.pfm.views.beans;

import javax.faces.bean.ManagedBean;

import upm.miw.pfm.models.entities.Contract;
@ManagedBean
public class NewContractBean extends ViewBean {

    private Contract contract;

    
    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }
    
    public String process() {
        this.getControllerFactory().getNewContractController().saveContract(contract);
        return "home";
    }

}
