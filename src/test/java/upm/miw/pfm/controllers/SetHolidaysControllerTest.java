package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.HolidayControllerEjb;
import upm.miw.pfm.mocks.MockHolidayDao;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

public class SetHolidaysControllerTest {

	private HolidayController holidayController;

    private Holiday holiday;
    
    @Before
    public void before() {
    	new MockHolidayDao();
    	holidayController = new HolidayControllerEjb();

    	holiday = new Holiday(Utils.buildDate(2015, 3, 3), Utils.buildDate(2015, 3, 3));
    	
        holidayController.createHoliday(holiday);
    }

    @Test
    public void createAndGetHolidayTest() {
        assertEquals(holiday, holidayController.getHolidayById(holiday.getId()));
    }

    @Test
    public void listHolidayTest() {
    	List<Holiday> listHoliday = new ArrayList<Holiday>();
    	listHoliday.add(holiday);
    	new MockHolidayDao(listHoliday);
        assertEquals(listHoliday, holidayController.holidayList());
    }
}

