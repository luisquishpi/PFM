package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class SetScheduleControllerMockTest {
    
    private SetScheduleController controller;

    @Before
    public void setUp() throws Exception {
        controller = new SetScheduleController();
    }

    @Test
    public void SetScheduleTest() {
        ProjectSchedule schedule = new ProjectSchedule();     
        
        Project project = new Project();
        project.setId(1);
                
        schedule.setWorkDays(21);
        schedule.setMondayHours(8);
        schedule.setTuesdayHours(8);
        schedule.setWednesdayHours(8);
        schedule.setThursdayHours(8);
        schedule.setFridayHours(8);
        schedule.setSaturdayHours(0);
        schedule.setSundayHours(0);
        
        project.setProjectSchedule(schedule);
        new MockProjectDao();
        controller.setProjectSchedule(project);        
        assertEquals(project, controller.getProjectSchedule(1).getProject());
    }

}
