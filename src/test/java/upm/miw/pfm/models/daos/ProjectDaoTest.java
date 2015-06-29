package upm.miw.pfm.models.daos;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Utils;

public class ProjectDaoTest {

    private ProjectDao projectDao;

    private Project project;

    @Before
    public void before() {
        DaoFactory.setFactory(new DaoHibernateFactory());
        projectDao = DaoFactory.getFactory().getProjectDao();
        Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        project = new Project("Scrum", start, end, 85000.0);
        projectDao.create(project);
    }

    @Test
    public void testCreateAndRead() {
        assertEquals(projectDao.read(project.getId()), project);
    }

    @Test
    public void testUpdate() {
        project.setName("Rup");
        projectDao.update(project);
        assertEquals(projectDao.read(project.getId()), project);
    }

    @Test
    public void testDeleteById() {
        projectDao.deleteById(project.getId());
        assertNull(projectDao.read(project.getId()));
    }

    @Test
    public void testFindAll() {
        List<Project> projects = new ArrayList<Project>();
        projects.add(project);
        Project project2 = new Project("RUP", Utils.buildDate(2015, Calendar.MARCH, 5),
                Utils.buildDate(2015, Calendar.JULY, 4), 7000.0);
        projects.add(project2);
        projectDao.create(project2);

        assertEquals(projectDao.findAll().size(), projects.size());
        assertEquals(projectDao.findAll(), projects);
    }

    @Test
    public void testSetIterationDays() {
        project.setIterationDays(15);
        projectDao.update(project);
        Project postUpdateProject = projectDao.read(project.getId());
        assertEquals(postUpdateProject.getIterationDays().intValue(), project.getIterationDays()
                .intValue());
        assertEquals(postUpdateProject, project);
    }

    @After
    public void after() {
        projectDao.deleteAll();
    }

}
