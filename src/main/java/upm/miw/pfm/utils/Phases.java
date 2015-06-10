package upm.miw.pfm.utils;

import java.io.Serializable;

public enum Phases implements Serializable{
	INICIO("Inicio"), ELABORACION("Elaboracion"), CONSTRUCCION("Construccion"),
	TRANSICION("Transicion");

	private String description;

    private Phases(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
