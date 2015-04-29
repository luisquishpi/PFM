package upm.miw.pfm.controllers;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.AddEmployeeControllerEjb;
import upm.miw.pfm.controllers.ejbs.GetEmployeeControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.utils.RoleType;

public class GetEmployeeControllerTest {
	
	private GetEmployeeController getEmployeeController;
	
	private Employee employee;
	
	private Contract contract;
	
	private List<RoleType> roles; 
	
	@Before
	public void before(){
		getEmployeeController = new GetEmployeeControllerEjb();
		AddEmployeeController addEmployeeController = new AddEmployeeControllerEjb();
		contract = new Contract("Fijo", 32.5);
		roles = new ArrayList<RoleType>();
		roles.add(RoleType.GESTION_PROYECTO);
		roles.add(RoleType.REQUISITOS);
		roles.add(RoleType.ANALISIS_DISEÑO);
		employee = new Employee(1,"Anibal","Lecter","A",40500.00,contract,roles);
		new MockEmployeeDao(employee);
		addEmployeeController.addEmployee(employee);
	}
	
	@Test
	public void getEmployeeTest(){
		Employee employee2 = getEmployeeController.getEmployee(1);
		assertEquals(new Employee(1,"Anibal","Lecter","A",40500.00,contract,roles), employee2);
	}
}
