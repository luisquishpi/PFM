package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.models.entities.Contract;

@ManagedBean(name="newContractBean")
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
        LogManager.getLogger(this).info("Guardado " + contract);
        return "home";
    }
    
    @PostConstruct
    public void init(){
    	contract = new Contract();
    }
}
