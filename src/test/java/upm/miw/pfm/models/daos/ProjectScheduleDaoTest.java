package upm.miw.pfm.models.daos;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.Calendar;
import java.util.Date;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

public class ProjectScheduleDaoTest {

    private static ProjectDao projectDao;

    private Project project;

    private Project project2;

    private static ProjectScheduleDao projectScheduleDao;

    private ProjectSchedule projectSchedule;

    @BeforeClass
    public static void beforeClass() {
        DaoFactory.setFactory(new DaoHibernateFactory());
        projectScheduleDao = DaoFactory.getFactory().getProjectScheduleDao();
        projectDao = DaoFactory.getFactory().getProjectDao();
    }

    @Before
    public void before() {
        Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        project = new Project("Scrum", start, end, 85000.0);
        projectDao.create(project);
        projectSchedule = new ProjectSchedule(project, 21, 8D, 8D, 8D, 8D, 8D, 0D, 0D);
        projectSchedule.setProject(project);
        projectScheduleDao.create(projectSchedule);

        project2 = new Project("ScrumXP", start, end, 80000.0);
        projectDao.create(project2);
    }

    @Test
    public void createAndReadTest() {
        assertEquals(project.getId().intValue(), projectSchedule.getId().intValue());
        assertEquals(projectSchedule, projectScheduleDao.read(projectSchedule.getId()));
    }

    @Test
    public void deleteById() {
        projectScheduleDao.deleteById(projectSchedule.getId());
        assertNull(projectScheduleDao.read(projectSchedule.getId()));
    }

    @Test
    public void updateTest() {
        ProjectSchedule projectSchedule2 = new ProjectSchedule(20, 8D, 8D, 6D, 6D, 8D, 0D, 0D);
        projectSchedule2.setProject(project);
        projectSchedule2.setId(projectSchedule.getId());
        projectScheduleDao.update(projectSchedule2);
        assertEquals(projectSchedule2, projectScheduleDao.read(projectSchedule.getId()));
    }

    @Test
    public void findByProjectTest(){
    	 assertEquals(projectSchedule, projectScheduleDao.findByProject(projectSchedule.getProject()));
    }

}
