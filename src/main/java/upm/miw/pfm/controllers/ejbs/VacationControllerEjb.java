package upm.miw.pfm.controllers.ejbs;

import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import upm.miw.pfm.controllers.VacationController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.daos.VacationDao;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Vacation;

@Stateless
public class VacationControllerEjb implements VacationController {

    private VacationDao vacationDao;
    
    @Resource
    private ValidatorFactory validatorFactory;

    @Resource
    private Validator validator;

    public VacationControllerEjb() {
        vacationDao = DaoFactory.getFactory().getVacationDao();
        DaoFactory.getFactory().setDao(vacationDao);
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
    
    public Set<ConstraintViolation<Vacation>> validate(Vacation vacation){
        return validator.validate(vacation);
    }

}
