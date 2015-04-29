package upm.miw.pfm.controllers;

import upm.miw.pfm.models.entities.ProjectSchedule;

public interface SetScheduleController {

    public void setProjectSchedule(ProjectSchedule projectSchedule);

    public ProjectSchedule getProjectSchedule(int id);

}
