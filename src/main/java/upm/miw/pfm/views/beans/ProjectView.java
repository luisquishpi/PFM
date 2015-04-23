package upm.miw.pfm.views.beans;

import java.util.Date;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class ProjectView extends ViewBean {

    private Project project;

    private int id;

    private Date start;

    private Date end;

    private Double cost;

    private String name;

    private ProjectSchedule projectSchedule;

    private ProjectController projectController;

    public ProjectView() {
        projectController = getControllerFactory().getProjectController();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }

    public void setProjectSchedule(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public String process() {
        project = new Project();
        project.setName(getName());
        project.setCost(getCost());
        projectController.createProject(project);
        return "home";
    }

}
