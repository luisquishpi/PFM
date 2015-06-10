package upm.miw.pfm.models.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MapKeyColumn;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import upm.miw.pfm.utils.Phases;
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

	@Column(name = "iteration_days", nullable = true)
	private Integer iterationDays;

	@ElementCollection(fetch = FetchType.EAGER)
	@MapKeyColumn(name = "phase")
	@CollectionTable(name = "phases_people", joinColumns = @javax.persistence.JoinColumn(name = "project_id"))
	@Column(name = "hours")
	@Fetch (FetchMode.SELECT)
	private Map<Phases, Double> phasesPeople;

	@Transient
	private final float DELTA = 0.0001f;

	public Project() {
		phasesPeople = new HashMap<Phases, Double>();
		phasesPeople.put(Phases.INICIO, 0D);
		phasesPeople.put(Phases.ELABORACION, 0D);
		phasesPeople.put(Phases.CONSTRUCCION, 0D);
		phasesPeople.put(Phases.TRANSICION, 0D);
	}

	public Project(String name, Date start, Date end, Double cost) {
		this();
		this.start = start;
		this.end = end;
		this.cost = cost;
		this.name = name;
		phasesPeople = new HashMap<Phases, Double>();
		phasesPeople.put(Phases.INICIO, 0D);
		phasesPeople.put(Phases.ELABORACION, 0D);
		phasesPeople.put(Phases.CONSTRUCCION, 0D);
		phasesPeople.put(Phases.TRANSICION, 0D);
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
		this.start = Utils.convertStringToDate(startString,
				Utils.DD_MM_YYYY_FORMAT);
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
		this.end = Utils
				.convertStringToDate(endString, Utils.DD_MM_YYYY_FORMAT);
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

	public Integer getIterationDays() {
		return iterationDays;
	}

	public void setIterationDays(Integer iterationDays) {
		this.iterationDays = iterationDays;
	}

	public Double getPeopleInicio() {
		return this.phasesPeople.get(Phases.INICIO);
	}

	public Double getPeopleElaboracion() {
		return this.phasesPeople.get(Phases.ELABORACION);
	}

	public Double getPeopleConstruccion() {
		return this.phasesPeople.get(Phases.CONSTRUCCION);
	}

	public Double getPeopleTransicion() {
		return this.phasesPeople.get(Phases.TRANSICION);
	}

	public void setPeopleInicio(Double days) {
		this.phasesPeople.put(Phases.INICIO, days);
	}

	public void setPeopleElaboracion(Double days) {
		this.phasesPeople.put(Phases.ELABORACION, days);
	}

	public void setPeopleConstruccion(Double days) {
		this.phasesPeople.put(Phases.CONSTRUCCION, days);
	}

	public void setPeopleTransicion(Double days) {
		this.phasesPeople.put(Phases.TRANSICION, days);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cost == null) ? 0 : cost.hashCode());
		result = prime * result + ((end == null) ? 0 : end.hashCode());
		result = prime * result + ((start == null) ? 0 : start.hashCode());
		result = prime * result
				+ ((iterationDays == null) ? 0 : iterationDays.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		assert obj != null;
		Project other = (Project) obj;
		return id == other.id
				&& start.compareTo(other.start) == 0
				&& end.compareTo(other.end) == 0
				&& cost.equals(other.cost)
				&& name.equals(other.name)
				&& (iterationDays == null || iterationDays.intValue() == other.iterationDays
						.intValue())
				&& Math.abs(this.getPeopleInicio().doubleValue()
						- other.getPeopleInicio().doubleValue()) < DELTA
				&& Math.abs(this.getPeopleElaboracion().doubleValue()
						- other.getPeopleElaboracion().doubleValue()) < DELTA
				&& Math.abs(this.getPeopleConstruccion().doubleValue()
						- other.getPeopleConstruccion().doubleValue()) < DELTA
				&& Math.abs(this.getPeopleTransicion().doubleValue()
						- other.getPeopleTransicion().doubleValue()) < DELTA;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", start=" + start + ", end=" + end
				+ ", cost=" + cost + ", name=" + name + ", iterationDays="
				+ iterationDays + ", People initial phase= "
				+ this.getPeopleInicio() + ", People elaboration phase= "
				+ this.getPeopleElaboracion() + ", People construction phase="
				+ this.getPeopleConstruccion() + ", People transition phase= "
				+ this.getPeopleTransicion() + "]";
	}

}
