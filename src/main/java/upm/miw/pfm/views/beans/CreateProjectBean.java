package upm.miw.pfm.views.beans;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

@ManagedBean
public class CreateProjectBean extends ViewBean {

    private Project project;

    private ProjectSchedule projectSchedule;

    @EJB
    private ProjectController projectController;

    public CreateProjectBean() {
        project = new Project();
        project.setName("New project");
        project.setCost(0.00);
        project.setStart(Utils.now());
        project.setEnd(Utils.now());

        projectSchedule = new ProjectSchedule();

        projectSchedule.setMondayHours(8.00);
        projectSchedule.setTuesdayHours(8.00);
        projectSchedule.setWednesdayHours(8.00);
        projectSchedule.setThursdayHours(8.00);
        projectSchedule.setFridayHours(5.00);
        projectSchedule.setSaturdayHours(5.00);
        projectSchedule.setSundayHours(5.00);
        projectSchedule.setWorkDays(21);

        projectSchedule.setProject(project);
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }

    public void setProjectSchedule(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
    }

    public String process() {
        projectController.createProject(project);
        return "home";
    }

}
