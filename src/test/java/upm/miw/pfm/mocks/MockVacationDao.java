package upm.miw.pfm.mocks;

import java.util.List;

import upm.miw.pfm.models.daos.hibernate.VacationDaoHibernate;
import upm.miw.pfm.models.entities.Vacation;
import mockit.Mock;
import mockit.MockUp;

public class MockVacationDao extends MockUp<VacationDaoHibernate> {

    private Vacation vacation;

    private List<Vacation> listVacation;

    public MockVacationDao(Vacation vacation) {
        this.vacation = vacation;
    }

    public MockVacationDao() {
    }

    public MockVacationDao(List<Vacation> listVacation) {
        this.listVacation = listVacation;
    }

    @Mock
    public List<Vacation> findAll() {
        return listVacation;
    }

    @Mock
    public Vacation create(Vacation vacation) {
        vacation.setId(10);
        this.vacation = vacation;
        return vacation;
    }

    @Mock
    public Vacation read(Integer id) {
        return vacation;
    }

    @Mock
    public void update(Vacation vacation) {
        vacation.setId(10);
        this.vacation = vacation;
    }
}
