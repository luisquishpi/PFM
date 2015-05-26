package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class ListContractBean {
	
    private List<Contract> contracts;
    
    private int id;
    
    private String contractType;

    @EJB
    private ContractController listContractsController;
    
    @EJB
    private ContractController contractController;
    
    private String messageDialog;

    public List<Contract> getContracts() {
        return contracts;
    }

    public void setContracts(List<Contract> contracts) {
        this.contracts = contracts;
    }
    
    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
		System.out.println(this.getId());
	}

    @PostConstruct
    public void update() {
        contracts = listContractsController.contractList();
        LogManager.getLogger(this).info("Se encontraron " + contracts.size() + " contratos");
    }

    public String delete() {
    	System.out.println("Delete");
    	if (listContractsController.delete(id)){
    		LogManager.getLogger(this).info("Eliminado " + id);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Contrato", "El contrato ha sido eliminado con exito");
            update();
    	}else{
    		LogManager.getLogger(this).info("Contrato está siendo utilizado " + id);
            Utils.addMessage(FacesMessage.SEVERITY_ERROR, "Contrato", "El contrato está siendo utilizado actualmente");
    	};
        return "";
    }

	public String getMessageDialog() {
		return messageDialog;
	}

	public void setMessageDialog(String messageDialog) {
		this.messageDialog = messageDialog;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
		this.messageDialog= "¿ Esta seguro de querer eliminar el contrato "+this.getContractType()+"?";
		System.out.println(this.getContractType());
	}

}
