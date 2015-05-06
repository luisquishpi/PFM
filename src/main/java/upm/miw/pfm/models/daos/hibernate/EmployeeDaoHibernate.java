package upm.miw.pfm.models.daos.hibernate;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.EmployeeDao;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.HibernateUtil;

public class EmployeeDaoHibernate extends GenericDaoHibernate<Employee, Integer> implements
        EmployeeDao {

    public EmployeeDaoHibernate() {
        super(Employee.class);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Employee> findAllWithoutRoles() {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        List<Employee> employeeList = null;
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Employee");
            employeeList = query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return employeeList;
    }
}
