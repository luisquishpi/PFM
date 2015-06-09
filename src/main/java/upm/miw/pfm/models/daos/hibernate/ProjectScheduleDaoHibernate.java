package upm.miw.pfm.models.daos.hibernate;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.ProjectScheduleDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.HibernateUtil;

public class ProjectScheduleDaoHibernate extends GenericDaoHibernate<ProjectSchedule, Integer>
        implements ProjectScheduleDao {

    public ProjectScheduleDaoHibernate() {
        super(ProjectSchedule.class);
    }

    @Override
    public ProjectSchedule findByProject(Project project) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        ProjectSchedule projectSchedule = null;
        try {
            session.beginTransaction();
            String hql = "FROM ProjectSchedule P WHERE P.project = :project";
            Query query = session.createQuery(hql);
            query.setParameter("project", project);

            projectSchedule = (ProjectSchedule) query.uniqueResult();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return projectSchedule;

    }
    
    @Override
    public Boolean exists(ProjectSchedule entity) {
        throw new RuntimeException("No implementado para esta entidad");
    }

    @Override
    public void deleteAll() {
    	List<ProjectSchedule> scheduleList = findAllWithoutHours();
        for (ProjectSchedule tmpSchedule : scheduleList) {
            deleteById(tmpSchedule.getId());
        }         
    }

	@SuppressWarnings("unchecked")
	@Override
	public List<ProjectSchedule> findAllWithoutHours() {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        List<ProjectSchedule> scheduleList = null;
        try {
            session.beginTransaction();
            Query query = session.createQuery("from ProjectSchedule");
            scheduleList = query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return scheduleList;
	}
}
