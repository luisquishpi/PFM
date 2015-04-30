package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.models.entities.Contract;

@ManagedBean
public class NewContractBean {

    private Contract contract;

    @EJB
    private ContractController newContractsController;

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public String process() {
        newContractsController.saveContract(contract);
        LogManager.getLogger(this).info("Guardado " + contract);
        return "index";
    }
    
    @PostConstruct
    public void init(){
    	contract = new Contract();
    }
}
