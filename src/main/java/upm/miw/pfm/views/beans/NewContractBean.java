package upm.miw.pfm.views.beans;

import javax.faces.bean.ManagedBean;
import javax.faces.model.SelectItem;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

@ManagedBean
public class NewContractBean extends ViewBean {

    private Contract contract;

    
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

    public SelectItem[] getContractTypeValues() {
        SelectItem[] items = new SelectItem[ContractType.values().length];
        int i = 0;
        for (ContractType g : ContractType.values()) {
            items[i++] = new SelectItem(g, g.toString());
        }
        return items;
    }
    public ContractType[] getListContractType(){
        return ContractType.values();
    }

}
