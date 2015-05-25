package upm.miw.pfm.integracion;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ ProjectControllerTest.class, SetScheduleControllerTest.class,
		ContractControllerTest.class, EmployeeControllerTest.class,
		VacationControllerTest.class, HolidayControllerTest.class})
public class AllTests {

}
