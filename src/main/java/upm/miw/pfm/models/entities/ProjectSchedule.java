package upm.miw.pfm.models.entities;

public class ProjectSchedule {
    
    private Project project;
    private Integer workDays;
    private Double mondayHours;
    private Double tuesdayHours;
    private Double wednesdayHours;
    private Double thursdayHours;    
    private Double fridayHours;
    private Double saturdayHours;
    private Double sundayHours;
    
    public ProjectSchedule(){        
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

}
