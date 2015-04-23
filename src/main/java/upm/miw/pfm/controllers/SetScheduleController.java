package upm.miw.pfm.controllers;

import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public interface SetScheduleController {

    public void setProjectSchedule(Project project);

    public ProjectSchedule getProjectSchedule(int id);

}
