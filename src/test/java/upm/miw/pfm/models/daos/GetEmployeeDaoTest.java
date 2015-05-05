package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class GetEmployeeDaoTest {

    private EmployeeDao employeeDao;

    private ContractDao contractDao;

    private Employee employee;

    List<RoleType> roles = new ArrayList<RoleType>();

    private Contract contract;

    @BeforeClass
    public static void beforeClass() {
        DaoFactory.setFactory(new DaoHibernateFactory());
    }

    @Before
    public void before() {
        employeeDao = DaoFactory.getFactory().getEmployeeDao();
        contractDao = DaoFactory.getFactory().getContractDao();

        roles.add(RoleType.PROJECT_MANAGEMENT);
        roles.add(RoleType.REQUIREMENTS);
        roles.add(RoleType.ANALYSIS_DESIGN);
        roles.add(RoleType.TESTS);
        roles.add(RoleType.DEPLOY);
        roles.add(RoleType.ENVIROMENT_REVISION_CONTROL);
        contract = new Contract("Fijo", 22.00);
        contractDao.create(contract);
    }

    @Test
    public void testRead() {
        employee = new Employee("Anibal", "Bernal", "AB", 40500.00, contract, roles);
        employeeDao.create(employee);
        assertEquals(employee, employeeDao.read(employee.getId()));
    }

}
