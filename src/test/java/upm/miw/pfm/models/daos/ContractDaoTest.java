package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;
import java.util.ArrayList;
import java.util.List;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import upm.miw.pfm.models.daos.hibernate.DaoHibernateFactory;
import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.utils.ContractType;

public class ContractDaoTest {

    private ContractDao contractDao;

    private Contract contract;

    @BeforeClass
    public static void beforeClass() {
        DaoFactory.setFactory(new DaoHibernateFactory());
    }

    @Before
    public void before() {
        contractDao = DaoFactory.getFactory().getContractDao();
        contract = new Contract(ContractType.FIJO, 32.5);
        //new MockContractDao(contract);
        contractDao.create(contract);
    }

    @Test
    public void testCreateAndRead() {
        contract = new Contract(ContractType.CONSULTOR, 33.0);
        //new MockContractDao(contract);
        contractDao.create(contract);
        assertEquals(contractDao.read(contract.getId()), contract);
    }

    @Test
    public void testUpdate() {
        Contract contractClone = new Contract(contract.getContractType(), contract.getInsurance());
        contractClone.setId(contract.getId());
        contract.setContractType(ContractType.BECARIO);
        contract.setInsurance(30.0);
        //new MockContractDao(contract);
        contractDao.update(contract);
        assertNotEquals(contractClone, contractDao.read(contract.getId()));
    }

    @Test
    public void testList() {
        Contract contract1 = new Contract(ContractType.FIJO, 32.5);
        contractDao.create(contract1);
        Contract contract2 = new Contract(ContractType.BECARIO, 30.0);
        contractDao.create(contract2);

        List<Contract> listContract = new ArrayList<Contract>();
        listContract.add(contract);
        listContract.add(contract1);
        listContract.add(contract2);
        //new MockContractDao(listContract);

        assertEquals(3, contractDao.findAll().size());
    }

}
