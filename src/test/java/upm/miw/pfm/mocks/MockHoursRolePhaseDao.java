package upm.miw.pfm.mocks;

import java.util.List;

import mockit.Mock;
import mockit.MockUp;
import upm.miw.pfm.models.daos.hibernate.HoursRolePhaseDaoHibernate;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Phases;

public class MockHoursRolePhaseDao extends MockUp<HoursRolePhaseDaoHibernate> {
		
		private List<Double> AssignedHoursList;
		
		private List<HoursRolePhase> hourRolePhaseList;

		public MockHoursRolePhaseDao(List<Double> AssignedHoursList, List<HoursRolePhase> hourRolePhaseList) {
			this.AssignedHoursList = AssignedHoursList;
			this.hourRolePhaseList = hourRolePhaseList;
		}

		public MockHoursRolePhaseDao() {
			// TODO Auto-generated constructor stub
		}

		@Mock
	    public List<HoursRolePhase> findByProject(Project project) {
	        return hourRolePhaseList;
	    }

	    @Mock
	    public List<Double> getAssignedHoursPerPhase(Project project, Phases phase) {
	        return AssignedHoursList;
	    }	
}
