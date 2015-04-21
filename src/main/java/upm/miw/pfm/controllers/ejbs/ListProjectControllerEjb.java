package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import upm.miw.pfm.controllers.ListProjectController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;

public class ListProjectControllerEjb implements ListProjectController {
    
    @Override
    public List<Project> listProjects(){
        return DaoFactory.getFactory().getProjectDao().findAll();
    }

}
