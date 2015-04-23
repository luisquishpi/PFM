package upm.miw.pfm.mocks;

import java.util.List;

import mockit.Mock;
import mockit.MockUp;
import upm.miw.pfm.models.daos.hibernate.EmployeeDaoHibernate;
import upm.miw.pfm.models.entities.Employee;

public class MockEmployeeDao extends MockUp<EmployeeDaoHibernate>{
	
	private Employee employee;
	
	private List<Employee> listEmployee;

	public MockEmployeeDao(Employee employee) {
		this.employee = employee;
	}

	public MockEmployeeDao() {
	}

	public MockEmployeeDao(List<Employee> listEmployee) {
		this.listEmployee = listEmployee;
	}

	@Mock
	public List<Employee> findAll() {
		return listEmployee;
	}

	@Mock
	public Employee create(Employee employee) {
		this.employee = employee;
		employee.setId(10);
		return employee;
	}

	@Mock
	public Employee read(Integer id) {
		employee.setId(id);
		return employee;
	}

	@Mock
	public void update(Employee employee) {
		this.employee = employee;
	}
} 
