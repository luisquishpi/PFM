package upm.miw.pfm.controllers.ejbs;

import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.HolidayDao;
import upm.miw.pfm.models.entities.Holiday;

@Stateless
public class HolidayControllerEjb implements HolidayController {

    private HolidayDao holidayDao;
    
    @Resource
    private ValidatorFactory validatorFactory;

    @Resource
    private Validator validator;

    public HolidayControllerEjb() {
        holidayDao = DaoFactory.getFactory().getHolidayDao();
        DaoFactory.getFactory().setDao(holidayDao);
    }

    @Override
    public void createHoliday(Holiday holiday) {
        holidayDao.create(holiday);
    }

    @Override
    public Holiday getHolidayById(Integer id) {
        return holidayDao.read(id);
    }

    @Override
    public List<Holiday> holidayList() {
        return holidayDao.findAll();
    }
    
    public Set<ConstraintViolation<Holiday>> validate(Holiday holiday){
        return validator.validate(holiday);
    }

}
