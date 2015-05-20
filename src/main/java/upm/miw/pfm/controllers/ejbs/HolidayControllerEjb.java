package upm.miw.pfm.controllers.ejbs;

import java.util.List;
import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.HolidayDao;
import upm.miw.pfm.models.entities.Holiday;

public class HolidayControllerEjb implements HolidayController {

    private HolidayDao holidayDao;

    public HolidayControllerEjb() {
        holidayDao = DaoFactory.getFactory().getHolidayDao();
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
    public List<Holiday> vacationList() {
        return holidayDao.findAll();
    }

}
