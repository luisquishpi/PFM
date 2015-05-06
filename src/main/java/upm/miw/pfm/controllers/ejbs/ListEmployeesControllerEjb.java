package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.ListEmployeesController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Employee;

@Stateless
public class ListEmployeesControllerEjb implements ListEmployeesController {

    @Override
    public List<Employee> listEmployees() {
        return DaoFactory.getFactory().getEmployeeDao().findAll();
    }

}
