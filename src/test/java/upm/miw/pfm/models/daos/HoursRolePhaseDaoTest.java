package upm.miw.pfm.models.daos;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Phases;
import upm.miw.pfm.utils.RoleType;
import upm.miw.pfm.utils.Utils;

public class HoursRolePhaseDaoTest {

	private EmployeeDao employeeDao;

    private ContractDao contractDao;
    
    private ProjectDao projectDao;
    
    private HoursRolePhaseDao hoursRolePhaseDao;

    private Project project;

    private Contract contract;

    private Employee employee;
    
    private HoursRolePhase hoursRolePhase;
    
	@Before
	public void before(){
		DaoFactory.setFactory(new DaoHibernateFactory());
        projectDao = DaoFactory.getFactory().getProjectDao();
        employeeDao = DaoFactory.getFactory().getEmployeeDao();
        contractDao = DaoFactory.getFactory().getContractDao();
        hoursRolePhaseDao = DaoFactory.getFactory().getHoursRolePhaseDao();
        
        contract = new Contract("Fijo", 32.5);
        contractDao.create(contract);
        
        Set<RoleType> roles = new HashSet<RoleType>();
        roles.add(RoleType.ANALYSIS_DESIGN);
        roles.add(RoleType.REQUIREMENTS);
        employee = new Employee("José", "Pacheco", "0922596192", 1500.00, contract, roles);
        employeeDao.create(employee);
        
        Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        project = new Project("Scrum", start, end, 85000.0);
        projectDao.create(project);
        
        hoursRolePhase = new HoursRolePhase(employee, project, 34.4, Phases.INICIO, RoleType.ANALYSIS_DESIGN);
        hoursRolePhaseDao.create(hoursRolePhase);
	}

	@Test
	public void createAndRead(){
		assertEquals(hoursRolePhaseDao.read(hoursRolePhase.getId()), hoursRolePhase);
	}
	
	@Test
    public void testUpdate() {
		Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        Project project2 = new Project("RUP", start, end, 45000.0);
        projectDao.create(project2);
        hoursRolePhase.setPhase(Phases.CONSTRUCCION);
        hoursRolePhase.setProject(project2);
        hoursRolePhaseDao.update(hoursRolePhase);
        assertEquals(hoursRolePhaseDao.read(hoursRolePhase.getId()), hoursRolePhase);
    }

    @Test
    public void testDeleteById() {
        hoursRolePhaseDao.deleteById(hoursRolePhase.getId());
        assertNull(hoursRolePhaseDao.read(hoursRolePhase.getId()));
    }
    
    @Test
    public void testFindAll(){
    	List<HoursRolePhase> list = new ArrayList<HoursRolePhase>();
    	HoursRolePhase hoursRolePhase2 = new HoursRolePhase(employee, project, 52D, Phases.ELABORACION, RoleType.DEPLOY);
    	HoursRolePhase hoursRolePhase3 = new HoursRolePhase(employee, project, 32D, Phases.ELABORACION, RoleType.ANALYSIS_DESIGN);
    	list.add(hoursRolePhase);
    	list.add(hoursRolePhase2);
    	list.add(hoursRolePhase3);
    	hoursRolePhaseDao.create(hoursRolePhase2);
    	hoursRolePhaseDao.create(hoursRolePhase3);
    	
    	assertEquals(hoursRolePhaseDao.findAll(), list);
    }
    
    @Test
    public void testFindByProject(){
        List<HoursRolePhase> list = new ArrayList<HoursRolePhase>();
        HoursRolePhase hoursRolePhase2 = new HoursRolePhase(employee, project, 52D, Phases.ELABORACION, RoleType.DEPLOY);
        HoursRolePhase hoursRolePhase3 = new HoursRolePhase(employee, project, 32D, Phases.ELABORACION, RoleType.ANALYSIS_DESIGN);

        Date start = Utils.buildDate(2015, Calendar.APRIL, 2);
        Date end = Utils.buildDate(2015, Calendar.DECEMBER, 4);
        Project project2 = new Project("Scrum+X^P", start, end, 185000.0);
        projectDao.create(project2);
        HoursRolePhase hoursRolePhase4 = new HoursRolePhase(employee, project2, 32D, Phases.TRANSICION, RoleType.REQUIREMENTS);

        list.add(hoursRolePhase);
        list.add(hoursRolePhase2);
        list.add(hoursRolePhase3);
        hoursRolePhaseDao.create(hoursRolePhase2);
        hoursRolePhaseDao.create(hoursRolePhase3);
        hoursRolePhaseDao.create(hoursRolePhase4);
        
        assertEquals(hoursRolePhaseDao.findByProject(project), list);
    }    
    
    @After
    public void after(){
    	hoursRolePhaseDao.deleteAll();
    	employeeDao.deleteAll();
        projectDao.deleteAll();
        contractDao.deleteAll();
    }
}
