package upm.miw.pfm.models.entities;

import java.util.ArrayList;
import java.util.List;

public class ProjectSchedule {
    
    public static final Integer MONDAY_INDEX = 1;
    public static final Integer TUESDAY_INDEX = 2;
    public static final Integer WEDNESDAY_INDEX = 3;
    public static final Integer THURSDAY_INDEX = 4;
    public static final Integer FRIDAY_INDEX = 5;
    public static final Integer SATURDAY_INDEX = 6;
    public static final Integer SUNDAY_INDEX = 7;
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
    
    public List<Integer> getWorkDaysArray(){
        List<Integer> days = new ArrayList<Integer>();
        if(getMondayHours() > 0){
            days.add(MONDAY_INDEX);
        }
        if(getTuesdayHours() > 0){
            days.add(TUESDAY_INDEX);
        }
        if(getWednesdayHours() > 0){
            days.add(WEDNESDAY_INDEX);
        }
        if(getThursdayHours() > 0){
            days.add(THURSDAY_INDEX);
        }
        if(getFridayHours() > 0){
            days.add(FRIDAY_INDEX);
        }
        if(getSaturdayHours() > 0){
            days.add(SATURDAY_INDEX);
        }
        if(getSundayHours() > 0){
            days.add(SUNDAY_INDEX);
        }
        return days;
    }

}
