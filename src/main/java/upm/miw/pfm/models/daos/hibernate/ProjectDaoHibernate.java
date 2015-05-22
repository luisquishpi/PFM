package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.entities.Project;

public class ProjectDaoHibernate extends GenericDaoHibernate<Project, Integer> implements
        ProjectDao {

    public ProjectDaoHibernate() {
        super(Project.class);
    }
    
    @Override
    public Boolean exists(Project entity) {
        throw new RuntimeException("No implementado para esta entidad");
    }
}
