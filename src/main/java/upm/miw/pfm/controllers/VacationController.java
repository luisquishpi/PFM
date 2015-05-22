package upm.miw.pfm.controllers;

import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;

import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;

public interface VacationController {

    public void createVacation(Vacation vacation);

    public void removeVacationById(Integer vacation);

    public Vacation getVacationById(Integer id);

    public List<Vacation> vacationList(Employee employee);
    
    public Set<ConstraintViolation<Vacation>> validate(Vacation vacation);

}
