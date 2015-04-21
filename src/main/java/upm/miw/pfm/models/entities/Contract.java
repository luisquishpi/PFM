package upm.miw.pfm.models.entities;

import upm.miw.pfm.utils.ContractType;

public class Contract {

    private Integer id;
    private ContractType contractType;
    private double insurance;
    public Contract(ContractType contractType, double insurance) {
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
        return id.equals(other.id) && contractType.equals(other.contractType)
                && insurance==other.insurance;
    }

    @Override
    public String toString() {
        return "Contract [id=" + id + ", contractType=" + contractType + ", insurance=" + insurance + "]";
    }
}
