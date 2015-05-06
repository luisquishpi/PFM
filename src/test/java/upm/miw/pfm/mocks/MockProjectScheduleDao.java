package upm.miw.pfm.mocks;

import mockit.Mock;
import mockit.MockUp;
import upm.miw.pfm.models.daos.hibernate.ProjectScheduleDaoHibernate;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class MockProjectScheduleDao extends MockUp<ProjectScheduleDaoHibernate> {

    private ProjectSchedule projectSchedule;

    public MockProjectScheduleDao(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
    }

    public MockProjectScheduleDao() {
    }

    @Mock
    public ProjectSchedule create(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
        projectSchedule.setId(10);
        return projectSchedule;
    }

    @Mock
    public ProjectSchedule read(Integer id) {
        projectSchedule.setId(id);
        return projectSchedule;
    }

    @Mock
    public void update(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
    }

    @Mock
    public ProjectSchedule findByProject(Project project) {
        return projectSchedule;
    }

}
