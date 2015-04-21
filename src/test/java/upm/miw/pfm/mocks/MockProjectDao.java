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
	
	public MockProjectDao(){
    }
	
	@Mock
	public Project read(Integer id){
		project.setId(id);
	    return project;
	}
	
	@Mock
    public void update(Project project){
	    if(project.getProjectSchedule() != null){
            project.getProjectSchedule().setProject(project);
        }
        this.project = project;
    }
}
