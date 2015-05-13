package upm.miw.pfm.utils;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Vacation;

public class CheckDateVacationValidator implements ConstraintValidator<CheckDateVacation, Vacation> {

    @Override
    public void initialize(CheckDateVacation arg0) {
    }

    @Override
    public boolean isValid(Vacation vacation, ConstraintValidatorContext arg1) {
        List<Vacation> vacations=new ArrayList<Vacation>();
        vacations=  DaoFactory.getFactory().getVacationDao().findAll(vacation.getEmployee());
        
        for(Vacation vacationTmp: vacations){
            if(vacation.getStart().after(vacationTmp.getStart()) && vacation.getStart().before(vacationTmp.getEnd())) return false;
            if(vacation.getEnd().after(vacationTmp.getStart()) && vacation.getEnd().before(vacationTmp.getEnd())) return false;
        }
        return true;
    }

}
