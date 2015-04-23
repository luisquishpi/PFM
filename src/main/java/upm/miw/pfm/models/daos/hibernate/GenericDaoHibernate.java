package upm.miw.pfm.models.daos.hibernate;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.HibernateException;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.GenericDao;
import upm.miw.pfm.utils.HibernateUtil;

public class GenericDaoHibernate<T, ID extends Serializable> implements GenericDao<T, ID> {
	
	private Class<T> persistentClass;
	
	public GenericDaoHibernate(Class<T> persistentClass) {
		this.persistentClass = persistentClass;
	}

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
         }finally {
             if (session != null && session.isOpen()) {
                 session.close();
             }
         }
	}

	@SuppressWarnings("unchecked")
	@Override
	public T read(ID id) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		T entity = null;
		try {
            entity = (T) session.load(persistentClass, id);
            Hibernate.initialize(entity);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
		return entity;
	}

	@Override
	public void update(T entity) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        try{
            session.beginTransaction();
            session.update(entity); 
            session.getTransaction().commit();
         }catch (HibernateException e) {
            if (session.getTransaction()!=null) session.getTransaction().rollback();
            e.printStackTrace(); 
         }finally {
             if (session != null && session.isOpen()) {
                 session.close();
             }
         }
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
