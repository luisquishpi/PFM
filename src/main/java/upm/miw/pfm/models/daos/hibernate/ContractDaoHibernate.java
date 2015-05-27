package upm.miw.pfm.models.daos.hibernate;


import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.HibernateUtil;

public class ContractDaoHibernate extends GenericDaoHibernate<Contract, Integer> implements ContractDao{

	public ContractDaoHibernate() {
		super(Contract.class);
	}
	
    @Override
    public Boolean exists(Contract entity) {
        throw new RuntimeException("No implementado para esta entidad");
    }

	@Override	
	public boolean deleteById(Integer id) {
		boolean deleted = false;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Employee E WHERE E.contract.id = :id");
            query.setParameter("id", id);
            if(query.list().isEmpty()){
                super.deleteById(id);
                deleted = true;
            }
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
		return deleted;
	}

    @Override
    public void deleteAll() {
        query("delete from Contract");
    }
}
