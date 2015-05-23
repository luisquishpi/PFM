package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.util.Calendar;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.SetScheduleControllerEjb;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.mocks.MockProjectScheduleDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

public class SetScheduleControllerTest {

    private SetScheduleController controller;
    private Project project;
    private ProjectSchedule schedule;

    private static final double DELTA = 1e-15;

    @Before
    public void setUp() throws Exception {
        Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        project = new Project("Scrum", start, end, 85000.0);
        project.setId(1);        
        controller = new SetScheduleControllerEjb();
        new MockProjectDao(project);
        new MockProjectScheduleDao();
        schedule = new ProjectSchedule();
        schedule.setWorkDays(21);
        schedule.setMondayHours(8D);
        schedule.setTuesdayHours(8D);
        schedule.setWednesdayHours(8D);
        schedule.setThursdayHours(8D);
        schedule.setFridayHours(8D);
        schedule.setSaturdayHours(0D);
        schedule.setSundayHours(0D);
        
        schedule.setProject(project);
        
        controller.setProjectSchedule(schedule);
        
    }

    @Test
    public void SetScheduleTest() {

        assertEquals(project, controller.getProjectSchedule(1).getProject());
        assertEquals(schedule, controller.getProjectSchedule(1));
        Integer expectedWorkDays = 21;
        assertEquals(expectedWorkDays, controller.getProjectSchedule(1).getWorkDays());
        assertEquals(8, controller.getProjectSchedule(1).getMondayHours(), DELTA);
        assertEquals(8, controller.getProjectSchedule(1).getTuesdayHours(), DELTA);
        assertEquals(8, controller.getProjectSchedule(1).getWednesdayHours(), DELTA);
        assertEquals(8, controller.getProjectSchedule(1).getThursdayHours(), DELTA);
        assertEquals(8, controller.getProjectSchedule(1).getFridayHours(), DELTA);
        assertEquals(0, controller.getProjectSchedule(1).getSaturdayHours(), DELTA);
        assertEquals(0, controller.getProjectSchedule(1).getSundayHours(), DELTA);
    }
    
    @Test
    public void updateScheduleTest(){
    	schedule.setFridayHours(1D);
    	schedule.setMondayHours(2D);
    	controller.updateProjectSchedule(schedule);
    	assertEquals(controller.getProjectSchedule(schedule.getId()), schedule);
    }
}
