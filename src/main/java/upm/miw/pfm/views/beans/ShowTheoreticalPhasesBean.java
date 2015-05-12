package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.model.SelectItem;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class ShowTheoreticalPhasesBean {

    private Project project;

    private List<SelectItem> projectList;
    
    private int selectedProjectId;

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

    public String defineIterationDays() {
        if (this.project.getId() != null && this.project.getId()  != -1) {
            Project projectToUpdate = projectController.getProject(this.project.getId());
            projectToUpdate.setIterationDays(this.project.getIterationDays());
            projectController.updateProject(projectToUpdate);
            LogManager.getLogger(clazz).debug("Proyecto a actualizar " + projectToUpdate);
        }
        return null;
    }
    
    public String process(){
    	project = projectController.getProject(selectedProjectId);
    	return "show_theorical_phases";
    }

}
