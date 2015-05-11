package upm.miw.pfm.models.daos.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

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
            list = session.createCriteria(Vacation.class).add(Restrictions.eq("employee",employee)).list();
            Hibernate.initialize(list);
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
