package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.AddEmployeeController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;

@Stateless
public class AddEmployeeControllerEjb implements AddEmployeeController {

    @Override
    public void addEmployee(Employee employee) {
        DaoFactory.getFactory().getEmployeeDao().create(employee);
    }

    @Override
    public Employee getEmployee(Integer id) {
        return DaoFactory.getFactory().getEmployeeDao().read(id);
    }

    @Override
    public List<Contract> listContracts() {
        return DaoFactory.getFactory().getContractDao().findAll();
    }

}
