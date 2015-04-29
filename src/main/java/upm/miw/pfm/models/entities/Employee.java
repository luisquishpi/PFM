
package upm.miw.pfm.models.entities;

import java.util.List;

import upm.miw.pfm.utils.RoleType;

public class Employee {

    private Integer id;

    private String name;

    private String surname;

    private String employeeCode;

    private Double annualGrossSalary;

    private Contract contract;

    private List<RoleType> roles;

    public Employee() {
    }

public Employee(int id, String name, String surname, String employeeCode,
            Double annualGrossSalary, Contract contract, List<RoleType> roles) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.employeeCode = employeeCode;
        this.annualGrossSalary = annualGrossSalary;
        this.contract = contract;
        this.roles = roles;
    }

    public Employee(String name, String surname, String employeeCode, Double annualGrossSalary,
            Contract contract, List<RoleType> roles) {
        this.name = name;
        this.surname = surname;
        this.employeeCode = employeeCode;
        this.annualGrossSalary = annualGrossSalary;
        this.contract = contract;
        this.roles = roles;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public Double getAnnualGrossSalary() {
        return annualGrossSalary;
    }

    public Contract getContract() {
        return contract;
    }

    public List<RoleType> getRoles() {
        return roles;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public void setAnnualGrossSalary(Double annualGrossSalary) {
        this.annualGrossSalary = annualGrossSalary;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public void setRoles(List<RoleType> roles) {
        this.roles = roles;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((surname == null) ? 0 : surname.hashCode());
        result = prime * result + ((employeeCode == null) ? 0 : employeeCode.hashCode());
        result = prime * result + ((annualGrossSalary == null) ? 0 : annualGrossSalary.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Employee other = (Employee) obj;
        return id == other.id && employeeCode.equals(other.employeeCode);
    }
}
