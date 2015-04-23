package upm.miw.pfm.views.beans;

import java.util.List;

import upm.miw.pfm.models.entities.Project;

public class ListProjectBean extends ViewBean {

	private List<Project> projects;

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public void update() {
		projects = this.getControllerFactory().getListProjectController().listProjects();
	}

}
