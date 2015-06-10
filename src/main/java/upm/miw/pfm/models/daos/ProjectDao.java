package upm.miw.pfm.models.daos;

import java.util.List;

import upm.miw.pfm.models.entities.Project;

public interface ProjectDao extends GenericDao<Project, Integer> {
	public List<Project> findAllWithoutPhases();
}

