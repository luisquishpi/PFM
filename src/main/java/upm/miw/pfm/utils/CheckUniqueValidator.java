package upm.miw.pfm.utils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.IGenericEntity;

@SuppressWarnings("unchecked")
public class CheckUniqueValidator implements ConstraintValidator<CheckUnique, IGenericEntity> {

    @Override
    public void initialize(CheckUnique constraintAnnotation) {        
    }

    @Override
    public boolean isValid(IGenericEntity value, ConstraintValidatorContext context) {
        if (value == null)
            return true;
        
        return !DaoFactory.getFactory().getDao().exists(value);
    }
}
