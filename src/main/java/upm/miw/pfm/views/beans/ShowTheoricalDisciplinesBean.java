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
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class ShowTheoricalDisciplinesBean {
	private Project project;

    private List<Project> projectList;

    private boolean emptyProject;
    
    private ProjectSchedule projectSchedule;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ProjectController projectController;
    
    @EJB
    private SetScheduleController setScheduleController;

    public ShowTheoricalDisciplinesBean() {
        this.project = new Project();
        this.projectSchedule = new ProjectSchedule();
        this.project.setId(-1);
        this.project.setCost(0.00);
        this.project.setStart(Utils.now(Utils.DD_MM_YYYY_FORMAT));
        this.project.setEnd(Utils.now(Utils.DD_MM_YYYY_FORMAT));
        this.project.setIterationDays(0);
        this.emptyProject = true;
    }

    @PostConstruct
    public void init() {
        projectList = projectController.listProjects();
        LogManager.getLogger(clazz).info("Se encontraron " + projectList.size() + " proyectos");
    }


    public Project getProject() {
        return project;
    }

    public List<Project> getProjectList() {
        return projectList;
    }
    
    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }

    public void onChangeProject(ValueChangeEvent e) {
        Integer selectedProject = (Integer) e.getNewValue();
        LogManager.getLogger(clazz).debug("Id de proyecto seleccionado " + selectedProject);
        if (selectedProject != -1) {
            this.project.setId(selectedProject);
            this.project = findSelectedProject();
            this.projectSchedule = setScheduleController.getProjectSchedule(project.getId());
            LogManager.getLogger(clazz).debug("Proyecto cargado " + this.project);
            LogManager.getLogger(clazz).info("Project schedule asociado " + this.projectSchedule);

            this.emptyProject = false;
        } else {
            this.emptyProject = true;
        }
        FacesContext.getCurrentInstance().renderResponse();
    }

    private Project findSelectedProject() {
        return projectController.getProject(this.project.getId());
    }

    public boolean isEmptyProject() {
        return emptyProject;
    }
}
