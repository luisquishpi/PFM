package upm.miw.pfm.utils;

import java.util.List;

public class PhaseRoleAssigned {
	
	private Phases phase;
	private List<Double> sumRoles;
	public List<Double> getSumRoles() {
		return sumRoles;
	}
	public void setSumRoles(List<Double> sumRoles) {
		this.sumRoles = sumRoles;
	}
	public Phases getPhase() {
		return phase;
	}
	public void setPhase(Phases phase) {
		this.phase = phase;
	}
	@Override
	public String toString() {
		return "PhaseRoleAssigned [phase=" + phase + ", sumRoles=" + sumRoles
				+ "]";
	}
	
}
