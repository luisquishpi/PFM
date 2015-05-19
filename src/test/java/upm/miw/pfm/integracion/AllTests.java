package upm.miw.pfm.integracion;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ProjectControllerTest.class,
        SetScheduleControllerTest.class, VacationControllerTest.class, ContractControllerTest.class})
public class AllTests {

}
