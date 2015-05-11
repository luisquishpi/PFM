package upm.miw.pfm.controllers;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.EmployeeControllerEjb;
import upm.miw.pfm.controllers.ejbs.VacationControllerEjb;
import upm.miw.pfm.mocks.MockEmployeeDao;
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

    @Before
    public void before() {
        vacationController = new VacationControllerEjb();
        employeeController=new EmployeeControllerEjb();
    }

    @Test
    public void testNewVacation() throws ParseException {
        
        contract =new Contract("Fijo",25.00);
        employee=new Employee("Anibal", "Santander", "AS", 52000.00, contract);
        new MockEmployeeDao(employee);
        employeeController.addEmployee(employee);
        
        Date startDate = Utils.buildDate(2015, 10, 1);
        Date endDate = Utils.buildDate(2015, 10, 2);
        vacation = new Vacation(startDate, endDate);
        vacation.setEmployee(employee);
        new MockVacationDao(vacation);

        vacationController.createVacation(vacation);
        assertEquals(vacation, vacationController.getVacationById(vacation.getId()));
    }

}
