package upm.miw.pfm.views.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.ListProjectsController;
import upm.miw.pfm.models.entities.Project;

@ManagedBean
public class ListProjectsBean extends ViewBean {

    private List<Project> projects;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ListProjectsController listProjectController;

    public List<Project> getProjects() {
        return projects;
    }

    @PostConstruct
    public void update() {
        projects = listProjectController.listProjects();
        LogManager.getLogger(clazz).info("Se encontraron " + projects.size() + " proyectos");
    }

}
