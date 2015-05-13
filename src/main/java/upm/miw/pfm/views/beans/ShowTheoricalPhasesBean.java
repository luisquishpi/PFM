package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class ShowTheoricalPhasesBean {

    private Project project;

    private List<Project> projectList;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ProjectController projectController;

    public ShowTheoricalPhasesBean() {
        this.project = new Project();
    }

    @PostConstruct
    public void init() {
        projectList = projectController.listProjects();
        LogManager.getLogger(clazz).info("Se encontraron " + projectList.size() + " proyectos");
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

    public void onChangeProject(ValueChangeEvent e) {
        Integer selectedProject = Integer.parseInt((String) e.getNewValue());
        LogManager.getLogger(clazz).debug("Id de proyecto seleccionado " + this.project);
        if (selectedProject != -1) {
            this.project.setId(selectedProject);
            this.project = findSelectedProject();
            LogManager.getLogger(clazz).debug("Proyecto cargado " + this.project);
        }

        FacesContext.getCurrentInstance().renderResponse();
    }

    public String process() {
        if (this.project.getId() != null && this.project.getId() != -1) {
            Project projectToUpdate = findSelectedProject();
            projectToUpdate.setIterationDays(this.project.getIterationDays());
            projectController.updateProject(projectToUpdate);
            LogManager.getLogger(clazz).debug("Proyecto a actualizar " + projectToUpdate);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Proyecto",
                    "Se actualizó las fases teóricas satisfactoriamente");
        }
        return "index";
    }

    private Project findSelectedProject() {
        return projectController.getProject(this.project.getId());
    }

}
