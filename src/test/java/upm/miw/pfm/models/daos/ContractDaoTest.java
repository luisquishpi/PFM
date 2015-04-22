package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.mocks.MockContractDao;
import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class ContractDaoTest {

    private ContractDao contractDao;
    private Contract contract;
    @Before
    public void before(){
        DaoFactory.setFactory(new DaoHibernateFactory());
        contractDao=DaoFactory.getFactory().getContractDao();
        contract = new Contract(ContractType.FIJO, 32.5);
    }
    
    @Test
    public void testCreate() {
        new MockContractDao(contract);
        contractDao.create(contract);
        assertEquals(contractDao.read(contract.getId()), contract);
    }

}
