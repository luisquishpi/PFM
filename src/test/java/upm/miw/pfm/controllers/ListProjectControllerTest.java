package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ListProjectsControllerEjb;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Utils;

public class ListProjectControllerTest {

    private ListProjectsController listProjectController;

    @Before
    public void before() {
        listProjectController = new ListProjectsControllerEjb();
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

        Project project3 = new Project("Project3", Utils.buildDate(2015, Calendar.MAY, 4), Utils.buildDate(
                2015, Calendar.NOVEMBER, 6), 100000.00);
        projectList.add(project3);
        new MockProjectDao(projectList);

        assertEquals(3, listProjectController.listProjects().size());
    }

    @Test
    public void testEmptyListProjects() {
        List<Project> projectList = new ArrayList<Project>();
        new MockProjectDao(projectList);
        assertEquals(0, listProjectController.listProjects().size());
    }

}
