package upm.miw.pfm.controllers.ejbs;

import upm.miw.pfm.controllers.AddEmployeeController;
import upm.miw.pfm.controllers.ControllerFactory;
import upm.miw.pfm.controllers.ListContractsController;
import upm.miw.pfm.controllers.ListProjectsController;
import upm.miw.pfm.controllers.NewContractController;
import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;

public class ControllerEjbFactory extends ControllerFactory {

    private ProjectController projectController;
    private NewContractController newContractController;

    @Override
    public ProjectController getProjectController() {
        if (projectController == null)
            projectController = new ProjectControllerEjb();
        return projectController;
    }

    @Override
    public ListProjectsController getListProjectController() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public NewContractController getNewContractController() {
        if (newContractController == null)
            newContractController = new NewContractControllerEjb();
        return newContractController;
    }

    @Override
    public ListContractsController getListContractsController() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public AddEmployeeController getAddEmployeeController() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public SetScheduleController getSetScheduleController() {
        // TODO Auto-generated method stub
        return null;
    }

}
