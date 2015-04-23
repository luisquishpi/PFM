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

public class ProjectControllerTest {

	private ProjectController projectController;

	private Project project;
	
	private Date start;
	private Date end;

	@Before
	public void before() {
		projectController = new ProjectControllerEjb();
		start = new Date();
		end = new Date();
		try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02-03-2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("04-09-2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		project = new Project("Scrum", start, end, 85000.0);
	}
	
	@Test
	public void testCreateAndGetProyect() {
		new MockProjectDao(new Project());
		projectController.createProject(project);
		Project project = projectController.getProyect(10);
		assertEquals(project, new Project(10,"Scrum", start,end, 85000.00));
	}

}

