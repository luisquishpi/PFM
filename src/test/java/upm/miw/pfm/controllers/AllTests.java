package upm.miw.pfm.controllers;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({AddEmployeeControllerTest.class, ContractControllerTest.class,
        GetEmployeeControllerTest.class, ListEmployeesControllerTest.class,
        ProjectControllerTest.class, SetScheduleControllerMockTest.class,VacationControllerTest.class})
public class AllTests {

}
