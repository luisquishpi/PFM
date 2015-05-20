package upm.miw.pfm.models.daos;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

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
        assertEquals( holiday, holidayDao.read(holiday.getId()));
    }

    @Test
    public void testUpdate() {
        holiday.setEnd(Utils.buildDate(2015, 3, 5));
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
  
    @Test
    public void testValidateHoliday() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        holiday = new Holiday(Utils.buildDate(2015, 10, 1), Utils.buildDate(2015, 10, 15));
        holidayDao.create(holiday);
        
        Holiday holiday2 = new Holiday(Utils.buildDate(2015, 12, 5), Utils.buildDate(2015, 13, 10));
        Holiday holidayInvalid = new Holiday(Utils.buildDate(2015, 10, 5), Utils.buildDate(2015, 10, 10));

        Set<ConstraintViolation<Holiday>> errors = validator.validate(holidayInvalid);
        assertTrue(errors.size() > 0);

        errors = validator.validate(holiday2);
        assertFalse(errors.size() > 0);
    }
    
}
