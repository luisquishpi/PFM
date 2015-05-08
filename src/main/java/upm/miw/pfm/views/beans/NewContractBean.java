package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

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
        
        FacesContext context = FacesContext.getCurrentInstance();
        context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Contrato creado", "El contrato ha sido creado con exito"));
        context.getExternalContext().getFlash().setKeepMessages(true);
        
        return "index";
    }
    
    @PostConstruct
    public void init(){
    	contract = new Contract();
    }
}
