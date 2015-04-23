package upm.miw.pfm.models.daos.hibernate;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.GenericDao;
import upm.miw.pfm.utils.HibernateUtil;

public class GenericDaoHibernate<T, ID> implements GenericDao<T, ID> {
	
	@Override
	public void create(T entity) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        try{
            session.beginTransaction();
            session.save(entity); 
            session.getTransaction().commit();
         }catch (HibernateException e) {
            if (session.getTransaction()!=null) session.getTransaction().rollback();
            e.printStackTrace(); 
         }
	}

	@Override
	public T read(ID id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(T entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(ID id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<T> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
