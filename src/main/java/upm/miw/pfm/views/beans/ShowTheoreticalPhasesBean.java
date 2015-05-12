package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.model.SelectItem;
import javax.faces.event.AjaxBehaviorEvent;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Utils;

@ManagedBean
public class ShowTheoreticalPhasesBean {

    private Project project;

    private List<SelectItem> projectList;
    
    private int selectedProjectId;
    
    private List<Employee> employeeList;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ProjectController projectController;

    public ShowTheoreticalPhasesBean() {
        this.project = new Project();
    }

    @PostConstruct
    public void init() {
        List<Project> projects = projectController.listProjects();
        if(projects.size()>0){
        	project = projects.get(0);
        }
        for(Project proj: projects){
        	projectList.add(new SelectItem(proj.getId(), proj.getName()));
        }
        LogManager.getLogger(clazz).info("Se encontraron " + projects.size() + " proyectos");
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public List<SelectItem> getProjectList() {
        return projectList;
    }

    public void setProjectList(List<SelectItem> projectList) {
        this.projectList = projectList;
    }

    public List<Employee> getEmployeeList() {
		return employeeList;
	}

	public void setEmployeeList(List<Employee> employeeList) {
		this.employeeList = employeeList;
	}

	public String defineIterationDays() {
        if (this.project.getId() != null && this.project.getId()  != -1) {
            Project projectToUpdate = projectController.getProject(this.project.getId());
            projectToUpdate.setIterationDays(this.project.getIterationDays());
            projectController.updateProject(projectToUpdate);
            LogManager.getLogger(clazz).debug("Proyecto a actualizar " + projectToUpdate);
        }
        return null;
    }
	
    public void onChangeProject(AjaxBehaviorEvent e) {
        this.project = findSelectedProject();
        LogManager.getLogger(clazz).debug("Proyecto seleccionado " + this.project);

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

    private Project findSelectedProject(){
        return projectController.getProject(this.project.getId());
    }
}
