package upm.miw.pfm.models.daos.hibernate;

import java.util.List;

import org.hibernate.SessionFactory;

import upm.miw.pfm.models.daos.GenericDao;

public class GenericDaoHibernate<T, ID> implements GenericDao<T, ID> {

   private static SessionFactory factory; 
	
	@Override
	public void create(T entity) {
		
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
