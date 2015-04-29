package upm.miw.pfm.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import upm.miw.pfm.utils.ContractType;

@Entity(name = "contract")
public class Contract {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false)
    @Enumerated(EnumType.ORDINAL)
    private ContractType contractType;

    @Column(nullable = false)
    private Double insurance;

    public Contract() {
    }

    public Contract(ContractType contractType, Double insurance) {
        this.contractType = contractType;
        this.insurance = insurance;
    }

    public ContractType getContractType() {
        return contractType;
    }

    public void setContractType(ContractType contractType) {
        this.contractType = contractType;
    }

    public double getInsurance() {
        return insurance;
    }

    public void setInsurance(double insurance) {
        this.insurance = insurance;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Contract other = (Contract) obj;
        return id == other.id && contractType.equals(other.contractType)
                && insurance.equals(other.insurance);
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((contractType == null) ? 0 : contractType.hashCode());
        result = prime * result + ((insurance == null) ? 0 : insurance.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "Contract [id=" + id + ", contractType=" + contractType + ", insurance=" + insurance
                + "]";
    }
}
