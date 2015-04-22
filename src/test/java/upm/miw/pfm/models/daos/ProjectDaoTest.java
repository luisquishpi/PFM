package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.mocks.MockProjectDao;
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
		
	}
	
	@Test
	public void createAndReadTest() {
		new MockProjectDao(project);
		projectDao.create(project);
		assertEquals(projectDao.read(project.getId()), project);
	}

}
