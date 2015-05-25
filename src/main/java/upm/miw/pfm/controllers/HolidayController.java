package upm.miw.pfm.controllers;

import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;

import upm.miw.pfm.models.entities.Holiday;

public interface HolidayController {

	public void createHoliday(Holiday holiday);

	public Holiday getHolidayById(Integer id);

	public List<Holiday> holidayList();
	
	public Set<ConstraintViolation<Holiday>> validate(Holiday holiday);

}
