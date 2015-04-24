package upm.miw.pfm.views.beans;

import javax.faces.bean.ManagedProperty;

import upm.miw.pfm.controllers.ControllerFactory;
import upm.miw.pfm.controllers.ejbs.ControllerEjbFactory;


public class ViewBean {

	@ManagedProperty(value = "#{controllerFactory}")
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
