package upm.miw.pfm.controllers.ejbs;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.ListProjectsController;
import upm.miw.pfm.mocks.MockProjectDao;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;

@Stateless
public class ListProjectsControllerEjb implements ListProjectsController {
    
    @Override
    public List<Project> listProjects(){        
        List<Project> projects = new ArrayList<Project>();
        projects.add(new Project("Proyecto 1", new Date(), new Date(), 3000.00));
        projects.add(new Project("Proyecto 2", new Date(), new Date(), 2000.00));
        projects.add(new Project("Proyecto 3", new Date(), new Date(), 4000.00));
        new MockProjectDao(projects);
        return DaoFactory.getFactory().getProjectDao().findAll();
    }

}
