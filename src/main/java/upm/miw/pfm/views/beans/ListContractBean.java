package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ListContractsController;
import upm.miw.pfm.models.entities.Contract;

@ManagedBean
public class ListContractBean {
    private List<Contract> contracts;
    private String id;

    @EJB
    private ListContractsController listContractsController;

    public List<Contract> getContracts() {
        return contracts;
    }

    public void setContracts(List<Contract> contracts) {
        this.contracts = contracts;
    }

    @PostConstruct
    public void update() {
        contracts = listContractsController.listContracts();
        LogManager.getLogger(this).info("Se encontraron " + contracts.size() + " contratos");
    }
    public void setId(String id){
        this.id=id;
    }
    public String delete() {
        System.out.println("Eliminado cotrato:"+id);
        return "index";
    }

}
