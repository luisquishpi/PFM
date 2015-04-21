package upm.miw.pfm.models.entities;

import java.util.Date;

public class Project {
	
	private int id;
	private Date start;
	private Date end;
	private Double cost;
	private String name;
	
	
	public Project(String name, Date start, Date end, Double cost){
		this.start = start;
		this.end = end;
		this.cost = cost;
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
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Project other = (Project) obj;
		if (cost == null) {
			if (other.cost != null)
				return false;
		} else if (!cost.equals(other.cost))
			return false;
		if (end == null) {
			if (other.end != null)
				return false;
		} else if (!end.equals(other.end))
			return false;
		if (start == null) {
			if (other.start != null)
				return false;
		} else if (!start.equals(other.start))
			return false;
		return true;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getStart() {
		return this.start;
	}

	public Date getEnd() {
		return this.end;
	}

	public Double getCost() {
		return this.cost;
	}

	public int getId() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}
}
