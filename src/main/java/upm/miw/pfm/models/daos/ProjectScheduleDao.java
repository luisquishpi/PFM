package upm.miw.pfm.models.daos;

import java.util.List;

import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public interface ProjectScheduleDao extends GenericDao<ProjectSchedule, Integer> {

    public ProjectSchedule findByProject(Project project);

    public List<ProjectSchedule> findAllWithoutHours();
}
