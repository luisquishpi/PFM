package upm.miw.pfm.models.daos;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;


@RunWith(Suite.class)
@SuiteClasses({EmployeeDaoTest.class, ProjectDaoTest.class,
        ProjectScheduleDaoTest.class, ContractDaoTest.class,HolidayDaoTest.class, HoursRolePhaseDaoTest.class})
public class AllTests {

}
