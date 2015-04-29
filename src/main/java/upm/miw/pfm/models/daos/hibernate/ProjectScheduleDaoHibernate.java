package upm.miw.pfm.models.daos.hibernate;

import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.ProjectScheduleDao;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.HibernateUtil;

public class ProjectScheduleDaoHibernate extends GenericDaoHibernate<ProjectSchedule, Integer> implements ProjectScheduleDao  {

	public ProjectScheduleDaoHibernate() {
		super(ProjectSchedule.class);
	}

    @Override
    public ProjectSchedule findByProject(Project project) {
    	Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		ProjectSchedule projectSchedule= null;
		try {
			session.beginTransaction();
			String hql = "select s from project_schedule s where s.project = :project";
			List result = session.createQuery(hql)
			.setParameter("project", project)
			.list();
            Hibernate.initialize(result);
            projectSchedule = (ProjectSchedule) result.get(0);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
		return projectSchedule;
    }
}
