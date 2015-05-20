package upm.miw.pfm.utils;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Holiday;

public class CheckDateHolidayValidator implements ConstraintValidator<CheckDateHoliday, Holiday> {

    @Override
    public void initialize(CheckDateHoliday arg0) {
    }

    @Override
    public boolean isValid(Holiday holiday, ConstraintValidatorContext arg1) {
        List<Holiday> holidays = new ArrayList<Holiday>();
        holidays = DaoFactory.getFactory().getHolidayDao().findAll();

        for (Holiday holidayTmp : holidays) {
            if (holiday.getStart().equals(holidayTmp.getStart())
                    || holiday.getEnd().equals(holidayTmp.getEnd()))
                return false;
            if (holiday.getStart().after(holidayTmp.getStart())
                    && holiday.getStart().before(holidayTmp.getEnd()))
                return false;
            if (holiday.getEnd().after(holidayTmp.getStart())
                    && holiday.getEnd().before(holidayTmp.getEnd()))
                return false;
            if (holiday.getStart().before(holidayTmp.getStart())
                    && holiday.getEnd().after(holidayTmp.getEnd()))
                return false;
        }
        return true;
    }

}
