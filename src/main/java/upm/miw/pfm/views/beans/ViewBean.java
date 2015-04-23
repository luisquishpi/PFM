package upm.miw.pfm.views.beans;

import upm.miw.pfm.controllers.ControllerFactory;
import upm.miw.pfm.controllers.ejbs.ControllerEjbFactory;


public class ViewBean {

    private ControllerFactory controllerFactory=null;

    public ControllerFactory getControllerFactory() {
        if(controllerFactory==null){
            controllerFactory= new ControllerEjbFactory();
        }
        return controllerFactory;
    }

    public void setControllerFactory(ControllerFactory controllerFactory) {
        this.controllerFactory = controllerFactory;
    }
}
