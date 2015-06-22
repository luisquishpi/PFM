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
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.PhaseRoleAssigned;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class DisciplinesPhasesBean {
	
	protected Project project;
    
    private ProjectSchedule projectSchedule;

    private List<Project> projectList;

    private List<Employee> employeeList;
    
    private List<PhaseRoleAssigned> assignedHoursList;
    
    private List<Double> initPhaseAssignedHours;
    private List<Double> elabPhaseAssignedHours;
    private List<Double> constPhaseAssignedHours;
    private List<Double> transPhaseAssignedHours;

    private boolean emptyProject;

    protected final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    protected ProjectController projectController;
    
    @EJB
    private EmployeeController employeeController;

    @EJB
    private SetScheduleController setScheduleController;
    
    @EJB
    private HoursRolePhaseController hoursRolePhaseController;

    public DisciplinesPhasesBean() {
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
        
        employeeList = employeeController.listEmployees();
        LogManager.getLogger(clazz).info("Se encontraron " + employeeList.size() + " empleados");
    }

    public Project getProject() {
        return project;
    }

    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }
    
    public List<Project> getProjectList() {
        return projectList;
    }

    public List<Employee> getEmployeeList() {
        return employeeList;
    }
    
    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
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
            assignedHoursList = hoursRolePhaseController.getAssignedHoursPerRole(project);
            this.emptyProject = false;
        } else {
            this.emptyProject = true;
        }
        FacesContext.getCurrentInstance().renderResponse();
    }
    
    public List<Double> getInitPhaseAssignedHours() {
		return assignedHoursList.get(0).getSumRoles();
	}

	public List<Double> getElabPhaseAssignedHours() {
		return assignedHoursList.get(1).getSumRoles();
	}

	public List<Double> getConstPhaseAssignedHours() {
		return assignedHoursList.get(2).getSumRoles();
	}

	public List<Double> getTransPhaseAssignedHours() {
		return assignedHoursList.get(3).getSumRoles();
	}

	protected Project findSelectedProject() {
        return projectController.getProject(this.project.getId());
    }

    public boolean isEmptyProject() {
        return emptyProject;
    }
}
