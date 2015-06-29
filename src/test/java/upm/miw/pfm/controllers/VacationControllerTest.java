package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.controllers.ejbs.VacationControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
import upm.miw.pfm.mocks.MockProjectScheduleDao;
import upm.miw.pfm.mocks.MockVacationDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;
import upm.miw.pfm.utils.Utils;

public class VacationControllerTest {

    private VacationController vacationController;

    private EmployeeController employeeController;

    private Vacation vacation;

    private Employee employee;

    private Contract contract;

    SimpleDateFormat formatter = new SimpleDateFormat("dd/MMM/yyyy");

    Date startDate;

    Date endDate;
    
    MockVacationDao mc;

    static List<Vacation> mockListVacation;

    @BeforeClass
    public static void beforeClass() {
        mockListVacation = new ArrayList<Vacation>();
        new MockVacationDao(mockListVacation);
    }

    @Before
    public void before() {
        vacationController = new VacationControllerEjb();
        employeeController = new EmployeeControllerEjb();

        contract = new Contract("Fijo", 25.00);
        employee = new Employee("Anibal", "Santander", "AS", 52000.00, contract);
        new MockEmployeeDao(employee);
        employeeController.addEmployee(employee);

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

}
