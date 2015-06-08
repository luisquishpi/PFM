package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;

@ManagedBean
@ViewScoped
public class ResourcesBean {
    private Project project;

    private List<Project> projectList;

    @EJB
    private ProjectController projectController;

    private boolean emptyProject;

    public ResourcesBean(){
        this.emptyProject = true;
        this.project = new Project();
        this.project.setId(-1);
    }
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public List<Project> getProjectList() {
        return projectList;
    }

    public void setProjectList(List<Project> projectList) {
        this.projectList = projectList;
    }

    private Project findSelectedProject() {
        return projectController.getProject(this.project.getId());
    }

    public void onChangeProject(ValueChangeEvent e) {
        Integer selectedProject = (Integer) e.getNewValue();
        LogManager.getLogger(this).debug("Id de proyecto seleccionado " + selectedProject);
        if (selectedProject != -1) {
            this.project.setId(selectedProject);
            this.project = findSelectedProject();
            LogManager.getLogger(this).debug("Proyecto cargado " + this.project);
            this.emptyProject = false;
        } else {
            this.emptyProject = true;
        }
        FacesContext.getCurrentInstance().renderResponse();
    }

    public boolean isEmptyProject() {
        LogManager.getLogger(this).debug("is empty " + this.project);
        return emptyProject;
    }

    @PostConstruct
    public void init() {
        projectList = projectController.listProjects();
        LogManager.getLogger(this).info("Se encontraron " + projectList.size() + " proyectos");
    }

}
