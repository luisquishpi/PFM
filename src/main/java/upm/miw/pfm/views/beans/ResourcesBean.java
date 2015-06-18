package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.HoursRolePhaseController;
import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

@ManagedBean
@ViewScoped
public class ResourcesBean {
    private Project project;

    private List<Project> projectList;

    private List<Employee> employeeList;

    private List<HoursRolePhase> resourcesList;

    @EJB
    private ProjectController projectController;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private SetScheduleController setScheduleController;

    @EJB
    private HoursRolePhaseController hoursRolePhaseController;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    private boolean emptyProject;

    private ProjectSchedule projectSchedule;

    public ResourcesBean() {
        this.emptyProject = true;
        this.project = new Project();
        this.project.setId(-1);
        this.projectSchedule = new ProjectSchedule();
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

    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    public List<HoursRolePhase> getResourcesList() {
        return resourcesList;
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
            this.projectSchedule = setScheduleController.getProjectSchedule(project.getId());
            LogManager.getLogger(this).debug("Proyecto cargado " + this.project);
            this.resourcesList = hoursRolePhaseController.getResources(this.project);
            LogManager.getLogger(this).debug("Recursos cargados " + this.resourcesList.size());
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
        LogManager.getLogger(clazz).info("Se encontraron " + projectList.size() + " proyectos");

        employeeList = employeeController.listEmployees();
        LogManager.getLogger(clazz).info("Se encontraron " + employeeList.size() + " empleados");

    }

    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }

    public void setProjectSchedule(ProjectSchedule projectSchedule) {
        this.projectSchedule = projectSchedule;
    }
}
