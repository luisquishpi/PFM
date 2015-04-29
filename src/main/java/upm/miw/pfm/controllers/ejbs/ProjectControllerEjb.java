package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;

@Stateless
public class ProjectControllerEjb implements ProjectController{

	@Override
	public Project getProyect(Integer id) {
		return DaoFactory.getFactory().getProjectDao().read(id);
	}

	@Override
	public Project createProject(Project project) {
		DaoFactory.getFactory().getProjectDao().create(project);
		return project;
	}
	
	@Override
    public List<Project> listProjects(){	    
        return DaoFactory.getFactory().getProjectDao().findAll();
    }

}
