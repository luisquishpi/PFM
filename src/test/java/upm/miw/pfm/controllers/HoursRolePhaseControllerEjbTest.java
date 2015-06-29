package upm.miw.pfm.controllers;


import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.controllers.ejbs.HoursRolePhaseControllerEjb;
import upm.miw.pfm.mocks.MockHoursRolePhaseDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.PhaseRoleAssigned;
import upm.miw.pfm.utils.Phases;
import upm.miw.pfm.utils.RoleType;
import upm.miw.pfm.utils.Utils;

public class HoursRolePhaseControllerEjbTest {

	HoursRolePhaseController hoursRolePhaseController;
    Project project;
    List<Double> assignedhourList;
    List<HoursRolePhase> hourRolePhaseList;
    
    @Before
    public void before() {
    	project = new Project("RUP", Utils.buildDate(2015, Calendar.MARCH, 5),
                Utils.buildDate(2015, Calendar.JULY, 4), 7000.0);
    	Contract contract = new Contract("Prueba", 32.0);
    	Employee employee = new Employee("Rodrigo", "Lopez", "323", 32.32, contract);
    	Employee employee2 = new Employee("Antonio", "Lopez", "32323", 12.32, contract);
    	HoursRolePhase hourPhase1 = new HoursRolePhase(employee, project, 2.2, Phases.INICIO, RoleType.ANALYSIS_DESIGN);
    	HoursRolePhase hourPhase2 = new HoursRolePhase(employee2, project, 12.2, Phases.INICIO, RoleType.ANALYSIS_DESIGN);
    	
    	hoursRolePhaseController = new HoursRolePhaseControllerEjb();
    	hourRolePhaseList = new ArrayList<HoursRolePhase>();
    	hourRolePhaseList.add(hourPhase1);
    	hourRolePhaseList.add(hourPhase2);
    	
    	assignedhourList = new ArrayList<Double>();
    	assignedhourList.add(2.0);
    	assignedhourList.add(4.0);
    	assignedhourList.add(6.0);
    	assignedhourList.add(8.0);
    }

    @Test
    public void testGetAssignedHoursPerRole() {
    	new MockHoursRolePhaseDao(assignedhourList, hourRolePhaseList);
    	
    	List<PhaseRoleAssigned> listPra = hoursRolePhaseController.getAssignedHoursPerRole(project);
    	for(int i=0; i<listPra.size();i++){
    		assertEquals(listPra.get(i).getSumRoles(), assignedhourList);
    	}
    }
    
    @Test
    public void testGetResources() {
    	new MockHoursRolePhaseDao(assignedhourList, hourRolePhaseList);
        assertEquals(hoursRolePhaseController.getResources(project), hourRolePhaseList);
    }
}
