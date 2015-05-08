package upm.miw.pfm.views.beans;

import java.io.Serializable;

import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;

import org.apache.logging.log4j.LogManager;
import org.primefaces.event.FlowEvent;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class CreateProjectBean implements Serializable{
	private static final long serialVersionUID = 1L;

	private Project project;

    private ProjectSchedule projectSchedule;

    private final static Class<CreateProjectBean> clazz = CreateProjectBean.class;

    @EJB
    private ProjectController projectController;
    
    @EJB
    private SetScheduleController setScheduleController;

    public CreateProjectBean() {
        project = new Project();
        project.setName("New project");
        project.setCost(0.00);
        project.setStart(Utils.now("dd-MM-yyyy"));
        project.setEnd(Utils.addDaysToNow(1, "dd-MM-yyyy"));

        projectSchedule = new ProjectSchedule();

        projectSchedule.setMondayHours(8.00);
        projectSchedule.setTuesdayHours(8.00);
        projectSchedule.setWednesdayHours(8.00);
        projectSchedule.setThursdayHours(8.00);
        projectSchedule.setFridayHours(8.00);
        projectSchedule.setSaturdayHours(0.00);
        projectSchedule.setSundayHours(0.00);
        projectSchedule.setWorkDays(21);

        projectSchedule.setProject(project);
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
        projectController.createProject(project);
        setScheduleController.setProjectSchedule(projectSchedule);
        LogManager.getLogger(clazz).debug("Nombre proyecto " + projectSchedule.getProject().getName());
        LogManager.getLogger(clazz).debug("Creación de proyecto " + project);
        
        FacesContext context = FacesContext.getCurrentInstance();
        context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Proyecto creado", "El proyecto ha sido creado con exito"));
        context.getExternalContext().getFlash().setKeepMessages(true);
        
        return "index";
    }
    
    public String onFlowProcess(FlowEvent event) {
    	return event.getNewStep();
    }
}
