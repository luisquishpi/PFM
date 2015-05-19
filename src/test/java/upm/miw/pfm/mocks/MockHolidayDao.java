package upm.miw.pfm.mocks;

import java.util.List;

import mockit.Mock;
import upm.miw.pfm.models.entities.Holiday;

public class MockHolidayDao {
	
	private Holiday holiday;
	
	private List<Holiday> holidayList;

	public MockHolidayDao(Holiday holiday, List<Holiday> holidayList) {
		this.holiday = holiday;
		this.holidayList = holidayList;
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
