package upm.miw.pfm.views.beans;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;

public class CreateProjectView extends ViewBean {

    private Project project;

    private ProjectController projectController;

    public CreateProjectView() {
        projectController = getControllerFactory().getProjectController();
    }

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
