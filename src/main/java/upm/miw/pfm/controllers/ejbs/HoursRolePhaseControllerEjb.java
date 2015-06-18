package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.HoursRolePhaseController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;

@Stateless
public class HoursRolePhaseControllerEjb implements HoursRolePhaseController {

    @Override
    public List<HoursRolePhase> getResources(Project project) {
        return DaoFactory.getFactory().getHoursRolePhaseDao().findByProject(project);
    }

}
