package upm.miw.pfm.controllers;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({EmployeeControllerTest.class, ContractControllerTest.class,
        ProjectControllerTest.class, SetScheduleControllerTest.class,VacationControllerTest.class})
public class AllTests {

}
