package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.ListProjectController;
import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class ListProjectBean extends ViewBean {

	private List<Project> projects;
	
    @EJB
    private ListProjectController listProjectController;	

	public List<Project> getProjects() {
		return projects;
	}
	
	@PostConstruct
	public void update() {
		projects = listProjectController.listProjects();
	}

}
