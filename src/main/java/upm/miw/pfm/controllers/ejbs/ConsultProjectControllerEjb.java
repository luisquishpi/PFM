package upm.miw.pfm.controllers.ejbs;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.controllers.ConsultProjectController;
import upm.miw.pfm.models.entities.Project;

public class ConsultProjectControllerEjb implements ConsultProjectController {

	@Override
	public Project getProyect(Integer id) {
		return DaoFactory.getFactory().getProjectDao().read(id);
	}

}
