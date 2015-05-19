package upm.miw.pfm.controllers.ejbs;

import java.util.ArrayList;
import java.util.List;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

public class HolidayControllerEjb implements HolidayController {

	@Override
	public void createHoliday(Holiday holiday) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Holiday getHolidayById(Integer id) {
		// TODO Auto-generated method stub
		return new Holiday();
	}

	@Override
	public List<Holiday> vacationList() {
		List<Holiday> list = new ArrayList<Holiday>();
		list.add(new Holiday(Utils.buildDate(2015, 03, 03), Utils.buildDate(2015, 03, 03)));
		return list;
	}

}
