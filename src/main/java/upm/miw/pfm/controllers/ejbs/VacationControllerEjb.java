package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import upm.miw.pfm.controllers.VacationController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.VacationDao;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;

@Stateless
public class VacationControllerEjb implements VacationController {

    private VacationDao vacationDao;

    public VacationControllerEjb() {
        vacationDao = DaoFactory.getFactory().getVacationDao();
    }

    @Override
    public void createVacation(Vacation vacation) {
        vacationDao.create(vacation);
    }

    @Override
    public void removeVacationById(Integer id) {
        vacationDao.deleteById(id);
    }

    @Override
    public Vacation getVacationById(Integer id) {
        return vacationDao.read(id);
    }

    @Override
    public List<Vacation> vacationList(Employee employee) {
        return vacationDao.findAll(employee);
    }

}
