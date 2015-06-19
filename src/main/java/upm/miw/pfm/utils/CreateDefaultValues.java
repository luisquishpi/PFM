package upm.miw.pfm.utils;

import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.models.daos.ContractDao;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.EmployeeDao;
import upm.miw.pfm.models.daos.HolidayDao;
import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.daos.ProjectScheduleDao;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class CreateDefaultValues {
    private final static Class<CreateDefaultValues> clazz = CreateDefaultValues.class;

	public static void main(String[] args){
        LogManager.getLogger(clazz).debug("Iniciando creacion de valores default");

		ContractDao contractDao = DaoFactory.getFactory().getContractDao();
        ProjectDao projectDao = DaoFactory.getFactory().getProjectDao();
        ProjectScheduleDao projectScheduleDao = DaoFactory.getFactory().getProjectScheduleDao();
        EmployeeDao employeeDao = DaoFactory.getFactory().getEmployeeDao();
        HolidayDao holidayDao = DaoFactory.getFactory().getHolidayDao();

        LogManager.getLogger(clazz).debug("Creacion de contratos");

        Contract contract = new Contract("Fijo", 32.5);
        Contract contract2 = new Contract("Becario", 2.0);
        Contract contract3 = new Contract("Consultor", 0.0);
        contractDao.create(contract);
        contractDao.create(contract2);
        contractDao.create(contract3);
        
        Set<RoleType> roles = new HashSet<RoleType>();
        roles.add(RoleType.ANALYSIS_DESIGN);
        roles.add(RoleType.REQUIREMENTS);
        roles.add(RoleType.DEPLOY);
        roles.add(RoleType.ENVIROMENT_REVISION_CONTROL);
        roles.add(RoleType.IMPLEMENTATION);
        roles.add(RoleType.PROJECT_MANAGEMENT);
        roles.add(RoleType.TESTS);
        
        Set<RoleType> roles2 = new HashSet<RoleType>();
        roles2.add(RoleType.REQUIREMENTS);
        roles2.add(RoleType.PROJECT_MANAGEMENT);
        
        Set<RoleType> roles3 = new HashSet<RoleType>();
        roles3.add(RoleType.ANALYSIS_DESIGN);
        roles3.add(RoleType.REQUIREMENTS);
        roles3.add(RoleType.IMPLEMENTATION);
        
        Set<RoleType> roles4 = new HashSet<RoleType>();
        roles4.add(RoleType.ANALYSIS_DESIGN);
        roles4.add(RoleType.DEPLOY);
        roles4.add(RoleType.ENVIROMENT_REVISION_CONTROL);
        roles4.add(RoleType.IMPLEMENTATION);
        roles4.add(RoleType.TESTS);
        
        Set<RoleType> roles5 = new HashSet<RoleType>();
        roles5.add(RoleType.ANALYSIS_DESIGN);
        roles5.add(RoleType.IMPLEMENTATION);
        roles5.add(RoleType.TESTS);
        
        Set<RoleType> roles6 = new HashSet<RoleType>();
        roles6.add(RoleType.DEPLOY);
        roles6.add(RoleType.ENVIROMENT_REVISION_CONTROL);
        roles6.add(RoleType.IMPLEMENTATION);
        roles6.add(RoleType.TESTS);
        
        Set<RoleType> roles7 = new HashSet<RoleType>();
        roles7.add(RoleType.DEPLOY);
        roles7.add(RoleType.ENVIROMENT_REVISION_CONTROL);
        roles7.add(RoleType.TESTS);
        
        LogManager.getLogger(clazz).debug("Creacion de empleados");

        Employee employee = new Employee("Anibal", "Pacheco", "007", 40500.00, contract, roles);
        Employee employee2 = new Employee("Beatriz", "Pacheco", "007", 38000.00, contract, roles);
        Employee employee3 = new Employee("Carlos", "Pacheco", "007", 30000.00, contract, roles2);
        Employee employee4 = new Employee("Daniela", "Pacheco", "007", 28500.00, contract, roles2);
        Employee employee5 = new Employee("Ernesto", "Pacheco", "007", 40000.00, contract3, roles3);
        Employee employee6 = new Employee("Flor", "Pacheco", "007", 25000.00, contract, roles3);
        Employee employee7 = new Employee("Gabriel", "Pacheco", "007", 23000.00, contract, roles3);
        Employee employee8 = new Employee("Henar", "Pacheco", "007", 24500.00, contract, roles3);
        Employee employee9 = new Employee("Ismael", "Pacheco", "007", 24000.00, contract, roles4);
        Employee employee10 = new Employee("Julia", "Pacheco", "007", 24000.00, contract, roles4);
        Employee employee11 = new Employee("Kiko", "Pacheco", "007", 18000.00, contract2, roles5);
        Employee employee12 = new Employee("Lourdes", "Pacheco", "007", 18000.00, contract2, roles5);
        Employee employee13 = new Employee("Manuel", "Pacheco", "007", 18000.00, contract2, roles6);
        Employee employee14 = new Employee("Noelia", "Pacheco", "007", 18000.00, contract2, roles6);
        Employee employee15 = new Employee("Osvaldo", "Pacheco", "007", 22000.00, contract, roles6);
        Employee employee16 = new Employee("Paloma", "Pacheco", "007", 21000.00, contract, roles6);
        Employee employee17 = new Employee("Ramón", "Pacheco", "007", 20000.00, contract, roles7);
        Employee employee18 = new Employee("Sara", "Pacheco", "007", 25000.00, contract3, roles7);
        Employee employee19 = new Employee("Tomás", "Pacheco", "007", 30000.00, contract3, roles7);
        Employee employee20 = new Employee("Úrsula", "Pacheco", "007", 20000.00, contract, roles7);
        
        employeeDao.create(employee);
        employeeDao.create(employee2);
        employeeDao.create(employee3);
        employeeDao.create(employee4);
        employeeDao.create(employee5);
        employeeDao.create(employee6);
        employeeDao.create(employee7);
        employeeDao.create(employee8);
        employeeDao.create(employee9);
        employeeDao.create(employee10);
        employeeDao.create(employee11);
        employeeDao.create(employee12);
        employeeDao.create(employee13);
        employeeDao.create(employee14);
        employeeDao.create(employee15);
        employeeDao.create(employee16);
        employeeDao.create(employee17);
        employeeDao.create(employee18);
        employeeDao.create(employee19);
        employeeDao.create(employee20);
        
        LogManager.getLogger(clazz).debug("Creacion de proyecto");
        Date start = Utils.buildDate(2015, Calendar.MARCH, 2);
        Date end = Utils.buildDate(2015, Calendar.SEPTEMBER, 4);
        Project project = new Project("Scrum", start, end, 85000.0);
        project.setIterationDays(13);
        projectDao.create(project);
        
        LogManager.getLogger(clazz).debug("Creacion de horario");
        ProjectSchedule projectSchedule = new ProjectSchedule(project, 21, 8D, 8D, 8D, 8D, 8D, 0D, 0D);
        projectSchedule.setProject(project);
        projectScheduleDao.create(projectSchedule);
        
        LogManager.getLogger(clazz).debug("Creacion de festivo");
        Holiday holiday = new Holiday(Utils.buildDate(2015, 3, 3),Utils.buildDate(2015, 3, 4));
        holidayDao.create(holiday);
        LogManager.getLogger(clazz).debug("Finalizando creacion de valores default");
	}
}
