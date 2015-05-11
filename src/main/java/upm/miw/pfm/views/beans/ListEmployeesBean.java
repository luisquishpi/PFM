package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.models.entities.Employee;

@ManagedBean
public class ListEmployeesBean {

    private List<Employee> employees;
    
    @EJB
    private EmployeeController listEmployeesController;
    
    @PostConstruct
    public void update(){
        setEmployees(listEmployeesController.listEmployees());
    }
    
    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
}
