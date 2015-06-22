package upm.miw.pfm.models.daos;

import java.util.List;

import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Phases;

public interface HoursRolePhaseDao extends GenericDao<HoursRolePhase, Integer>{
    
    public List<HoursRolePhase> findByProject(Project project);
    
    public void deleteByProject(Project project);

	public List<Double> getAssignedHoursPerPhase(Project project, Phases phase);

}
