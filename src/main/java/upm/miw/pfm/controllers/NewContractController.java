package upm.miw.pfm.controllers;

import upm.miw.pfm.models.entities.Contract;

public interface NewContractController {

    void saveContract(Contract contract);
    boolean existContract(Contract contract);
}
