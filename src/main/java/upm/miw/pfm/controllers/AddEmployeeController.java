package upm.miw.pfm.controllers;

import java.util.List;

import upm.miw.pfm.models.entities.Contract;
import upm.miw.pfm.models.entities.Employee;

public interface AddEmployeeController {

    public void addEmployee(Employee employee);

    public Employee getEmployee(Integer id);

    public List<Contract> listContracts();

	public Contract getContract(int selectedContractId);

}
