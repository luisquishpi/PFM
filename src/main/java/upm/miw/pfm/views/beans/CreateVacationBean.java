package upm.miw.pfm.views.beans;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.models.entities.Employee;

@ManagedBean
public class CreateVacationBean implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    public static final Class<CreateVacationBean> clazz = CreateVacationBean.class; 
    
    @EJB
    private EmployeeController employeeController;
    
    private String range;
    
    private Employee selectedEmployee;
    
    private List<Employee> employees;
    
    public String process() {
        LogManager.getLogger(clazz).debug(selectedEmployee);
        return null;
    }
    
    public List<Employee> getEmployees(){
        return this.employees;
    }
    
    @PostConstruct
    public void update(){
        this.employees = employeeController.listEmployees();
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public Employee getSelectedEmployee() {
        return selectedEmployee;
    }

    public void setSelectedEmployee(Employee selectedEmployee) {
        this.selectedEmployee = selectedEmployee;
    }

}
