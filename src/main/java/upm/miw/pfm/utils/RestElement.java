package upm.miw.pfm.utils;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import upm.miw.pfm.models.entities.HoursRolePhase;

@XmlRootElement
public class RestElement {

    @XmlElement
    public List<HoursRolePhase> hoursRolePhase;

    @XmlElement
    public List<Double> peoplePhase;

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
    
    public Double numberOfInitPhasePeople(){
        return this.indexExists(0) ? this.getPeoplePhase().get(0) : 0.00;
    }
    
    public Double numberOfElaborationPhasePeople(){
        return this.indexExists(1) ? this.getPeoplePhase().get(1) : 0.00;
    }
    
    public Double numberOfConstructionPhasePeople(){
        return this.indexExists(2) ? this.getPeoplePhase().get(2) : 0.00;
    }
    
    public Double numberOfTransitionPhasePeople(){
        return this.indexExists(3) ? this.getPeoplePhase().get(3) : 0.00;
    }
    
    private boolean indexExists(final int index) {
        return index >= 0 && index < this.getPeoplePhase().size();
    }    
}
