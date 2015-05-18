package upm.miw.pfm.models.daos;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

public class HolidayDaoTest {
	
	private HolidayDao holidayDao;
	
	private Holiday holiday;

	
	@BeforeClass
    public static void beforeClass() {
        DaoFactory.setFactory(new DaoHibernateFactory());
    }

    @Before
    public void before() {
        holidayDao = DaoFactory.getFactory().getHolidayDao();
        holiday = new Holiday(Utils.buildDate(2015, 3, 3),Utils.buildDate(2015, 3, 3));
        holidayDao.create(holiday);
    }
    
    @After
    public void after(){
        holidayDao.query("delete from Holiday");
    }
    
    @Test
    public void testCreateAndRead() {
        assertEquals(holidayDao.read(holiday.getId()), holiday);
    }

    @Test
    public void testUpdate() {
        holiday.setEndDate(Utils.buildDate(2015, 3, 5));
        holidayDao.update(holiday);
        assertEquals(holiday, holidayDao.read(holiday.getId()));
    }
    
    @Test
    public void testDeleteById(){
    	holidayDao.deleteById(holiday.getId());
    	assertNull(holidayDao.read(holiday.getId()));
    }

    @Test
    public void testList() {
        Holiday holiday1 = new Holiday(Utils.buildDate(2015, 3, 8),Utils.buildDate(2015, 3, 8));
        holidayDao.create(holiday1);
        Holiday holiday2 = new Holiday(Utils.buildDate(2015, 4, 8),Utils.buildDate(2015, 4, 8));
        holidayDao.create(holiday2);

        List<Holiday> listHoliday= new ArrayList<Holiday>();
        listHoliday.add(holiday);
        listHoliday.add(holiday1);
        listHoliday.add(holiday2);

        assertEquals(3, holidayDao.findAll().size());
    }
}
