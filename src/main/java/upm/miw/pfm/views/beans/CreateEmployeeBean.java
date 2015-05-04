package upm.miw.pfm.views.beans;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.AddEmployeeController;
import upm.miw.pfm.models.entities.Employee;

@ManagedBean
public class CreateEmployeeBean {
    
    private Employee employee;
    
    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    private final static Class<CreateEmployeeBean> clazz = CreateEmployeeBean.class;
    
    @EJB
    private AddEmployeeController addEmployeeController;
    
    public String process() {
        addEmployeeController.addEmployee(employee);
        LogManager.getLogger(clazz).debug("Creación de empleado " + employee);
        return "index";
    }

}
