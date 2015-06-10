package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.ejbs.ProjectControllerEjb;
import upm.miw.pfm.models.daos.DaoFactory;
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
        project.setPeopleInicio(2.5);
        project.setPeopleElaboracion(3D);
        project.setPeopleConstruccion(3.5);
        project.setPeopleTransicion(4D);        
    }

    @Test
    public void testCreateAndGetProyect() {
        projectController.createProject(project);
        int id = project.getId();
        System.out.println(projectController.getProject(id));
        assertEquals(project, projectController.getProject(id));
    }

    @Test
    public void testListProjects() {
        List<Project> projectList = new ArrayList<Project>();
        Project project1 = new Project("Project1", Utils.buildDate(2015, Calendar.MARCH, 2),
                Utils.buildDate(2015, Calendar.SEPTEMBER, 4), 85000.00);
        project1.setPeopleInicio(2.3);
        project1.setPeopleElaboracion(3.2);
        project1.setPeopleConstruccion(2.5);
        project1.setPeopleTransicion(5D);
        projectController.createProject(project1);
        projectList.add(project1);

        Project project2 = new Project("Project2", Utils.buildDate(2015, Calendar.APRIL, 3),
                Utils.buildDate(2015, Calendar.OCTOBER, 5), 150000.00);
        project2.setPeopleInicio(3.5);
        project2.setPeopleElaboracion(3D);
        project2.setPeopleConstruccion(4.5);
        project2.setPeopleTransicion(4D);
        projectController.createProject(project2);
        projectList.add(project2);

        Project project3 = new Project("Project3", Utils.buildDate(2015, Calendar.MAY, 4),
                Utils.buildDate(2015, Calendar.NOVEMBER, 6), 100000.00);
        project3.setPeopleInicio(4.5);
        project3.setPeopleElaboracion(4D);
        project3.setPeopleConstruccion(4.5);
        project3.setPeopleTransicion(4D);
        projectController.createProject(project3);
        projectList.add(project3);

        assertEquals(3, projectController.listProjects().size());
    }

    @Test
    public void testEmptyListProjects() {
        new ArrayList<Project>();
        assertEquals(0, projectController.listProjects().size());
    }

    @Test
    public void testUpdateProyect() {
        projectController.createProject(project);
        project.setIterationDays(12);
        projectController.updateProject(project);
        Project project2 = projectController.getProject(project.getId());
        assertEquals(project2, project);
    }

    @After
    public void after() {
        DaoFactory.getFactory().getProjectDao().deleteAll();
    }

}
