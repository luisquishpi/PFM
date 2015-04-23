package upm.miw.pfm.models.daos.hibernate;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import upm.miw.pfm.models.daos.ProjectDao;
import upm.miw.pfm.models.entities.Project;

;

public class ProjectDaoHibernate extends GenericDaoHibernate<Project, Integer>
		implements ProjectDao {

	public ProjectDaoHibernate() {
		super(Project.class);
	}

	public static void main(String[] args) {
		ProjectDaoHibernate pHibernate = new ProjectDaoHibernate();
		Project project;
		Date start = new Date();
		Date end = new Date(); 
		try {
			start = new SimpleDateFormat("dd-MM-yyyy").parse("02-03-2015");
			end = new SimpleDateFormat("dd-MM-yyyy").parse("04-09-2015");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		project = new Project("Scrum", start, end, 85000.0);
		/* Add few employee records in database */
		pHibernate.create(project);
	}
}
