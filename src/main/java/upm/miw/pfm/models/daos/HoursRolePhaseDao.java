package upm.miw.pfm.models.daos;

import java.util.List;

import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;

public interface HoursRolePhaseDao extends GenericDao<HoursRolePhase, Integer>{
    
    public List<HoursRolePhase> findByProject(Project project);

}
