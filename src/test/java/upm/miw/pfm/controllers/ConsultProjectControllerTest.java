package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ProjectControllerEjb;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.entities.Project;

public class ConsultProjectControllerTest {
	
	ProjectControllerEjb consultProjectController;
	Date start;
	Date end;
	Project project;
	
	@Before
	public void before(){
		try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02-03-2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("04-09-2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		  consultProjectController = new ProjectControllerEjb();
		  project = new Project("Mi proyecto", start, end, 100000.00);
		  project.setId(10);
	}

	@Test
	public void testGetProyect() {
		new MockProjectDao(project);
		Project project = consultProjectController.getProyect(10);
		assertEquals(project, new Project(10,"Mi proyecto", start,end, 100000.00));
	}
}
