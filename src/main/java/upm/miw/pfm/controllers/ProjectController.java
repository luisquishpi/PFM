package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Project;

public interface ProjectController {
	public Project getProyect(Integer id);
	public Project createProject(Project project);
    public List<Project> listProjects();
}
