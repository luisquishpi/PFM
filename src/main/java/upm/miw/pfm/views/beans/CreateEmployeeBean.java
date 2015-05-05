package upm.miw.pfm.views.beans;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.AddEmployeeController;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

@ManagedBean
public class CreateEmployeeBean {

    private Employee employee;

    private RoleType[] checkedRoles;

    private final static Class<CreateEmployeeBean> clazz = CreateEmployeeBean.class;

    @EJB
    private AddEmployeeController addEmployeeController;

    public CreateEmployeeBean() {
        employee = new Employee();
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public RoleType[] getRoles() {
        return RoleType.values();
    }

    public List<Contract> getContracts() {
        return addEmployeeController.listContracts();
    }

    public RoleType[] getCheckedRoles() {
        return checkedRoles;
    }

    public void setCheckedRoles(RoleType[] checkedValues) {
        this.checkedRoles = checkedValues;
    }

    public String process() {
        employee.setRoles(new HashSet<RoleType>(Arrays.asList(getCheckedRoles())));
        addEmployeeController.addEmployee(employee);
        LogManager.getLogger(clazz).debug("Creación de empleado " + employee);
        return "index";
    }

}
