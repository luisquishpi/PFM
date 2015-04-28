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
import upm.miw.pfm.utils.Utils;

public class ProjectDaoTest {

	private ProjectDao projectDao;
	private Project project;
	
	@Before
	public void before(){
		DaoFactory.setFactory(new DaoHibernateFactory());
		projectDao = DaoFactory.getFactory().getProjectDao();
		Date start = Utils.buildDate(2015, 3, 2);
		Date end = Utils.buildDate(2015, 9, 4);
		project = new Project("Scrum", start, end, 85000.0);
		projectDao.create(project);
	}
	
	@After
	public void after(){
		projectDao.deleteById(project.getId());
	}
	
	@Test
	public void createAndReadTest() {
		System.out.println(projectDao.read(project.getId()));
		assertEquals(projectDao.read(project.getId()), project);
	}
	
	@Test
	public void testUpdate() {
		Project project2 = new Project("RUP", Utils.buildDate(2015, 3, 5),Utils.buildDate(2015, 7, 4), 7000.0);
		project2.setId(project.getId());
		projectDao.update(project2);
		assertEquals(projectDao.read(project.getId()), project2);
	}

	@Test
	public void testDeleteById() {
		projectDao.deleteById(project.getId());
		assertNull(projectDao.read(project.getId()));
	}

	@Test
	public void testFindAll() {
		List<Project> projects = new ArrayList<Project>();
		projects.add(project);
		Project Project2 = new Project("RUP", Utils.buildDate(2015, 3, 5),Utils.buildDate(2015, 7, 4), 7000.0);
		projects.add(Project2);
		projectDao.create(Project2);
		
		assertEquals(projectDao.findAll(), projects);
	}

}
