package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.controllers.ejbs.HolidayControllerEjb;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

public class HolidayControllerTest {

    private HolidayController holidayController;

    private Holiday holiday;

    SimpleDateFormat formatter = new SimpleDateFormat("dd/MMM/yyyy");

    Date startDate;

    Date endDate;

    static List<Holiday> mockListHoliday;

    @BeforeClass
    public static void beforeClass() {
        mockListHoliday = new ArrayList<Holiday>();
    }

    @Before
    public void before() {
    	holidayController = new HolidayControllerEjb();
        startDate = Utils.buildDate(2015, 10, 1);
        endDate = Utils.buildDate(2015, 10, 2);
    }

    @Test
    public void createAndGetVacationTest() {
        holiday = new Holiday(startDate, endDate);
        holidayController.createHoliday(holiday);
        mockListHoliday.add(holiday);
        assertEquals(holiday, holidayController.getHolidayById(holiday.getId()));
    }

    @Test
    public void listVacationTest() {
    	holiday = new Holiday(startDate, endDate);
        holidayController.createHoliday(holiday);
        mockListHoliday.add(holiday);
        assertEquals(mockListHoliday.size(), holidayController.holidayList().size());
    }
    
    @AfterClass
    public static void afterClass() {
    	DaoFactory.getFactory().getVacationDao().query("delete from Holiday");
    }

}
