package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;
import org.apache.logging.log4j.LogManager;
import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@RequestScoped
public class EditContractBean {
    private Contract contract;

    @ManagedProperty("#{param.id}")
    private int id;

    @EJB
    private ContractController contractController;

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public String process() {
        contract.setId(id);
        contractController.update(contract);
        LogManager.getLogger(this).info("Actualizado " + contract);
        Utils.addMessage(FacesMessage.SEVERITY_INFO, "Contrato",
                "El contrato ha sido actualizado con exito");
        return "index";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @PostConstruct
    public void init() {
        contract = contractController.getContract(id);
    }

}
