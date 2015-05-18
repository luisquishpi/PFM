package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.HolidayDao;
import upm.miw.pfm.models.entities.Holiday;

public class HolidayDaoHibernate extends GenericDaoHibernate<Holiday, Integer> implements HolidayDao {

	public HolidayDaoHibernate() {
		super(Holiday.class);
	}


}
