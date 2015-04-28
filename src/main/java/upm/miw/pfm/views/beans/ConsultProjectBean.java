package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class ConsultProjectBean extends ViewBean {

    @ManagedProperty(value = "#{param.id}")
    private int id;

    private Project project;
    
    @EJB
    private ProjectController projectController;

	public Project getProject() {
        return project;
    }

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setProject(Project project) {
        this.project = project;
    }

    @PostConstruct
    public void update() {
    	System.out.println(id);
        project = projectController.getProyect(id);
    }

}
