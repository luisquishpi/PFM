package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.models.entities.Employee;

@ManagedBean
@RequestScoped
public class GetEmployeeBean {
    @ManagedProperty(value = "#{param.id}")
    private Integer id;
    private Double totalAnual;

    @EJB
    private EmployeeController getEmployeeController;

    private Employee employee;

    public GetEmployeeBean() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
   
    public Double getTotalAnual() {
        return totalAnual;
    }

    public void setTotalAnual(Double totalAnual) {
        this.totalAnual = totalAnual;
    }
    public Double getDaySalary() {
        return 0.0;
    }

    public Double getHourSalary() {
        return 0.0;
    }
    @PostConstruct
    public void update() {
        employee = getEmployeeController.getEmployee(getId());
    }

}
