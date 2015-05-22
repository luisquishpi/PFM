package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.HolidayControllerEjb;
import upm.miw.pfm.mocks.MockHolidayDao;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

public class SetHolidaysControllerTest {

	private HolidayController holidayController;

    private Holiday holiday;

    SimpleDateFormat formatter = new SimpleDateFormat("dd/MMM/yyyy");

    static List<Holiday> mockListHoliday;

    @BeforeClass
    public static void beforeClass() {
        mockListHoliday = new ArrayList<Holiday>();
    }

    @Before
    public void before() {
    	holidayController = new HolidayControllerEjb();

    	holiday = new Holiday(Utils.buildDate(2015, 3, 3), Utils.buildDate(2015, 3, 3));
    	
        new MockHolidayDao(holiday, mockListHoliday);
        holidayController.createHoliday(holiday);
        System.out.println(holiday);
    }

    @Test
    public void createAndGetVacationTest() {
        assertEquals(holiday, holidayController.getHolidayById(holiday.getId()));
    }

    @Test
    public void listVacationTest() {
    	mockListHoliday.add(holiday);
        assertEquals(mockListHoliday, holidayController.vacationList());
    }
}

