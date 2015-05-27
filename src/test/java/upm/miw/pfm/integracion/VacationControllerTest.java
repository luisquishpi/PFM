package upm.miw.pfm.integracion;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.VacationController;
import upm.miw.pfm.controllers.ejbs.ContractControllerEjb;
import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.controllers.ejbs.VacationControllerEjb;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;
import upm.miw.pfm.utils.Utils;

public class VacationControllerTest {

    private VacationController vacationController;

    private Vacation vacation;

    private static Employee employee;

    SimpleDateFormat formatter = new SimpleDateFormat("dd/MMM/yyyy");

    Date startDate;

    Date endDate;

    static List<Vacation> mockListVacation;

    @BeforeClass
    public static void beforeClass() {
        mockListVacation = new ArrayList<Vacation>();
        EmployeeController employeeController = new EmployeeControllerEjb();
        Contract contract = new Contract("Fijo", 25.00);
        new ContractControllerEjb().saveContract(contract);
        employee = new Employee("Anibal", "Santander", "AS", 52000.00, contract);
        employeeController.addEmployee(employee);
    }

    @Before
    public void before() {
        vacationController = new VacationControllerEjb();
        startDate = Utils.buildDate(2015, 10, 1);
        endDate = Utils.buildDate(2015, 10, 2);
    }

    @Test
    public void createAndGetVacationTest() {
        vacation = new Vacation(startDate, endDate, employee);
        vacationController.createVacation(vacation);
        mockListVacation.add(vacation);
        assertEquals(vacation, vacationController.getVacationById(vacation.getId()));
    }

    @Test
    public void listVacationTest() {
        vacation = new Vacation(startDate, endDate, employee);
        vacationController.createVacation(vacation);
        mockListVacation.add(vacation);
        assertEquals(mockListVacation.size(), vacationController.vacationList(employee).size());
    }
    
    @AfterClass
    public static void afterClass() {
    	DaoFactory.getFactory().getVacationDao().deleteAll();
        DaoFactory.getFactory().getEmployeeDao().deleteAll();
        DaoFactory.getFactory().getContractDao().deleteAll();
    }

}
