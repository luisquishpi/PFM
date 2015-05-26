package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.EmployeeDao;
import upm.miw.pfm.models.daos.HolidayDao;
import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.daos.ProjectScheduleDao;
import upm.miw.pfm.models.daos.VacationDao;

public class DaoHibernateFactory extends DaoFactory {

    @Override
    public ProjectDao getProjectDao() {
        return new ProjectDaoHibernate();
    }

    @Override
    public ContractDao getContractDao() {
        return new ContractDaoHibernate();
    }

    @Override
    public EmployeeDao getEmployeeDao() {
        return new EmployeeDaoHibernate();
    }

    @Override
    public ProjectScheduleDao getProjectScheduleDao() {
        return new ProjectScheduleDaoHibernate();
    }

    @Override
    public VacationDao getVacationDao() {
        return new VacationDaoHibernate();
    }

	@Override
	public HolidayDao getHolidayDao() {
		return new HolidayDaoHibernate();
	}

}
