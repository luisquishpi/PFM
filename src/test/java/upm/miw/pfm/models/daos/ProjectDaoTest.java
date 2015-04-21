package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Project;

public class ProjectDaoTest {

	private ProjectDao projectDao;
	private Project project;
	
	@Before
	public void before(){
		DaoFactory.setFactory(new DaoHibernateFactory());
		projectDao = DaoFactory.getFactory().getProjectDao();
		Date start = new Date();
		Date end = new Date();
		try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02/03/2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("04/09/2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		project = new Project("Scrum", start, end, 85000.0);
	}
	
	@Test
	public void createAndReadTest() {
		projectDao.create(project);
		assertEquals(projectDao.read(project.getId()), project);
	}

}
