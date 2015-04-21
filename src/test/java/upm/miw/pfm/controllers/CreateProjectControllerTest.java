
package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import mockit.Mock;
import mockit.MockUp;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ProjectControllerEjb;
import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.entities.Project;

public class CreateProjectControllerTest {

	private ProjectController ProjectController;

	private Project project;

	@Before
	public void before() {
		ProjectController = new ProjectControllerEjb();
		Date start = new Date();
		Date end = new Date();
		try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02-03-2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("04-09-2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		project = new Project("Scrum", start, end, 85000.0);
	}

	@Test
	public void crearProyectoTest() {
		new MockUp<ProjectDao>() {
			@Mock
			public Project create(Project project) {
				Project returnProject = new Project(project.getName(), project.getStart(),
						project.getEnd(), project.getCost());
				returnProject.setId(12);
				return returnProject;
			}
		};
		Project project2 = ProjectController.createProject(project);
		assertNotEquals(0, project2.getId());
	}
}
