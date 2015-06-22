package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.PhaseRoleAssigned;

public interface HoursRolePhaseController {
    
    public List<HoursRolePhase> getResources(Project project);
    public List<PhaseRoleAssigned> getAssignedHoursPerRole(Project project);

}
