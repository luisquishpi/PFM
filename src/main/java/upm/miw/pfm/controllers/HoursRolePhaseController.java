package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;

public interface HoursRolePhaseController {
    
    public List<HoursRolePhase> getResources(Project project);
    

}
