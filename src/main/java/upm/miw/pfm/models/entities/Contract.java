package upm.miw.pfm.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contract")
public class Contract implements IGenericEntity{

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "contract_type", nullable = false)
    private String contractType;

    @Column(name = "insurance", nullable = false, precision = 10, scale = 2)
    private Double insurance;

    public Contract() {
    }

    public Contract(String contractType, Double insurance) {
        this.contractType = contractType;
        this.insurance = insurance;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getInsurance() {
        return insurance;
    }

    public void setInsurance(Double insurance) {
        this.insurance = insurance;
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
