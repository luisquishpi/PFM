package upm.miw.pfm.utils;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;

public class PhasesDeserializar extends JsonDeserializer<Phases>{

	@Override
	public Phases deserialize(final JsonParser jp, final DeserializationContext dc) throws IOException, JsonProcessingException {
		
		Phases phase = Phases.fromId(jp.getValueAsString());
	    if (phase != null) {
	        return phase;
	    }
	    throw new JsonMappingException("invalid value for type, must be 'one' or 'two'");
	}

}
