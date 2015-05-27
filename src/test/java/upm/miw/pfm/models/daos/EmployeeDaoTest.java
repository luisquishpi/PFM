package upm.miw.pfm.models.daos;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.daos.hibernate.VacationDaoHibernate;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;
import upm.miw.pfm.utils.RoleType;
import upm.miw.pfm.utils.Utils;

public class EmployeeDaoTest {

    private EmployeeDao employeeDao;

    private ContractDao contractDao;

    private VacationDao vacationDao;

    private Contract contract;

    private Employee employee;

    private Vacation vacation;

    private Date startDate;

    private Date endDate;

    @BeforeClass
    public static void beforeClass() {
        DaoFactory.setFactory(new DaoHibernateFactory());
        DaoFactory.getFactory().setDao(new VacationDaoHibernate());
    }

    @Before
    public void before() {
        employeeDao = DaoFactory.getFactory().getEmployeeDao();
        contractDao = DaoFactory.getFactory().getContractDao();
        vacationDao = DaoFactory.getFactory().getVacationDao();
        contract = new Contract("Fijo", 32.5);
        contractDao.create(contract);
        Set<RoleType> roles = new HashSet<RoleType>();
        roles.add(RoleType.ANALYSIS_DESIGN);
        roles.add(RoleType.REQUIREMENTS);
        employee = new Employee("José", "Pacheco", "0922596192", 1500.00, contract, roles);
        employeeDao.create(employee);
    }

    @Test
    public void testCreateAndRead() {
        Employee employeeRead = employeeDao.read(employee.getId());
        assertEquals(employeeRead, employee);
    }

    @Test
    public void testUpdate() {
        Employee employeeUpdate = new Employee();
        Set<RoleType> roles = new HashSet<RoleType>();
        roles.add(RoleType.TESTS);
        employeeUpdate = new Employee("Juan", "Perez", "0822596172", 200.00, contract, roles);
        employeeUpdate.setId(employee.getId());
        employeeDao.update(employeeUpdate);
        assertEquals(employeeDao.read(employee.getId()), employeeUpdate);
    }

    @Test
    public void testDeleteById() {
        employeeDao.deleteById(employee.getId());
        assertNull(employeeDao.read(employee.getId()));
    }

    @Test
    public void testFindAll() {
        List<Employee> employeeList = new ArrayList<Employee>();
        employeeList.add(employee);
        Employee employee2 = new Employee("José", "Pacheco", "0922596192", 1500.00, contract);
        employeeList.add(employee2);
        employeeDao.create(employee2);

        assertEquals(employeeDao.findAllWithoutRoles().size(), employeeList.size());
        assertEquals(employeeDao.findAllWithoutRoles(), employeeList);
    }

    @Test
    public void testAddRole() {
        employee.getRoles().add(RoleType.DEPLOY);
        employeeDao.update(employee);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(employee.getRoles(), employeePostUpdate.getRoles());
        assertEquals(true, employee.getRoles().containsAll(employeePostUpdate.getRoles()));
    }

    @Test
    public void testAddRoles() {
        assertEquals(
                true,
                employee.getRoles().addAll(
                        new ArrayList<RoleType>(Arrays.asList(RoleType.ANALYSIS_DESIGN,
                                RoleType.DEPLOY, RoleType.IMPLEMENTATION, RoleType.TESTS))));
        employeeDao.update(employee);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(5, employeePostUpdate.getRoles().size());
        assertEquals(true, employee.getRoles().containsAll(employeePostUpdate.getRoles()));
    }

    @Test
    public void testRemoveRole() {
        assertEquals(true, employee.getRoles().remove(RoleType.ANALYSIS_DESIGN));
        employeeDao.update(employee);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(1, employeePostUpdate.getRoles().size());
        assertEquals(true, employee.getRoles().containsAll(employeePostUpdate.getRoles()));
    }

    @Test
    public void testRemoveRoles() {
        assertEquals(
                true,
                employee.getRoles().removeAll(
                        new ArrayList<RoleType>(Arrays.asList(RoleType.ANALYSIS_DESIGN,
                                RoleType.REQUIREMENTS, RoleType.IMPLEMENTATION))));
        employeeDao.update(employee);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(true, employeePostUpdate.getRoles().isEmpty());
    }

    @Test
    public void testRemoveAllRoles() {
        assertEquals(2, employee.getRoles().size());
        employee.getRoles().clear();
        employeeDao.update(employee);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(true, employeePostUpdate.getRoles().isEmpty());
    }

    @Test
    public void testValidateVacation() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        vacation = new Vacation(Utils.buildDate(2015, 10, 1), Utils.buildDate(2015, 10, 15),
                employee);
        vacationDao.create(vacation);

        Vacation vacation2 = new Vacation(Utils.buildDate(2015, 12, 5), Utils.buildDate(2015, 13,
                10), employee);
        Vacation vacationInvalid = new Vacation(Utils.buildDate(2015, 10, 5), Utils.buildDate(2015,
                10, 10), employee);

        Set<ConstraintViolation<Vacation>> errors = validator.validate(vacationInvalid);
        assertTrue(errors.size() > 0);

        errors = validator.validate(vacation2);
        assertFalse(errors.size() > 0);
    }

    @Test
    public void testCreateAndReadVacation() {
        startDate = Utils.buildDate(2015, 10, 1);
        endDate = Utils.buildDate(2015, 10, 15);
        vacation = new Vacation(startDate, endDate, employee);
        vacationDao.create(vacation);
        assertEquals(vacation, vacationDao.read(vacation.getId()));
    }

    @Test
    public void testFindVacationsByEmployee() {

        vacation = new Vacation(Utils.buildDate(2015, 10, 1), Utils.buildDate(2015, 10, 2),
                employee);
        vacationDao.create(vacation);
        vacation = new Vacation(Utils.buildDate(2015, 11, 2), Utils.buildDate(2015, 11, 6),
                employee);
        vacationDao.create(vacation);

        assertEquals(2, vacationDao.findAll(employee).size());
    }

    @After
    public void after() {
        vacationDao.deleteAll(employee);
        employeeDao.deleteAll();
        contractDao.deleteAll();
    }

}
