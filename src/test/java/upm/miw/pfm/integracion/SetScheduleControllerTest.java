package upm.miw.pfm.integracion;

import static org.junit.Assert.assertEquals;

import java.util.Calendar;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.controllers.ejbs.ProjectControllerEjb;
import upm.miw.pfm.controllers.ejbs.SetScheduleControllerEjb;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

public class SetScheduleControllerTest {

    private SetScheduleController setScheduleController;

    private ProjectController projectController;

    private static final double DELTA = 1e-15;

    @Before
    public void setUp() throws Exception {
        setScheduleController = new SetScheduleControllerEjb();
        projectController = new ProjectControllerEjb();
    }

    @Test
    public void setScheduleTest() {
        Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        Project project = new Project("Scrum", start, end, 85000.0);
        projectController.createProject(project);

        ProjectSchedule schedule = new ProjectSchedule();
        schedule.setWorkDays(21);
        schedule.setMondayHours(8D);
        schedule.setTuesdayHours(8D);
        schedule.setWednesdayHours(8D);
        schedule.setThursdayHours(8D);
        schedule.setFridayHours(8D);
        schedule.setSaturdayHours(0D);
        schedule.setSundayHours(0D);
        schedule.setProject(project);
        setScheduleController.setProjectSchedule(schedule);
        
        assertEquals(project, setScheduleController.getProjectSchedule(project.getId())
                .getProject());
        assertEquals(schedule, setScheduleController.getProjectSchedule(project.getId()));
        Integer expectedWorkDays = 21;
        assertEquals(expectedWorkDays, setScheduleController.getProjectSchedule(project.getId())
                .getWorkDays());
        assertEquals(8, setScheduleController.getProjectSchedule(project.getId()).getMondayHours(),
                DELTA);
        assertEquals(8,
                setScheduleController.getProjectSchedule(project.getId()).getTuesdayHours(), DELTA);
        assertEquals(8, setScheduleController.getProjectSchedule(project.getId())
                .getWednesdayHours(), DELTA);
        assertEquals(8, setScheduleController.getProjectSchedule(project.getId())
                .getThursdayHours(), DELTA);
        assertEquals(8, setScheduleController.getProjectSchedule(project.getId()).getFridayHours(),
                DELTA);
        assertEquals(0, setScheduleController.getProjectSchedule(project.getId())
                .getSaturdayHours(), DELTA);
        assertEquals(0, setScheduleController.getProjectSchedule(project.getId()).getSundayHours(),
                DELTA);
    }
    
    @AfterClass
    public static void afterClass() {
        DaoFactory.getFactory().getProjectScheduleDao().deleteAll();
        DaoFactory.getFactory().getProjectDao().deleteAll();
    }
}
