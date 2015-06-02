package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public interface ProjectController {
    public Project getProject(Integer id);

    public void createProject(Project project);

    public ProjectSchedule getProjectScheduleByProject(Project project);

    public List<Project> listProjects();

	public void updateProject(Project project);
	
	public void assignEmployees(List<Employee> list);

}
