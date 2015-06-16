package upm.miw.pfm.models.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonProperty;

import upm.miw.pfm.utils.Phases;
import upm.miw.pfm.utils.RoleType;

@Entity
@Table(name = "hours_role_phase")
@XmlRootElement
public class HoursRolePhase implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "employee_id", nullable = false)
	@Fetch (FetchMode.SELECT)
	private Employee employee;

	@ManyToOne
	@JoinColumn(name = "project_id", nullable = false)
	@Fetch (FetchMode.SELECT)
	private Project project;

	@Column(name = "work_hours", nullable = false)
	private Double workHours;

	@Column(name = "phase", nullable = false)
	@JsonProperty("Phases")
	private Phases phase;

	@Column(name = "role", nullable = false)
	private RoleType role;

	public HoursRolePhase() {
		super();
	}

	public HoursRolePhase(Employee employee, Project project, Double workHours,
			Phases phase, RoleType role) {
		super();
		this.employee = employee;
		this.project = project;
		this.workHours = workHours;
		this.phase = phase;
		this.role = role;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Double getWorkHours() {
		return workHours;
	}

	public void setWorkHours(Double workHours) {
		this.workHours = workHours;
	}

	public Phases getPhase() {
		return phase;
	}

	
	public void setPhase(Phases phase) {
		this.phase = phase;
	}

	
	public RoleType getRole() {
		return role;
	}

	public void setRole(RoleType role) {
		this.role = role;
	}

	@Override
	public boolean equals(Object obj) {
		HoursRolePhase hoursRolePhase = (HoursRolePhase) obj;
		return this.employee.equals(hoursRolePhase.getEmployee())
				&& this.phase.equals(hoursRolePhase.getPhase())
				&& this.project.equals(hoursRolePhase.getProject())
				&& this.role.equals(hoursRolePhase.getRole())
				&& Math.abs(this.workHours.doubleValue()
						- hoursRolePhase.getWorkHours().doubleValue()) < 0.0001f;
	}

	@Override
	public String toString() {
		return "[Employee= " + this.employee + ", Project= "
				+ this.project + ", Work hours= " + this.workHours
				+ ", Phase= " + this.phase + ", Role= " + this.role + "]";
	}
}
