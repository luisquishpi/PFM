package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class ListProjectBean extends ViewBean {

	private List<Project> projects;

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	@PostConstruct
	public void update() {
		projects = this.getControllerFactory().getListProjectController().listProjects();
	}

}
