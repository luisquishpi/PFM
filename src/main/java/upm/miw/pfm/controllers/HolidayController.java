package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Holiday;

public interface HolidayController {

	public void createHoliday(Holiday holiday);

	public Holiday getHolidayById(Integer id);

	public List<Holiday> vacationList();

}
