package upm.miw.pfm.views.beans;

import upm.miw.pfm.models.entities.Project;

public class CreateProjectView extends ViewBean {

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
