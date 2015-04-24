package upm.miw.pfm.controllers;

public abstract class ControllerFactory {
    public static ControllerFactory factory = null;

    public static void setFactory(ControllerFactory factory) {
        ControllerFactory.factory = factory;
    }

    public static ControllerFactory getFactory() {
        assert factory != null;
        return factory;
    }

    public abstract ProjectController getProjectController();

    public abstract ListProjectsController getListProjectController();

    public abstract NewContractController getNewContractController();

    public abstract ListContractsController getListContractsController();

    public abstract AddEmployeeController getAddEmployeeController();

    public abstract SetScheduleController getSetScheduleController();

}
