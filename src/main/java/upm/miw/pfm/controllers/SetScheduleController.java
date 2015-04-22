package upm.miw.pfm.controllers;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class SetScheduleController {

    public void setProjectSchedule(Project project) {
        DaoFactory.getFactory().getProjectDao().update(project);
    }

    public ProjectSchedule getProjectSchedule(int id) {
        Project project = DaoFactory.getFactory().getProjectDao().read(id);
        if(project != null){
            return project.getProjectSchedule();
        }else{
            return null;
        }
    }

}