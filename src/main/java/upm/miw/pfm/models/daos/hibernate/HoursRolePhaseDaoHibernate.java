package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.HoursRolePhaseDao;
import upm.miw.pfm.models.entities.HoursRolePhase;

public class HoursRolePhaseDaoHibernate extends GenericDaoHibernate<HoursRolePhase, Integer> implements
HoursRolePhaseDao {

	public HoursRolePhaseDaoHibernate() {
		super(HoursRolePhase.class);
	}

	@Override
	public Boolean exists(HoursRolePhase entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAll() {
		query("delete from HoursRolePhase");
	}

}
