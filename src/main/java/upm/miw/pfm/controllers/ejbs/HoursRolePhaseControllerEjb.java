package upm.miw.pfm.controllers.ejbs;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.HoursRolePhaseController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.PhaseRoleAssigned;
import upm.miw.pfm.utils.Phases;

@Stateless
public class HoursRolePhaseControllerEjb implements HoursRolePhaseController {

    @Override
    public List<HoursRolePhase> getResources(Project project) {
        return DaoFactory.getFactory().getHoursRolePhaseDao().findByProject(project);
    }

	@Override
	public List<PhaseRoleAssigned> getAssignedHoursPerRole(Project project) {
		List<PhaseRoleAssigned> listPra = new ArrayList<PhaseRoleAssigned>();
		
		PhaseRoleAssigned pra= new PhaseRoleAssigned();
		pra.setPhase(Phases.INICIO);
		pra.setSumRoles(DaoFactory.getFactory().getHoursRolePhaseDao().getAssignedHoursPerPhase(project, Phases.INICIO));		
		listPra.add(pra);
		
		pra= new PhaseRoleAssigned();
		pra.setPhase(Phases.ELABORACION);
		pra.setSumRoles(DaoFactory.getFactory().getHoursRolePhaseDao().getAssignedHoursPerPhase(project, Phases.ELABORACION));		
		listPra.add(pra);
		
		pra= new PhaseRoleAssigned();
		pra.setPhase(Phases.CONSTRUCCION);
		pra.setSumRoles(DaoFactory.getFactory().getHoursRolePhaseDao().getAssignedHoursPerPhase(project, Phases.CONSTRUCCION));		
		listPra.add(pra);
		
		pra= new PhaseRoleAssigned();
		pra.setPhase(Phases.TRANSICION);
		pra.setSumRoles(DaoFactory.getFactory().getHoursRolePhaseDao().getAssignedHoursPerPhase(project, Phases.TRANSICION));		
		listPra.add(pra);
		
		System.out.println(listPra);
		return listPra;
	}

}
