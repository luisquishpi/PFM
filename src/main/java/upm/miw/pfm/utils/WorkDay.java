package upm.miw.pfm.utils;

import java.io.Serializable;

public class WorkDay implements Serializable {

	private static final long serialVersionUID = 1L;
	private Double workHours;
	
	public WorkDay(Double workHours){
		this.setWorkHours(workHours);
	}
	
	public Double getWorkHours() {
		return workHours;
	}

	public void setWorkHours(Double workHours) {
		this.workHours = workHours;
	}

	@Override
	public String toString() {
		return "WorkDay [workHours=" + workHours + "]";
	}

}
