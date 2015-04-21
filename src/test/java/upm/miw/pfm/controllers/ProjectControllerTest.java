package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

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
	public void createAndConsultProjectTest() {
		new MockUp<ProjectDao>() {
			@Mock
			public Project create(Project project) {
				Project returnProject = new Project(project.getName(), project.getStart(),
						project.getEnd(), project.getCost());
				returnProject.setId(12);
				return returnProject;
			}
		};
		Project project2 = projectController.createProject(project);
		assertNotEquals(0, project2.getId());
	}
	
	@Test
	public void test() {
		new MockUp<ProjectDao>() {
			@Mock
			public Project read(Integer id){
			    return new Project("Scrum", start, end, 100000.00);
			}
		};
		Project project2 = projectController.getProyect(1);
		assertEquals(project2, new Project("Scrum", start,end, 100000.00));
	}

}
