
package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import mockit.Mock;
import mockit.MockUp;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.entities.Project;

public class CreateProjectControllerTest {

	private CreateProjectController createProjectController;

	private Project project;

	@BeforeClass
	public void beforeClass() {
		createProjectController = new CreateProjectController();
	}

	@Before
	public void before() {
		Date start = new Date();
		Date end = new Date();
		try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02/02/2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("02/06/2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		project = new Project(start, end, 100000.0);
	}

	@Test
	public void crearProyectoTest() {
		new MockUp<ProjectDao>() {
			@Mock
			public Project create(Project project) {
				Project returnProject = new Project(project.getStart(),
						project.getEnd(), project.getCost());
				returnProject.setId(12);
				return returnProject;
			}
		};
		Project project2 = createProjectController.createProject(project);
		assertEquals(project2.getId(), 12);
	}
}
