package upm.miw.pfm.controllers.ejbs;

import upm.miw.pfm.controllers.GetEmployeeController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Employee;

public class GetEmployeeControllerEjb implements GetEmployeeController {

	@Override
	public Employee getEmployee(Integer id) {
		return DaoFactory.getFactory().getEmployeeDao().read(id);
	}

}
