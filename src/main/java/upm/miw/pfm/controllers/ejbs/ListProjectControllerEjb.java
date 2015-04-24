package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.ListProjectController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;

@Stateless
public class ListProjectControllerEjb implements ListProjectController {
    
    @Override
    public List<Project> listProjects(){
        return DaoFactory.getFactory().getProjectDao().findAll();
    }

}
