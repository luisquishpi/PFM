package upm.miw.pfm.models.daos;

import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;

@SuppressWarnings("rawtypes")
public abstract class DaoFactory {
    public static DaoFactory factory = null;
    
    private GenericDao concreteDao;
    
    public static void setFactory(DaoFactory factory) {
        DaoFactory.factory = factory;
    }

    public static DaoFactory getFactory() {
        if (factory == null) {
            factory = new DaoHibernateFactory();
        }
        return factory;
    }

    public abstract ProjectDao getProjectDao();

    public abstract ContractDao getContractDao();

    public abstract EmployeeDao getEmployeeDao();

    public abstract ProjectScheduleDao getProjectScheduleDao();

    public abstract VacationDao getVacationDao();
    
    public abstract HolidayDao getHolidayDao();
    
    public void setDao(GenericDao genericDao) {
        this.concreteDao = genericDao;
    }

    public GenericDao getDao() {
        return this.concreteDao;
    }

	public abstract HoursRolePhaseDao getHoursRolePhaseDao();     
}
