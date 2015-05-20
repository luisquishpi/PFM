package upm.miw.pfm.utils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Holiday;

public class CheckUniqueHolidayValidator implements ConstraintValidator<CheckUniqueHoliday, Holiday> {

    @Override
    public void initialize(CheckUniqueHoliday constraintAnnotation) {        
    }

    @Override
    public boolean isValid(Holiday value, ConstraintValidatorContext context) {
        if (value == null)
            return true;
        
        return !DaoFactory.getFactory().getHolidayDao().exists(value.getStart(), value.getEnd());
    }
}
