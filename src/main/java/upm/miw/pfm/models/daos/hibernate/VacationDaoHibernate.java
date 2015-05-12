package upm.miw.pfm.models.daos.hibernate;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import upm.miw.pfm.models.daos.VacationDao;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;
import upm.miw.pfm.utils.HibernateUtil;

public class VacationDaoHibernate extends GenericDaoHibernate<Vacation, Integer> implements
        VacationDao {

    public VacationDaoHibernate() {
        super(Vacation.class);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Vacation> findAll(Employee employee) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        List<Vacation> list = new ArrayList<Vacation>();
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Vacation WHERE employee = :employee ");
            query.setParameter("employee", employee);
            list = query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return list;
    }

}
