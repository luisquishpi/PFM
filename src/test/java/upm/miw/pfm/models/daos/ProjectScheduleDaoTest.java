package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

public class ProjectScheduleDaoTest {

	private static ProjectDao projectDao;
	private Project project;
	private Project project2;
	private static ProjectScheduleDao projectScheduleDao;
	private ProjectSchedule projectSchedule;
	
	@BeforeClass
	public static void beforeClass(){
		DaoFactory.setFactory(new DaoHibernateFactory());
		projectScheduleDao = DaoFactory.getFactory().getProjectScheduleDao();
		projectDao = DaoFactory.getFactory().getProjectDao();
	}
	
	@Before
	public void before(){
		Date start = Utils.buildDate(2015, 3, 2);
		Date end = Utils.buildDate(2015, 9, 4);
		project = new Project("Scrum", start, end, 85000.0);
		project2 = new Project("ScrumXP", start, end, 80000.0);
		projectSchedule = new ProjectSchedule(project, 21, 8D, 8D, 8D, 8D, 8D, 0D, 0D);
		project.setProjectSchedule(projectSchedule);
		projectSchedule.setProject(project);
		projectDao.create(project2);
		projectDao.create(project);
	}
	
	@After
	public void after(){
		projectDao.deleteById(project.getId());
	}
	
	@Test
	public void createAndReadTest() {
		System.out.println(projectDao.read(projectSchedule.getId()).getProjectSchedule().getFridayHours());
		assertEquals(project.getId(), projectSchedule.getId());
		assertEquals(projectSchedule, projectScheduleDao.read(projectSchedule.getId()));
	}

	@Test
	public void deleteById(){
		projectDao.deleteById(projectSchedule.getId());
		assertNull(projectScheduleDao.read(projectSchedule.getId()));
	}

	@Test
	public void updateTest(){
		ProjectSchedule projectschedule2 = new ProjectSchedule(project, 20, 8D, 8D, 6D, 6D, 8D, 0D, 0D);
		projectschedule2.setProject(project);
		projectschedule2.setId(projectSchedule.getId());
		projectScheduleDao.update(projectschedule2);
		assertEquals(projectschedule2, projectScheduleDao.read(projectSchedule.getId()));
	}

	@Test
	public void findAllTest(){
		List<ProjectSchedule> projects = new ArrayList<ProjectSchedule>();
		projects.add(projectSchedule);
		ProjectSchedule projectSchedule2 = new ProjectSchedule(project, 20, 8D, 8D, 6D, 6D, 8D, 0D, 0D);
		projectSchedule2.setProject(project2);
		projects.add(projectSchedule2);
		projectDao.update(project2);
		
		assertEquals(projects, projectScheduleDao.findAll());
	}

}
