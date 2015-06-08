package upm.miw.pfm.models.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import upm.miw.pfm.utils.CheckDateRange;

@Entity
@Table(name = "employee_vacation")
@CheckDateRange(message="Ya se han registrado vacaciones en este periodo.")
public class Vacation implements IGenericDateEntity, Serializable{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue
    private Integer id;

    @Column(name = "start", nullable = false)
    private Date start;

    @Column(name = "end", nullable = false)
    private Date end;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    public Vacation() {
    	this.start = new Date();
    	this.end = new Date();
    	this.employee = new Employee();
    }

    public Vacation(Date start, Date end, Employee employee) {
        this.start = start;
        this.end = end;
        this.employee=employee;
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

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }


    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Vacation other = (Vacation) obj;
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
        return "Vacation [id=" + id + ", Start=" + start + ", End=" + end + "]";
    }
}
