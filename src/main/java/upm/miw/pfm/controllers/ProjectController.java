package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public interface ProjectController {
    public Project getProyect(Integer id);

    public Project createProject(Project project);

    public ProjectSchedule getProjectScheduleByProject(Project project);

    public List<Project> listProjects();

}
