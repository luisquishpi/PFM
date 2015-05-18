package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;

public interface VacationController {

    public void createVacation(Vacation vacation);

    public void removeVacationById(Integer vacation);

    public Vacation getVacationById(Integer id);

    public List<Vacation> vacationList(Employee employee);

}
