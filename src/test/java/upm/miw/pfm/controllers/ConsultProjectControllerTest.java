package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ConsultProjectControllerEjb;

import upm.miw.pfm.mocks.MockProjectDao;

import upm.miw.pfm.models.entities.Project;

public class ConsultProjectControllerTest {
	
	ConsultProjectControllerEjb consultProjectController;
	Date start;
	Date end;
	Project project;
	
	@Before
	public void before(){
		  String startString = "March 2, 2015";
		  String endString = "September 4, 2015";
	      DateFormat df = DateFormat.getDateInstance();
	      try {
	         start = df.parse(startString);
	         end = df.parse(endString);
	      }
	      catch(ParseException e) {
	         System.out.println("Unable to parse " + startString);
	      }
		  consultProjectController = new ConsultProjectControllerEjb();
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
