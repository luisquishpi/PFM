package upm.miw.pfm.mocks;

import upm.miw.pfm.models.daos.hibernate.ProjectDaoHibernate;
import upm.miw.pfm.models.entities.Project;
import mockit.Mock;
import mockit.MockUp;

public class MockProjectDao extends MockUp<ProjectDaoHibernate> {
	
	private Project project;
	
	public MockProjectDao(Project project){
		this.project=project;
	}
	
	@Mock
	public Project read(Integer id){
		project.setId(id);
	    return project;
	}
}
