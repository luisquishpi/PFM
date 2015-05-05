package upm.miw.pfm.models.entities;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import upm.miw.pfm.utils.RoleType;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "employee_code", nullable = false)
    private String employeeCode;

    @Column(name = "annual_gross_salary", nullable = false)
    private Double annualGrossSalary;

    @OneToOne(cascade = CascadeType.REFRESH, optional = false)
    private Contract contract;

    @ElementCollection(targetClass=RoleType.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="employee_roles", joinColumns = @JoinColumn(name = "employee_id"))
    @Column(name="role")
    private Collection<RoleType> roles;

    public Employee() {
    }

    public Employee(int id, String name, String surname, String employeeCode,
            Double annualGrossSalary, Contract contract, List<RoleType> roles) {
        this(name, surname, employeeCode, annualGrossSalary, contract, roles);
        this.id = id;
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

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public Double getAnnualGrossSalary() {
        return annualGrossSalary;
    }

    public void setAnnualGrossSalary(Double annualGrossSalary) {
        this.annualGrossSalary = annualGrossSalary;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public Collection<RoleType> getRoles() {
        return roles;
    }

    public void setRoles(Collection<RoleType> roles) {
        this.roles = roles;
    }
    
    public String getFullName(){
        return this.getName() + " " + this.getSurname();
    }
    
    public Double getAnnualNetSalary(){
        return this.getAnnualGrossSalary() * ( 1 + this.getContract().getInsurance() );
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
