package upm.miw.pfm.utils;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonProperty;

@XmlRootElement
public enum Phases implements Serializable{
	INICIO("one", "Inicio"), ELABORACION("two","Elaboracion"), CONSTRUCCION("three","Construccion"),
	TRANSICION("four","Transicion");

	private String id;
	
	private String description;
	
    private Phases(String id,String description) {
    	this.id = id;
        this.description = description;
    }

    @JsonProperty("description")
    public String getDescription() {
        return description;
    }
    
    @JsonProperty("id")
    public String getId() {
        return id;
    }

    public static Phases fromId(final String id) {
        if (id != null) {
            for (Phases phase : Phases.values()) {
                if (id.equalsIgnoreCase(phase.id)) {
                    return phase;
                }
            }
        }
        return null;
    }

}
