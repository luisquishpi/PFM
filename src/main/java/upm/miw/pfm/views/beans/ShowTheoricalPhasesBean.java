package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;
import javax.faces.model.SelectItem;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;
import upm.miw.pfm.utils.WorkDay;

@ManagedBean
@ViewScoped
public class ShowTheoricalPhasesBean {

    private Project project;

    private List<SelectItem> projectList;

    private int selectedProjectId;

    private Employee[] employeeArray;

    private WorkDay[] workDaysArray;

    private Integer workDays;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ProjectController projectController;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private SetScheduleController setScheduleController;

    public ShowTheoricalPhasesBean() {
        this.project = new Project();
    }

    @PostConstruct
    public void init() {
        List<Employee> employeeList = employeeController.listEmployees();
        employeeArray = employeeList.toArray(employeeArray);
        List<Project> projects = projectController.listProjects();
        if (projects.size() > 0) {
            project = projects.get(0);
        }
        for (Project proj : projects) {
            projectList.add(new SelectItem(proj.getId(), proj.getName()));
        }
        ProjectSchedule projectSchedule = setScheduleController.getProjectSchedule(project.getId());
        List<WorkDay> listWorkDays = projectSchedule.getWorkDaysArray();
        workDaysArray = listWorkDays.toArray(workDaysArray);
        workDays = projectSchedule.getWorkDays();
        LogManager.getLogger(clazz).info("Se encontraron " + projects.size() + " proyectos");
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public int getSelectedProjectId() {
        return selectedProjectId;
    }

    public void setSelectedProjectId(int selectedProjectId) {
        this.selectedProjectId = selectedProjectId;
    }

    public List<SelectItem> getProjectList() {
        return projectList;
    }

    public void setProjectList(List<SelectItem> projectList) {
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

    public WorkDay[] getWorkDaysArray() {
        return workDaysArray;
    }

    public void setWorkDaysArray(WorkDay[] workDaysArray) {
        this.workDaysArray = workDaysArray;
    }

    public Integer getWorkDays() {
        return workDays;
    }

    public void setWorkDays(Integer workDays) {
        this.workDays = workDays;
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
