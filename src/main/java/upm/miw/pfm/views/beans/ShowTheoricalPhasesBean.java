package upm.miw.pfm.views.beans;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import org.apache.logging.log4j.LogManager;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class ShowTheoricalPhasesBean extends DisciplinesPhasesBean{
	

    public String process() {
        if (project.getId() != null && project.getId() != -1) {
            Project projectToUpdate = findSelectedProject();
            projectToUpdate.setIterationDays(project.getIterationDays());
            projectController.updateProject(projectToUpdate);
            LogManager.getLogger(clazz).debug("Proyecto a actualizar " + projectToUpdate);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Proyecto",
                    "Se actualizó las fases teóricas satisfactoriamente");
        }
        return "show_theorical_phases";
    }
}
