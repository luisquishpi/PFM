package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import upm.miw.pfm.models.entities.Contract;

public class ContractDaoTest {

    private ContractDao contractDao;
    private Contract contract;
    
    private final String FIJO = "Fijo";
    private final String BECARIO = "Becario";
    private final String CONSULTOR= "Consultor";

    @Before
    public void before() {
        contractDao = DaoFactory.getFactory().getContractDao();
    }

    @Test
    public void testCreateAndRead() {
        contract = new Contract(CONSULTOR, 33.0);
        contractDao.create(contract);
        assertEquals(contractDao.read(contract.getId()), contract);
    }

    @Test
    public void testUpdate() {
        contract = new Contract(FIJO, 32.5);
        contractDao.create(contract);
        
        Contract contractClone = new Contract(contract.getContractType(), contract.getInsurance());
        contractClone.setId(contract.getId());
        contract.setContractType(BECARIO);
        contract.setInsurance(30.0);
        contractDao.update(contract);
        assertNotEquals(contractClone, contractDao.read(contract.getId()));
    }

    @Test
    public void testList() {
        Contract contract1 = new Contract(FIJO, 32.5);
        contractDao.create(contract1);
        Contract contract2 = new Contract(BECARIO, 30.0);
        contractDao.create(contract2);

        assertEquals(2, contractDao.findAll().size());
    }
    
    @After
    public void after() {
        DaoFactory.getFactory().getContractDao().query("delete from Contract");
    }

}
