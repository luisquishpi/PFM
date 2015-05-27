package upm.miw.pfm.models.daos;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

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
        contract = new Contract(CONSULTOR, 33.0);
        contractDao.create(contract);
    }

    @Test
    public void testCreateAndRead() {
        assertEquals(contractDao.read(contract.getId()), contract);
    }

    @Test
    public void testUpdate() {
        contract.setContractType(BECARIO);
        contract.setInsurance(30.0);
        contractDao.update(contract);
        assertEquals(contract, contractDao.read(contract.getId()));
    }

    @Test
    public void testList() {
    	List<Contract> list = new ArrayList<Contract>();
        list.add(contract);
        Contract contract2 = new Contract(FIJO, 30.0);
        contractDao.create(contract2);
        list.add(contract2);

        assertEquals(contractDao.findAll(), list);
    }
    
    
    @Test
    public void testDelete(){
    	contractDao.deleteById(contract.getId());
    	assertNull(contractDao.read(contract.getId()));
    }
     
    @After
    public void after() {
        DaoFactory.getFactory().getContractDao().deleteAll();
    }
}
