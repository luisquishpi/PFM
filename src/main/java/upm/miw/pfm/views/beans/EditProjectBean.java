package upm.miw.pfm.views.beans;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import org.apache.logging.log4j.LogManager;
import org.primefaces.event.FlowEvent;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class EditProjectBean {

	private int id;
	
	private Project project;

	private ProjectSchedule projectSchedule;

	@EJB
	private ProjectController projectController;

	@EJB
	private SetScheduleController setScheduleController;

	public EditProjectBean() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Project getProject() {
		return project;
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

	public String process() {
		int idSchedule = Integer.parseInt(Utils.getRequestParameter("id"));
		projectSchedule.setId(idSchedule);
		project.setId(projectSchedule.getProject().getId());
		System.out.println("-------"+project);
		System.out.println("-------//"+projectSchedule);
		projectController.updateProject(project);
		setScheduleController.updateProjectSchedule(projectSchedule);
        LogManager.getLogger(this).info("Actualizado " + project);
		Utils.addMessage(FacesMessage.SEVERITY_INFO, "Proyecto",
				"Se ha modificado el proyecto satisfactoriamente");

		return "index";
	}
	
    public String onFlowProcess(FlowEvent event) {
    	return event.getNewStep();
    }
    
    @PostConstruct
    public void init(){
    	projectSchedule = setScheduleController.getProjectSchedule(Integer.parseInt(Utils.getRequestParameter("id")));
    	project = projectController.getProject(projectSchedule.getProject().getId());
    }
}
