package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;

import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class ConsultProjectBean extends ViewBean{
	
	@ManagedProperty(value = "#{param.id}")
	private int id;
	
	private Project project;

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
	
	@PostConstruct
	public void update(){
		project = this.getControllerFactory().getProjectController().getProyect(id);
	}

}
