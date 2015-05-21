package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Employee;

@Stateless
public class EmployeeControllerEjb implements EmployeeController {

    @Override
    public void addEmployee(Employee employee) {
        DaoFactory.getFactory().getEmployeeDao().create(employee);
    }

    @Override
    public Employee getEmployee(Integer id) {
        return DaoFactory.getFactory().getEmployeeDao().read(id);
    }

    @Override
    public List<Employee> listEmployees() {
        return DaoFactory.getFactory().getEmployeeDao().findAllWithoutRoles();
    }

	@Override
	public void updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		
	}

}
