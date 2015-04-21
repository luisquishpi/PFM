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

public class ConsultProjectControllerTest {
	
	ProjectControllerEjb projectController;
	Date start;
	Date end;
	
	@Before
	public void before(){
      try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02-03-2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("04-09-2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
	  projectController = new ProjectControllerEjb();
	}

	@Test
	public void test() {
		new MockUp<ProjectDao>() {
			@Mock
			public Project read(Integer id){
			    Project p = new Project("Scrum", start, end, 100000.00);
			    p.setId(1);
			    System.out.println("a");
				return p;
			}
		};
		Project project = projectController.getProyect(1);
		assertEquals(project, new Project("Scrum", start,end, 100000.00));
	}

}
