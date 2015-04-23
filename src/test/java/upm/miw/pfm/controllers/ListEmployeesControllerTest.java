package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.ListEmployeesControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.ContractType;
import upm.miw.pfm.utils.RoleType;

public class ListEmployeesControllerTest {
	
	private ListEmployeesController listEmployeesController;
	
	private Contract contract;
	
	private List<RoleType> roles;
	
	
	@Before
	public void before(){
		listEmployeesController = new ListEmployeesControllerEjb();
	}
	
	@Test
	public void listEmployeesTest(){
		List<Employee> employeeList = new ArrayList<Employee>(); 
		contract = new Contract(ContractType.FIJO, 32.5);
		roles = new ArrayList<RoleType>();
		roles.add(RoleType.GESTION_PROYECTO);
		roles.add(RoleType.REQUISITOS);
		roles.add(RoleType.ANALISIS_DISEÑO);
		Employee employee1 = new Employee("Anibal","Lecter","A",40500.00,contract,roles);
		employeeList.add(employee1);
		
		new MockEmployeeDao(employeeList);
		assertEquals(1,listEmployeesController.listEmployees().size());
	}
	
	@Test
	public void emptyListEmployeesTest(){
		List<Employee> employeeList = new ArrayList<Employee>(); 
		new MockEmployeeDao(employeeList);
		assertEquals(0,listEmployeesController.listEmployees().size());
	}
	

}
