package upm.miw.pfm.models.daos;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({EmployeeDaoTest.class, ContractDaoTest.class, ProjectDaoTest.class,
        ProjectScheduleDaoTest.class, HolidayDaoTest.class})
public class AllTests {

}
