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

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

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
    private Map<String,Double> weekHours;
    
    @Transient
    private final float DELTA = 0.0001f;

    public ProjectSchedule() {
    	this.weekHours = new HashMap<String, Double>();
        this.weekHours.put("mondayHours", 0D);
        this.weekHours.put("tuesdayHours", 0D);
        this.weekHours.put("wednesdayHours", 0D);
        this.weekHours.put("thursdayHours", 0D);
        this.weekHours.put("fridayHours", 0D);
        this.weekHours.put("saturdayHours", 0D);
        this.weekHours.put("sundayHours", 0D);
    }

    public ProjectSchedule(int workdays, Double monday, Double tuesday, Double wednesday,
            Double thursday, Double friday, Double saturday, Double sunday) {
        this.workDays = workdays;
        this.weekHours = new HashMap<String, Double>();
        this.weekHours.put("mondayHours", monday);
        this.weekHours.put("tuesdayHours", tuesday);
        this.weekHours.put("wednesdayHours", wednesday);
        this.weekHours.put("thursdayHours", thursday);
        this.weekHours.put("fridayHours", friday);
        this.weekHours.put("saturdayHours", saturday);
        this.weekHours.put("sundayHours", sunday);
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

    public Double getMondayHours() {
        return weekHours.get("mondayHours");
    }

    public void setMondayHours(Double mondayHours) {
        this.weekHours.put("mondayHours", mondayHours);
    }

    public Double getTuesdayHours() {
        return weekHours.get("tuesdayHours");
    }

    public void setTuesdayHours(Double tuesdayHours) {
        this.weekHours.put("tuesdayHours", tuesdayHours);
    }

    public Double getWednesdayHours() {
        return weekHours.get("wednesdayHours");
    }

    public void setWednesdayHours(Double wednesdayHours) {
    	this.weekHours.put("wednesdayHours", wednesdayHours);
    }

    public Double getThursdayHours() {
        return weekHours.get("thursdayHours");
    }

    public void setThursdayHours(Double thursdayHours) {
    	this.weekHours.put("thursdayHours", thursdayHours);
    }

    public Double getFridayHours() {
        return weekHours.get("fridayHours");
    }

    public void setFridayHours(Double fridayHours) {
    	this.weekHours.put("fridayHours", fridayHours);
    }

    public Double getSaturdayHours() {
        return weekHours.get("saturdayHours");
    }

    public void setSaturdayHours(Double saturdayHours) {
    	this.weekHours.put("saturdayHours", saturdayHours);
    }

    public Double getSundayHours() {
        return weekHours.get("sundayHours");
    }

    public void setSundayHours(Double sundayHours) {
    	this.weekHours.put("sundayHours", sundayHours);
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
                && Math.abs(this.weekHours.get("mondayHours").doubleValue() - project.getMondayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get("tuesdayHours").doubleValue() - project.getTuesdayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get("wednesdayHours").doubleValue() - project.getWednesdayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get("thursdayHours").doubleValue() - project.getThursdayHours().doubleValue()) < DELTA
                && Math.abs(this.weekHours.get("fridayHours").doubleValue() - project.getFridayHours().doubleValue()) <DELTA
                && Math.abs(this.weekHours.get("saturdayHours").doubleValue() - project.getSaturdayHours().doubleValue()) < DELTA 
                && Math.abs(this.weekHours.get("sundayHours").doubleValue() - project.getSundayHours().doubleValue()) < DELTA;
    }

    @Override
    public String toString() {
        return "ProjectSchedule [id=" + id + ", project=" + project + ", workDays=" + workDays
                + ", mondayHours=" + this.getMondayHours() + ", tuesdayHours=" + this.getTuesdayHours()
                + ", wednesdayHours=" + this.getWednesdayHours() + ", thursdayHours=" + this.getThursdayHours()
                + ", fridayHours=" + this.getFridayHours() + ", saturdayHours=" + this.getSaturdayHours()                + ", sundayHours=" + this.getSundayHours() + "]";
    }
}
