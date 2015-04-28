package upm.miw.pfm.models.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
public class ProjectSchedule {

	public static final Integer MONDAY_INDEX = 1;

	public static final Integer TUESDAY_INDEX = 2;

	public static final Integer WEDNESDAY_INDEX = 3;

	public static final Integer THURSDAY_INDEX = 4;

	public static final Integer FRIDAY_INDEX = 5;

	public static final Integer SATURDAY_INDEX = 6;

	public static final Integer SUNDAY_INDEX = 7;

	@Id
	@GeneratedValue(generator = "gen")
	@GenericGenerator(name = "gen", strategy = "foreign", parameters = @Parameter(name = "property", value = "project"))
	private int id;

	@OneToOne
	@PrimaryKeyJoinColumn
	private Project project;

	private Integer workDays;

	private Double mondayHours;

	private Double tuesdayHours;

	private Double wednesdayHours;

	private Double thursdayHours;

	private Double fridayHours;

	private Double saturdayHours;

	private Double sundayHours;

	public ProjectSchedule() {

	}

	public ProjectSchedule(Project project, int workdays, Double monday,
			Double tuesday, Double wednesday, Double thursday, Double friday,
			Double saturday, Double sunday) {
		this.project = project;
		this.workDays = workdays;
		this.mondayHours = monday;
		this.tuesdayHours = tuesday;
		this.wednesdayHours = wednesday;
		this.thursdayHours = thursday;
		this.fridayHours = friday;
		this.saturdayHours = saturday;
		this.sundayHours = sunday;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public void setWorkDays(Integer i) {
		this.workDays = i;
	}

	public void setMondayHours(Double i) {
		this.mondayHours = i;
	}

	public void setTuesdayHours(Double i) {
		this.tuesdayHours = i;
	}

	public void setWednesdayHours(Double i) {
		this.wednesdayHours = i;
	}

	public void setThursdayHours(Double i) {
		this.thursdayHours = i;
	}

	public void setFridayHours(Double i) {
		this.fridayHours = i;
	}

	public void setSaturdayHours(Double i) {
		this.saturdayHours = i;
	}

	public void setSundayHours(Double i) {
		this.sundayHours = i;
	}

	public Integer getWorkDays() {
		return workDays;
	}

	public Double getMondayHours() {
		return mondayHours;
	}

	public Double getTuesdayHours() {
		return tuesdayHours;
	}

	public Double getWednesdayHours() {
		return wednesdayHours;
	}

	public Double getThursdayHours() {
		return thursdayHours;
	}

	public Double getFridayHours() {
		return fridayHours;
	}

	public Double getSaturdayHours() {
		return saturdayHours;
	}

	public Double getSundayHours() {
		return sundayHours;
	}

	public List<Integer> getWorkDaysArray() {
		List<Integer> days = new ArrayList<Integer>();
		if (getMondayHours() > 0) {
			days.add(MONDAY_INDEX);
		}
		if (getTuesdayHours() > 0) {
			days.add(TUESDAY_INDEX);
		}
		if (getWednesdayHours() > 0) {
			days.add(WEDNESDAY_INDEX);
		}
		if (getThursdayHours() > 0) {
			days.add(THURSDAY_INDEX);
		}
		if (getFridayHours() > 0) {
			days.add(FRIDAY_INDEX);
		}
		if (getSaturdayHours() > 0) {
			days.add(SATURDAY_INDEX);
		}
		if (getSundayHours() > 0) {
			days.add(SUNDAY_INDEX);
		}
		return days;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((workDays == null) ? 0 : workDays.hashCode());
		result = prime * result
				+ ((mondayHours == null) ? 0 : mondayHours.hashCode());
		result = prime * result
				+ ((tuesdayHours == null) ? 0 : tuesdayHours.hashCode());
		result = prime * result
				+ ((wednesdayHours == null) ? 0 : wednesdayHours.hashCode());
		result = prime * result
				+ ((thursdayHours == null) ? 0 : thursdayHours.hashCode());
		result = prime * result
				+ ((fridayHours == null) ? 0 : fridayHours.hashCode());
		result = prime * result
				+ ((saturdayHours == null) ? 0 : saturdayHours.hashCode());
		result = prime * result
				+ ((sundayHours == null) ? 0 : sundayHours.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		ProjectSchedule project = (ProjectSchedule) obj;
		return this.project.equals(project.getProject())
				&& this.workDays == project.getWorkDays()
				&& this.mondayHours == project.getMondayHours()
				&& this.tuesdayHours == project.getTuesdayHours()
				&& this.mondayHours == project.getWednesdayHours()
				&& this.thursdayHours == project.getThursdayHours()
				&& this.fridayHours == project.getFridayHours()
				&& this.saturdayHours == project.getFridayHours()
				&& this.sundayHours == project.getSundayHours();
	}

	@Override
	public String toString() {
		return "[Workdays=" + workDays + ", MondayHours=" + mondayHours
				+ ", TuesdayHours=" + tuesdayHours + ", WednesdayHours="
				+ wednesdayHours + ", ThursdayHours=" + thursdayHours
				+ ", FridayHours=" + fridayHours + ", SaturdayHours="
				+ saturdayHours + ", SundayHours=" + sundayHours +"]";
	}

}
