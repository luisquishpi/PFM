package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ProjectControllerEjb;
import upm.miw.pfm.mocks.MockHolidayDao;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Utils;

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
        Project project = projectController.getProject(10);
        assertEquals(project, new Project(10, "Scrum", start, end, 85000.00));
    }

    @Test
    public void testListProjects() {
        List<Project> projectList = new ArrayList<Project>();
        Project project1 = new Project("Project1", Utils.buildDate(2015, Calendar.MARCH, 2),
                Utils.buildDate(2015, Calendar.SEPTEMBER, 4), 85000.00);
        projectList.add(project1);

        Project project2 = new Project("Project2", Utils.buildDate(2015, Calendar.APRIL, 3),
                Utils.buildDate(2015, Calendar.OCTOBER, 5), 150000.00);
        projectList.add(project2);

        Project project3 = new Project("Project3", Utils.buildDate(2015, Calendar.MAY, 4),
                Utils.buildDate(2015, Calendar.NOVEMBER, 6), 100000.00);
        projectList.add(project3);
        new MockProjectDao(projectList);

        assertEquals(3, projectController.listProjects().size());
    }

    @Test
    public void testEmptyListProjects() {
        List<Project> projectList = new ArrayList<Project>();
        new MockProjectDao(projectList);
        assertEquals(0, projectController.listProjects().size());
    }
    
    @Test
    public void testUpdateProyect(){
    	new MockProjectDao(new Project());
    	projectController.createProject(project);
    	project.setIterationDays(12);
    	projectController.updateProject(project);
    	Project project2 = projectController.getProject(project.getId());
    	assertEquals(project2, project);
    }

}
