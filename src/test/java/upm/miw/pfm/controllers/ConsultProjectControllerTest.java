package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.util.Date;

import mockit.Mock;
import mockit.MockUp;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ConsultProjectControllerEjb;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.daos.hibernate.ProjectDaoHibernate;
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
		  project = new Project(start, end, 100000.00);		  
	}

	@Test
	public void testGetProyect() {
		new MockProjectDao(project);
		Project project = consultProjectController.getProyect(1);
		assertEquals(project, new Project(start,end, 100000.00));
	}
}
