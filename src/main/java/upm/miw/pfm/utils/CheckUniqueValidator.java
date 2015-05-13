package upm.miw.pfm.utils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Vacation;

public class CheckUniqueValidator implements ConstraintValidator<CheckUnique, Vacation> {

    @Override
    public void initialize(CheckUnique constraintAnnotation) {        
    }

    @Override
    public boolean isValid(Vacation value, ConstraintValidatorContext context) {
        if (value == null)
            return true;
        
        return !DaoFactory.getFactory().getVacationDao().exists(value.getEmployee(), value.getStart(), value.getEnd());
    }

}
