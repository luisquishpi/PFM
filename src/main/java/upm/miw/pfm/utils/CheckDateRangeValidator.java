package upm.miw.pfm.utils;

import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.IGenericDateEntity;

@SuppressWarnings("unchecked")
public class CheckDateRangeValidator implements
        ConstraintValidator<CheckDateRange, IGenericDateEntity> {

    @Override
    public void initialize(CheckDateRange arg0) {
    }

    @Override
    public boolean isValid(IGenericDateEntity entity, ConstraintValidatorContext arg1) {

        List<IGenericDateEntity> entities = DaoFactory.getFactory().getDao().findAll();

        for (IGenericDateEntity entityTemp : entities) {
            if (entity.getStart().equals(entityTemp.getStart())
                    || entity.getEnd().equals(entityTemp.getEnd()))
                return false;
            if (entity.getStart().after(entityTemp.getStart())
                    && entity.getStart().before(entityTemp.getEnd()))
                return false;
            if (entity.getEnd().after(entityTemp.getStart())
                    && entity.getEnd().before(entityTemp.getEnd()))
                return false;
            if (entity.getStart().before(entityTemp.getStart())
                    && entity.getEnd().after(entityTemp.getEnd()))
                return false;
        }

        return true;
    }

}
