package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.VacationDao;
import upm.miw.pfm.models.entities.Vacation;

public class VacationDaoHibernate extends GenericDaoHibernate<Vacation, Integer> implements
        VacationDao {

    public VacationDaoHibernate() {
        super(Vacation.class);
    }

}
