package upm.miw.pfm.models.daos.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.HoursRolePhaseDao;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.HibernateUtil;

public class HoursRolePhaseDaoHibernate extends GenericDaoHibernate<HoursRolePhase, Integer>
        implements HoursRolePhaseDao {

    public HoursRolePhaseDaoHibernate() {
        super(HoursRolePhase.class);
    }

    @Override
    public Boolean exists(HoursRolePhase entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteAll() {
        query("delete from HoursRolePhase");
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<HoursRolePhase> findByProject(Project project) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        List<HoursRolePhase> result = new ArrayList<HoursRolePhase>();
        try {
            session.beginTransaction();
            Query query = session.createQuery("from HoursRolePhase h WHERE h.project = :project ");
            query.setParameter("project", project);
            result = query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return result;
    }

    @Override
    public void deleteByProject(Project project) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            Query query = session
                    .createQuery("delete from HoursRolePhase h WHERE h.project = :project");
            query.setParameter("project", project);
            query.executeUpdate();
            session.getTransaction().commit();
        } catch (HibernateException e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
    }

}
