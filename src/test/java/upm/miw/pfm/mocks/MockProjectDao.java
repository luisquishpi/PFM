package upm.miw.pfm.mocks;

import java.util.List;

import mockit.Mock;
import mockit.MockUp;
import upm.miw.pfm.models.daos.hibernate.ProjectDaoHibernate;
import upm.miw.pfm.models.entities.Project;

public class MockProjectDao extends MockUp<ProjectDaoHibernate> {

    private Project project;

    private List<Project> projectList;

    public MockProjectDao(Project project) {
        this.project = project;
    }

    public MockProjectDao() {
    }

    public MockProjectDao(List<Project> projectList) {
        this.projectList = projectList;
    }

    @Mock
    public Project read(Integer id) {
        return project;
    }

    @Mock
    public List<Project> findAll() {
        return projectList;
    }

    @Mock
    public void update(Project project) {
        if (project.getProjectSchedule() != null) {
            project.getProjectSchedule().setProject(project);
        }
        this.project = project;
    }
}
