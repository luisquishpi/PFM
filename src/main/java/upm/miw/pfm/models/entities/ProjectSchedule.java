package upm.miw.pfm.models.entities;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MapKeyColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import upm.miw.pfm.utils.WeekDays;

@Entity
@Table(name="project_schedule")
public class ProjectSchedule implements Serializable {
	
	private static final long serialVersionUID = 1L;

    @Id
    @Column
    @GeneratedValue(generator = "gen")
    @GenericGenerator(name = "gen", strategy = "foreign", parameters = @Parameter(name = "property", value = "project"))
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    private Project project;

    @Column(name = "work_days", nullable = false)
    private Integer workDays;

    @ElementCollection(fetch = FetchType.EAGER)
    @MapKeyColumn (name="day")
    @CollectionTable(name="week_hours", joinColumns=@javax.persistence.JoinColumn(name="schedule_id"))
    @Column(name="hours")
    @Fetch (FetchMode.SELECT)
    private Map<WeekDays,Double> weekHours;
    
    @Transient
    private final float DELTA = 0.0001f;

    public ProjectSchedule() {
    	this.weekHours = new HashMap<WeekDays, Double>();
    	this.weekHours.put(WeekDays.MONDAY_HOURS, 0D);
        this.weekHours.put(WeekDays.TUESDAY_HOURS, 0D);
        this.weekHours.put(WeekDays.WEDNESDAY_HOURS, 0D);
        this.weekHours.put(WeekDays.THURSDAY_HOURS, 0D);
        this.weekHours.put(WeekDays.FRIDAY_HOURS, 0D);
        this.weekHours.put(WeekDays.SATURDAY_HOURS, 0D);
        this.weekHours.put(WeekDays.SUNDAY_HOURS, 0D);
    }

    public ProjectSchedule(int workdays, Double monday, Double tuesday, Double wednesday,
            Double thursday, Double friday, Double saturday, Double sunday) {
        this.workDays = workdays;
        this.weekHours = new HashMap<WeekDays, Double>();
        this.weekHours.put(WeekDays.MONDAY_HOURS, monday);
        this.weekHours.put(WeekDays.TUESDAY_HOURS, tuesday);
        this.weekHours.put(WeekDays.WEDNESDAY_HOURS, wednesday);
        this.weekHours.put(WeekDays.THURSDAY_HOURS, thursday);
        this.weekHours.put(WeekDays.FRIDAY_HOURS, friday);
        this.weekHours.put(WeekDays.SATURDAY_HOURS, saturday);
        this.weekHours.put(WeekDays.SUNDAY_HOURS, sunday);
    }

    public ProjectSchedule(Project project, int workdays, Double monday, Double tuesday,
            Double wednesday, Double thursday, Double friday, Double saturday, Double sunday) {
        this(workdays, monday, tuesday, wednesday, thursday, friday, saturday, sunday);
        this.project = project;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Integer getWorkDays() {
        return workDays;
    }

    public void setWorkDays(Integer workDays) {
        this.workDays = workDays;
    }
    
    public Map<WeekDays, Double> getWeekHours(){
    	return weekHours;
    }

    public Double getMondayHours() {
        return weekHours.get(WeekDays.MONDAY_HOURS);
    }

    public void setMondayHours(Double mondayHours) {
        this.weekHours.put(WeekDays.MONDAY_HOURS, mondayHours);
    }

    public Double getTuesdayHours() {
        return weekHours.get(WeekDays.TUESDAY_HOURS);
    }

    public void setTuesdayHours(Double tuesdayHours) {
        this.weekHours.put(WeekDays.TUESDAY_HOURS, tuesdayHours);
    }

    public Double getWednesdayHours() {
        return weekHours.get(WeekDays.WEDNESDAY_HOURS);
    }

    public void setWednesdayHours(Double wednesdayHours) {
    	this.weekHours.put(WeekDays.WEDNESDAY_HOURS, wednesdayHours);
    }

    public Double getThursdayHours() {
        return weekHours.get(WeekDays.THURSDAY_HOURS);
    }

    public void setThursdayHours(Double thursdayHours) {
    	this.weekHours.put(WeekDays.THURSDAY_HOURS, thursdayHours);
    }

    public Double getFridayHours() {
        return weekHours.get(WeekDays.FRIDAY_HOURS);
    }

    public void setFridayHours(Double fridayHours) {
    	this.weekHours.put(WeekDays.FRIDAY_HOURS, fridayHours);
    }

    public Double getSaturdayHours() {
        return weekHours.get(WeekDays.SATURDAY_HOURS);
    }

    public void setSaturdayHours(Double saturdayHours) {
    	this.weekHours.put(WeekDays.SATURDAY_HOURS, saturdayHours);
    }

    public Double getSundayHours() {
        return weekHours.get(WeekDays.SUNDAY_HOURS);
    }

    public void setSundayHours(Double sundayHours) {
    	this.weekHours.put(WeekDays.SUNDAY_HOURS, sundayHours);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((workDays == null) ? 0 : workDays.hashCode());
        return result;
    }

	@Override
	public boolean equals(Object obj) {
		ProjectSchedule project = (ProjectSchedule) obj;
        return this.project.equals(project.getProject()) && this.workDays == project.getWorkDays()
                && Math.abs(this.weekHours.get(WeekDays.MONDAY_HOURS).doubleValue() - project.getMondayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get(WeekDays.TUESDAY_HOURS).doubleValue() - project.getTuesdayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get(WeekDays.WEDNESDAY_HOURS).doubleValue() - project.getWednesdayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get(WeekDays.THURSDAY_HOURS).doubleValue() - project.getThursdayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get(WeekDays.FRIDAY_HOURS).doubleValue() - project.getFridayHours().doubleValue()) <DELTA
                && Math.abs(this.weekHours.get(WeekDays.SATURDAY_HOURS).doubleValue() - project.getSaturdayHours().doubleValue()) < DELTA 
                && Math.abs(this.weekHours.get(WeekDays.SUNDAY_HOURS).doubleValue() - project.getSundayHours().doubleValue()) < DELTA;
    }

    @Override
    public String toString() {
        return "ProjectSchedule [id=" + id + ", project=" + project + ", workDays=" + workDays
                + ", mondayHours=" + this.getMondayHours() + ", tuesdayHours=" + this.getTuesdayHours()
                + ", wednesdayHours=" + this.getWednesdayHours() + ", thursdayHours=" + this.getThursdayHours()
                + ", fridayHours=" + this.getFridayHours() + ", saturdayHours=" + this.getSaturdayHours()   + ", sundayHours=" + this.getSundayHours() + "]";
    }
}
