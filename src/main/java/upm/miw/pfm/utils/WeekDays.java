package upm.miw.pfm.utils;

import java.io.Serializable;

public enum WeekDays implements Serializable{
	MONDAY_HOURS("mondayHours"), TUESDAY_HOURS("tuesdayHours"), WEDNESDAY_HOURS("wednesdayHours"), 
	THURSDAY_HOURS("thursdayHours"), FRIDAY_HOURS("fridayHours"), SATURDAY_HOURS("saturdayHours"), 
	SUNDAY_HOURS("sundayHours");
	
	private String description;
	
	private WeekDays(String description){
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
}
