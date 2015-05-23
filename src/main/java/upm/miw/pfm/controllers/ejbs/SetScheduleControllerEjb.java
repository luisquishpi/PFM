package upm.miw.pfm.controllers.ejbs;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

@Stateless
public class SetScheduleControllerEjb implements SetScheduleController{
    
    public void setProjectSchedule(ProjectSchedule projectSchedule) {
        DaoFactory.getFactory().getProjectScheduleDao().create(projectSchedule);
    }

    public ProjectSchedule getProjectSchedule(int projectId) {
    	Project project = DaoFactory.getFactory().getProjectDao().read(projectId);
    	if(project != null){
	        return DaoFactory.getFactory().getProjectScheduleDao().findByProject(project);
    	}else{
    		return null;
    	}
    }

	@Override
	public void updateProjectSchedule(ProjectSchedule projectSchedule) {
		DaoFactory.getFactory().getProjectScheduleDao().update(projectSchedule);
	}

}
