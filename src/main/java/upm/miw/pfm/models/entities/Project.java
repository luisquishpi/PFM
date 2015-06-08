package upm.miw.pfm.models.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import upm.miw.pfm.utils.Utils;

@Entity
@Table(name = "project")
public class Project implements IGenericEntity, Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false)
    private Date start;

    @Column(nullable = false)
    private Date end;

    @Column(nullable = false)
    private Double cost;

    @Column(nullable = false)
    private String name;

    @Column(name = "iteration_days", nullable = true, precision = 10, scale = 2)
    private Double iterationDays;
    
    public Project() {
    }

    public Project(String name, Date start, Date end, Double cost) {
        this();
        this.start = start;
        this.end = end;
        this.cost = cost;
        this.name = name;
    }

    public Project(int id, String name, Date start, Date end, Double cost) {
        this(name, start, end, cost);
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getStart() {
        return start;
    }

    public String getStartString() {
        return Utils.convertDateToString(start, Utils.DD_MM_YYYY_FORMAT);
    }

    public void setStartString(String startString) {
        this.start = Utils.convertStringToDate(startString, Utils.DD_MM_YYYY_FORMAT);
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public String getEndString() {
        return Utils.convertDateToString(end, Utils.DD_MM_YYYY_FORMAT);
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public void setEndString(String endString) {
        this.end = Utils.convertStringToDate(endString, Utils.DD_MM_YYYY_FORMAT);
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getIterationDays() {
        return iterationDays;
    }

    public void setIterationDays(Double iterationDays) {
        this.iterationDays = iterationDays;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cost == null) ? 0 : cost.hashCode());
        result = prime * result + ((end == null) ? 0 : end.hashCode());
        result = prime * result + ((start == null) ? 0 : start.hashCode());
        result = prime * result + ((iterationDays == null) ? 0 : iterationDays.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Project other = (Project) obj;
        return id == other.id && start.compareTo(other.start) == 0 && end.compareTo(other.end) == 0
                && cost.equals(other.cost) && name.equals(other.name)
                && (iterationDays == null || iterationDays.intValue() == other.iterationDays.intValue());
    }
    
    

    @Override
    public String toString() {
        return "Project [id=" + id + ", start=" + start + ", end=" + end + ", cost=" + cost
                + ", name=" + name + ", iterationDays=" + iterationDays + "]";
    }

}

