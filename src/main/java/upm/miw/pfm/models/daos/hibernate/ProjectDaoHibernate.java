package upm.miw.pfm.models.daos.hibernate;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.HibernateUtil;

public class ProjectDaoHibernate extends GenericDaoHibernate<Project, Integer> implements
        ProjectDao {

    public ProjectDaoHibernate() {
        super(Project.class);
    }

    @Override
    public Boolean exists(Project entity) {
        throw new RuntimeException("No implementado para esta entidad");
    }

    @Override
    public void deleteAll() {
    	List<Project> projectList = findAllWithoutPhases();
        for (Project tmpProject: projectList) {
            deleteById(tmpProject.getId());
        }
    }

	@SuppressWarnings("unchecked")
	@Override
	public List<Project> findAllWithoutPhases() {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        List<Project> projectList = null;
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Project");
            projectList = query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return projectList;
	}
}
