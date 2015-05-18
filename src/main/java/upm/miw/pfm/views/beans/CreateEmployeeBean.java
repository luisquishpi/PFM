package upm.miw.pfm.views.beans;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ContractController;
import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@RequestScoped
public class CreateEmployeeBean {

    private Employee employee;

    private Set<String> checkedRoles;

    private List<Contract> contractList;

    private Contract contract;

    private final static Class<CreateEmployeeBean> clazz = CreateEmployeeBean.class;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private ContractController contractController;

    public CreateEmployeeBean() {
        employee = new Employee();
        contract = new Contract();
    }

    @PostConstruct
    public void init() {
        contractList = contractController.contractList();
        LogManager.getLogger(clazz).info("Se encontraron " + contractList.size() + " proyectos");
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public RoleType[] getRoles() {
        return RoleType.values();
    }

    public Set<String> getCheckedRoles() {
        return checkedRoles;
    }

    public void setCheckedRoles(Set<String> checkedValues) {
        this.checkedRoles = checkedValues;
    }

    public List<Contract> getContractList() {
        return contractList;
    }

    public void setContractList(List<Contract> contractList) {
        this.contractList = contractList;
    }

    public String process() {
        employee.setRoles(getSelectedRoles());

        employee.setContract(contractController.getContract(contract.getId()));

        employeeController.addEmployee(employee);
        LogManager.getLogger(clazz).debug("Creación de empleado " + employee);
        Utils.addMessage(FacesMessage.SEVERITY_INFO, "Empleado",
                "Se ha creado el empleado satisfactoriamente");
        return "index";
    }

    private Set<RoleType> getSelectedRoles() {
        Set<RoleType> roles = new HashSet<RoleType>();
        for (String role : checkedRoles) {
            roles.add(RoleType.valueOf(role));
        }
        return roles;

    }

}
