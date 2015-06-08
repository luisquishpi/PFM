package upm.miw.pfm.models.daos;

import java.util.List;

import upm.miw.pfm.models.entities.Employee;

public interface EmployeeDao extends GenericDao<Employee, Integer>{

    public List<Employee> findAllWithoutRoles();

	public List<Employee> findAllWithVacatons();

}
