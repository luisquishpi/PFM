package upm.miw.pfm.views.beans;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;

@ManagedBean(name="projectBean")
public class CreateProjectBean extends ViewBean {

    private Project project;
    @EJB
    private ProjectController projectController;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public String process() {
        projectController.createProject(project);
        return "home";
    }

}
