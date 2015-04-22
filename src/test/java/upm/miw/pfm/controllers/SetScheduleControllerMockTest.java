package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.SetScheduleControllerEjb;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class SetScheduleControllerMockTest {

    private SetScheduleController controller;

    private static final double DELTA = 1e-15;

    @Before
    public void setUp() throws Exception {
        controller = new SetScheduleControllerEjb();
        new MockProjectDao();
    }

    @Test
    public void SetScheduleTest() {
        ProjectSchedule schedule = new ProjectSchedule();

        Project project = new Project();
        project.setId(1);

        schedule.setWorkDays(21);
        schedule.setMondayHours(8D);
        schedule.setTuesdayHours(8D);
        schedule.setWednesdayHours(8D);
        schedule.setThursdayHours(8D);
        schedule.setFridayHours(8D);
        schedule.setSaturdayHours(0D);
        schedule.setSundayHours(0D);

        project.setProjectSchedule(schedule);
        
        controller.setProjectSchedule(project);
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
        List<Integer> workdays = controller.getProjectSchedule(1).getWorkDaysArray();
        for(Integer i : new Integer[]{1,2,3,4,5}){
            assertTrue(workdays.contains(i));
        }
    }
}
