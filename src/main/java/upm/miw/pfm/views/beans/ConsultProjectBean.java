package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

@ManagedBean
public class ConsultProjectBean extends ViewBean {

    @ManagedProperty(value = "#{param.id}")
    private int id;

    private Project project;

    private ProjectSchedule projectSchedule;

    @EJB
    private ProjectController projectController;

    public ConsultProjectBean() {

    }

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

    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }

    public void setProjectSchedule(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
    }

    @PostConstruct
    public void update() {
        project = projectController.getProyect(id);
        projectSchedule = projectController.getProjectScheduleByProject(project);
    }

}
