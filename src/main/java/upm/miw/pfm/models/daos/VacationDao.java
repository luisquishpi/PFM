package upm.miw.pfm.models.daos;

import java.util.Date;
import java.util.List;

import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;

public interface VacationDao extends GenericDao<Vacation, Integer> {

    List<Vacation> findAll(Employee employee);
    
    Boolean exists(Employee employee, Date start, Date end);

}
