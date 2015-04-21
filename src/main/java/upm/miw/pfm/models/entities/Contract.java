package upm.miw.pfm.models.entities;

import upm.miw.pfm.utils.ContractType;

public class Contract {

   
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
}
