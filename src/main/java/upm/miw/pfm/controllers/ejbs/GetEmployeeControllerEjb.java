package upm.miw.pfm.controllers.ejbs;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.GetEmployeeController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Employee;

@Stateless
public class GetEmployeeControllerEjb implements GetEmployeeController {

    @Override
    public Employee getEmployee(Integer id) {
        return DaoFactory.getFactory().getEmployeeDao().read(id);
    }

}
