package upm.miw.pfm.utils;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import upm.miw.pfm.models.entities.HoursRolePhase;

@XmlRootElement
public class RestElement {

	@XmlElement public List<HoursRolePhase> hoursRolePhase;
	@XmlElement public List<Double> peoplePhase;
	public List<HoursRolePhase> getHoursRolePhase() {
		return hoursRolePhase;
	}
	public void setHoursRolePhase(List<HoursRolePhase> hoursRolePhase) {
		this.hoursRolePhase = hoursRolePhase;
	}
	public List<Double> getPeoplePhase() {
		return peoplePhase;
	}
	public void setPeoplePhase(List<Double> peoplePhase) {
		this.peoplePhase = peoplePhase;
	}


	
	
	
}
