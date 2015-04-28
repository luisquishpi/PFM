package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

public class ProjectScheduleDaoTest {

	private ProjectDao projectDao;
	private Project project;
	private ProjectScheduleDao projectScheduleDao;
	private ProjectSchedule projectSchedule;
	
	@Before
	public void before(){
		DaoFactory.setFactory(new DaoHibernateFactory());
		projectDao = DaoFactory.getFactory().getProjectDao();
		projectScheduleDao = DaoFactory.getFactory().getProjectScheduleDao();
		Date start = Utils.buildDate(2015, 3, 2);
		Date end = Utils.buildDate(2015, 9, 4);
		project = new Project("Scrum", start, end, 85000.0);
		projectSchedule = new ProjectSchedule(project, 21, 8D, 8D, 8D, 8D, 8D, 0D, 0D);
		project.setProjectSchedule(projectSchedule);
		projectSchedule.setProject(project);
		projectDao.create(project);
		
	}
	
	@After
	public void after(){
		projectScheduleDao.deleteById(project.getId());
	}
	
	@Test
	public void createAndReadTest() {
		assertEquals(project.getId(), projectSchedule.getId());
		assert(projectSchedule.equals(projectScheduleDao.read(projectSchedule.getId())));
	}

	@Test
	public void deleteById(){
		projectScheduleDao.deleteById(projectSchedule.getId());
		assertNull(projectScheduleDao.read(projectSchedule.getId()));
	}

	@Test
	public void updateTest(){
		ProjectSchedule projectschedule2 = new ProjectSchedule(project, 20, 8D, 8D, 6D, 6D, 8D, 0D, 0D);
		projectScheduleDao.update(projectschedule2);
		assert(projectschedule2.equals(projectScheduleDao.read(projectSchedule.getId())));
	}

	@Test
	public void findAllTest(){
		List<ProjectSchedule> projects = new ArrayList<ProjectSchedule>();
		projects.add(projectSchedule);
		ProjectSchedule projectschedule2 = new ProjectSchedule(project, 20, 8D, 8D, 6D, 6D, 8D, 0D, 0D);
		projects.add(projectschedule2);
		projectScheduleDao.create(projectschedule2);
		
		assert(projects.equals(projectScheduleDao.findAll()));
	}

}
