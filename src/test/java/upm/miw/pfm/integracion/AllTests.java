package upm.miw.pfm.integracion;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ContractControllerTest.class, ProjectControllerTest.class,
        SetScheduleControllerTest.class})
public class AllTests {

}
