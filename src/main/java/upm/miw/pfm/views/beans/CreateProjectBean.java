package upm.miw.pfm.views.beans;

import javax.faces.bean.ManagedBean;

import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class CreateProjectBean extends ViewBean {

    private Project project;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public String process() {
        this.getControllerFactory().getProjectController().createProject(project);
        return "home";
    }

}
