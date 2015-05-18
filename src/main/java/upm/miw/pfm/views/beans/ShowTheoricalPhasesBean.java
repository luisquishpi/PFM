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

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class ShowTheoricalPhasesBean {

    private Project project;

    private ProjectSchedule projectSchedule;

    private List<Project> projectList;

    private Employee[] employeeArray;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ProjectController projectController;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private SetScheduleController setScheduleController;

    public ShowTheoricalPhasesBean() {
        this.project = new Project();
        this.project.setId(-1);
        this.project.setCost(0.00);
        this.project.setStart(Utils.now(Utils.DD_MM_YYYY_FORMAT));
        this.project.setEnd(Utils.now(Utils.DD_MM_YYYY_FORMAT));
        this.project.setIterationDays(0.00);
    }

    @PostConstruct
    public void init() {
        projectList = projectController.listProjects();
        LogManager.getLogger(clazz).info("Se encontraron " + projectList.size() + " proyectos");

        List<Employee> employeeList = employeeController.listEmployees();
        LogManager.getLogger(clazz).info("Se encontraron " + employeeList.size() + " empleados");
        if (employeeList != null) {
            employeeArray = employeeList.toArray(new Employee[employeeList.size()]);
        }
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
        Integer selectedProject = (Integer) e.getNewValue();
        LogManager.getLogger(clazz).debug("Id de proyecto seleccionado " + this.project);
        if (selectedProject != -1) {
            this.project.setId(selectedProject);
            this.project = findSelectedProject();
            this.projectSchedule = setScheduleController.getProjectSchedule(project.getId());
            LogManager.getLogger(clazz).debug("Proyecto cargado " + this.project);
            LogManager.getLogger(clazz).info("Project schedule asociado " + this.projectSchedule);
        }

        FacesContext.getCurrentInstance().renderResponse();
    }

    public Employee[] getEmployeeArray() {
        return employeeArray;
    }

    public void setEmployeeArray(Employee[] employeeArray) {
        this.employeeArray = employeeArray;
    }

    public String defineIterationDays() {
        if (this.project.getId() != null && this.project.getId() != -1) {
            Project projectToUpdate = projectController.getProject(this.project.getId());
            projectToUpdate.setIterationDays(this.project.getIterationDays());
            projectController.updateProject(projectToUpdate);
            LogManager.getLogger(clazz).debug("Proyecto a actualizar " + projectToUpdate);
        }
        return null;
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
