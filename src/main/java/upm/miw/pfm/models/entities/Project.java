package upm.miw.pfm.models.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "project")
public class Project {

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

    public Project() {
    }

    public Project(String name, Date start, Date end, Double cost) {
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

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cost == null) ? 0 : cost.hashCode());
        result = prime * result + ((end == null) ? 0 : end.hashCode());
        result = prime * result + ((start == null) ? 0 : start.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Project other = (Project) obj;
        return id == other.id && start.compareTo(other.start) == 0 && end.compareTo(other.end) == 0
                && cost.equals(other.cost) && name.equals(other.name);
    }

    @Override
    public String toString() {
        return "Project [start=" + start + ", end=" + end + ", cost=" + cost + ", name=" + name
                + ", id=" + id + "]";
    }
}
