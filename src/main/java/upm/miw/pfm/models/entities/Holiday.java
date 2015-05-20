package upm.miw.pfm.models.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import upm.miw.pfm.utils.CheckDateHoliday;

@Entity
@Table(name = "holiday")
@CheckDateHoliday
public class Holiday {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "start", nullable = false)
    private Date start;

    @Column(name = "end", nullable = false)
    private Date end;

    public Holiday() {
    }

    public Holiday(Date start, Date end) {
        this.start = start;
        this.end = end;
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

    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Holiday other = (Holiday) obj;
        return id == other.id && start.equals(other.start)
                && end.equals(other.end);
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((start == null) ? 0 : start.hashCode());
        result = prime * result + ((end == null) ? 0 : end.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "Holiday [id=" + id + ", Start=" + start + ", End=" + end + "]";
    }
}
