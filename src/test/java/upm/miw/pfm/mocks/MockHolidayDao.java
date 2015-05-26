package upm.miw.pfm.mocks;

import java.util.List;

import mockit.Mock;
import mockit.MockUp;
import upm.miw.pfm.models.daos.hibernate.HolidayDaoHibernate;
import upm.miw.pfm.models.entities.Holiday;

public class MockHolidayDao extends MockUp<HolidayDaoHibernate>{
	
	private Holiday holiday;
	
	private List<Holiday> holidayList;

	public MockHolidayDao(Holiday holiday) {
		this.holiday = holiday;
	}

	public MockHolidayDao(List<Holiday> holidayList) {
		this.holidayList = holidayList;
	}

	public MockHolidayDao() {
		// TODO Auto-generated constructor stub
	}

	@Mock
    public List<Holiday> findAll() {
        return holidayList;
    }

    @Mock
    public Holiday create(Holiday holiday) {
        holiday.setId(1);
        this.holiday = holiday;
        return holiday;
    }

    @Mock
    public Holiday read(Integer id) {
        return holiday;
    }

    @Mock
    public void update(Holiday holiday) {
        holiday.setId(1);
        this.holiday = holiday;
    }

}
