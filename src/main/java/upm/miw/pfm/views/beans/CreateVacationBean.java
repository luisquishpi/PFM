package upm.miw.pfm.views.beans;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.VacationController;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;
import upm.miw.pfm.utils.Utils;

@ManagedBean
public class CreateVacationBean implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final Class<CreateVacationBean> clazz = CreateVacationBean.class;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private VacationController vacationController;    

    private String range;

    private Employee selectedEmployee;

    private List<Vacation> selectedEmployeeVacations;

    private List<Employee> employees;

    public String process() {
        Date start = Utils.convertStringToDate(range.split("-")[0].trim(), "dd/MM/yyyy");
        Date end = Utils.convertStringToDate(range.split("-")[1].trim(), "dd/MM/yyyy");
        Vacation vacation = new Vacation(start, end, selectedEmployee);

        if (Utils.errors(vacationController.validate(vacation))) {
            vacationController.createVacation(vacation);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Vacaciones", "Las vacaciones de "
                    + selectedEmployee.getName() + " han sido registradas");
        }
        updateDetails();
        return null;
    }

    public void updateDetails() {
        setSelectedEmployeeVacations(vacationController.vacationList(selectedEmployee));
    }

    public List<Employee> getEmployees() {
        return this.employees;
    }

    @PostConstruct
    public void update() {
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

    public List<Vacation> getSelectedEmployeeVacations() {
        return selectedEmployeeVacations;
    }

    private void setSelectedEmployeeVacations(List<Vacation> selectedEmployeeVacations) {
        this.selectedEmployeeVacations = selectedEmployeeVacations;
    }

}
