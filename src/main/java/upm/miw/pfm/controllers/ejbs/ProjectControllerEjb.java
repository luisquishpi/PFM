package upm.miw.pfm.controllers.ejbs;

import java.util.List;

import javax.ejb.Stateless;

import org.hibernate.cfg.NotYetImplementedException;

import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;

@Stateless
public class ProjectControllerEjb implements ProjectController {

    @Override
    public Project getProject(Integer id) {
        return DaoFactory.getFactory().getProjectDao().read(id);
    }

    @Override
    public void createProject(Project project) {
        DaoFactory.getFactory().getProjectDao().create(project);
    }

    @Override
    public ProjectSchedule getProjectScheduleByProject(Project project) {
        return DaoFactory.getFactory().getProjectScheduleDao().findByProject(project);
    }

    @Override
    public List<Project> listProjects() {
        return DaoFactory.getFactory().getProjectDao().findAll();
    }

    @Override
    public void updateProject(Project project) {
        DaoFactory.getFactory().getProjectDao().update(project);
    }

    @Override
    public void assignEmployees(List<Employee> list) {
        throw new NotYetImplementedException();
    }

}
