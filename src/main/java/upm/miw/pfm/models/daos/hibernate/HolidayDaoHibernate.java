package upm.miw.pfm.models.daos.hibernate;

import java.util.Date;

import org.hibernate.Query;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.HolidayDao;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.HibernateUtil;

public class HolidayDaoHibernate extends GenericDaoHibernate<Holiday, Integer> implements HolidayDao {

	public HolidayDaoHibernate() {
		super(Holiday.class);
	}

	@Override
	public Boolean exists(Date start, Date end) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();        
        Boolean result = false;
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Holiday h WHERE h.start = :start AND h.end = :endDate ");
            query.setParameter("start", start);
            query.setParameter("endDate", end);
            result = query.list().size() > 0;
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


}
