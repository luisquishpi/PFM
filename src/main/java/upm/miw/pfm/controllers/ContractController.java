package upm.miw.pfm.controllers;

import upm.miw.pfm.models.entities.Contract;

public interface ContractController {

    void saveContract(Contract contract);
    boolean existContract(Contract contract);
}
