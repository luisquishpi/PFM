package upm.miw.pfm.views.beans;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
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
public class EditEmployeeBean {
    private Employee employee;

    @ManagedProperty("#{param.id}")
    private int id;

    private List<String> checkedRoles;

    private List<Contract> contractList;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private ContractController contractController;

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<String> getCheckedRoles() {
        return checkedRoles;
    }

    public void setCheckedRoles(List<String> checkedRoles) {
        this.checkedRoles = checkedRoles;
    }

    public List<Contract> getContractList() {
        return contractList;
    }

    public void setContractList(List<Contract> contractList) {
        this.contractList = contractList;
    }

    @PostConstruct
    public void init() {
        employee = employeeController.getEmployee(id);
        contractList = contractController.contractList();
        checkedRoles = new ArrayList<String>();
        checkedRoles.addAll(getSelectedRolesString());
        LogManager.getLogger(this).info("Roles " + checkedRoles);
        LogManager.getLogger(this).info("Se encontraron " + contractList.size() + " contratos");

    }

    private Set<String> getSelectedRolesString() {
        Set<String> roles = new HashSet<String>();
        for (RoleType role : employee.getRoles()) {
            roles.add(role.name());
        }
        return roles;
    }

    public String process() {
        employee.setRoles(getSelectedRoles());
        employeeController.updateEmployee(employee);

        LogManager.getLogger(this).debug("Edición de empleado " + employee);
        Utils.addMessage(FacesMessage.SEVERITY_INFO, "Empleado",
                "Se ha editado el empleado satisfactoriamente");
        return "index";
    }

    public RoleType[] getRoles() {
        return RoleType.values();
    }

    private Set<RoleType> getSelectedRoles() {
        Set<RoleType> roles = new HashSet<RoleType>();
        for (String role : checkedRoles) {
            roles.add(RoleType.valueOf(role));
        }
        return roles;

    }
}
