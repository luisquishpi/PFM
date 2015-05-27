package upm.miw.pfm.views.beans;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;
import org.primefaces.context.RequestContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

@ManagedBean
public class CalendarBean implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @EJB
    private ProjectController projectController;
    
    @EJB
    private SetScheduleController scheduleController;
    
    @EJB
    private HolidayController holidayController;
    
    private List<Project> projectList;
    
    private Project project;
    
    @PostConstruct
    public void update() {
        projectList = projectController.listProjects();
        LogManager.getLogger(this).info("Se encontraron " + projectList.size() + " proyectos");
    }
    
    public void onSelectProject() {
        if(project != null){
            ProjectSchedule schedule = scheduleController.getProjectSchedule(project.getId());
            List<Holiday> holidays = holidayController.holidayList();
            RequestContext reqCtx = RequestContext.getCurrentInstance();
            reqCtx.addCallbackParam("project", project);
            reqCtx.addCallbackParam("schedule", schedule);
            
            ObjectMapper mapper = new ObjectMapper();
            try {
                reqCtx.addCallbackParam("holidays", mapper.writeValueAsString(holidays));
            } catch (JsonProcessingException e) {
                LogManager.getLogger(this).error(e.getMessage());
            }
        }
    }

    public List<Project> getProjectList() {
        return projectList;
    }

    public void setProjectList(List<Project> projectList) {
        this.projectList = projectList;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

}
