package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.entities.Project;

public class ProjectDaoHibernate extends GenericDaoHibernate<Project, Integer> implements
        ProjectDao {

    public ProjectDaoHibernate() {
        super(Project.class);
    }
}
