package upm.miw.pfm.models.daos;

import java.util.List;

import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;

public interface VacationDao extends GenericDao<Vacation, Integer> {

    public List<Vacation> findAll(Employee employee);

    public void deleteAll(Employee employee);

}
