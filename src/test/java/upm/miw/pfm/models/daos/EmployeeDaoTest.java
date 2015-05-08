package upm.miw.pfm.models.daos;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class EmployeeDaoTest {

    private EmployeeDao employeeDao;

    private ContractDao contractDao;

    private Contract contract;

    private Employee employee;

    @Before
    public void before() {
        DaoFactory.setFactory(new DaoHibernateFactory());
        employeeDao = DaoFactory.getFactory().getEmployeeDao();
        contractDao = DaoFactory.getFactory().getContractDao();
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
        Employee employeePreUpdate = employeeDao.read(employee.getId());
        assertEquals(false, employeePreUpdate.getRoles().add(RoleType.ANALYSIS_DESIGN));
        employeeDao.update(employeePreUpdate);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(2, employeePostUpdate.getRoles().size());
        assertEquals(true, employeePreUpdate.getRoles().containsAll(employeePostUpdate.getRoles()));
    }

    @Test
    public void testAddRoles() {
        Employee employeePreUpdate = employeeDao.read(employee.getId());
        assertEquals(
                true,
                employeePreUpdate.getRoles().addAll(
                        new ArrayList<RoleType>(Arrays.asList(RoleType.ANALYSIS_DESIGN,
                                RoleType.DEPLOY, RoleType.IMPLEMENTATION, RoleType.TESTS))));
        employeeDao.update(employeePreUpdate);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(5, employeePostUpdate.getRoles().size());
        assertEquals(true, employeePreUpdate.getRoles().containsAll(employeePostUpdate.getRoles()));
    }

    @Test
    public void testRemoveRole() {
        Employee employeePreUpdate = employeeDao.read(employee.getId());
        assertEquals(true, employeePreUpdate.getRoles().remove(RoleType.ANALYSIS_DESIGN));
        employeeDao.update(employeePreUpdate);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(1, employeePostUpdate.getRoles().size());
        assertEquals(true, employeePreUpdate.getRoles().containsAll(employeePostUpdate.getRoles()));
    }

    @Test
    public void testRemoveRoles() {
        Employee employeePreUpdate = employeeDao.read(employee.getId());
        assertEquals(
                true,
                employeePreUpdate.getRoles().removeAll(
                        new ArrayList<RoleType>(Arrays.asList(RoleType.ANALYSIS_DESIGN,
                                RoleType.REQUIREMENTS, RoleType.IMPLEMENTATION))));
        employeeDao.update(employeePreUpdate);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(true, employeePostUpdate.getRoles().isEmpty());
    }

    @Test
    public void testRemoveAllRoles() {
        Employee employeePreUpdate = employeeDao.read(employee.getId());
        assertEquals(2, employeePreUpdate.getRoles().size());
        employeePreUpdate.getRoles().clear();
        employeeDao.update(employeePreUpdate);
        Employee employeePostUpdate = employeeDao.read(employee.getId());
        assertEquals(true, employeePostUpdate.getRoles().isEmpty());
    }

    @After
    public void after() {
        List<Employee> employeeList = employeeDao.findAllWithoutRoles();
        for (Employee tmpEmployee : employeeList) {
            employeeDao.deleteById(tmpEmployee.getId());
        }
        contractDao.query("delete from Contract");
    }

}
