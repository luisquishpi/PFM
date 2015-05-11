package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.Utils;

@ManagedBean
public class CreateContractBean {

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

        Utils.addMessage(FacesMessage.SEVERITY_INFO, "Contrato", "El contrato ha sido creado con exito");

        return "index";
    }

    @PostConstruct
    public void init() {
        contract = new Contract();
    }
}
