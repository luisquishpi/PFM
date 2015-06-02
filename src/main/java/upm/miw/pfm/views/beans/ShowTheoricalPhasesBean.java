package upm.miw.pfm.views.beans;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;
import org.apache.logging.log4j.LogManager;
import upm.miw.pfm.controllers.EmployeeController;
import upm.miw.pfm.controllers.ProjectController;
import upm.miw.pfm.controllers.SetScheduleController;
import upm.miw.pfm.models.entities.Employee;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.models.entities.ProjectSchedule;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class ShowTheoricalPhasesBean {

    private Project project;

    private ProjectSchedule projectSchedule;

    private List<Project> projectList;

    private List<Employee> employeeList;

    private List<Double> annualGrossSalaryList;

    private List<Double> insuranceList;

    private boolean emptyProject;

    private final static Class<ListProjectsBean> clazz = ListProjectsBean.class;

    @EJB
    private ProjectController projectController;

    @EJB
    private EmployeeController employeeController;

    @EJB
    private SetScheduleController setScheduleController;

    public ShowTheoricalPhasesBean() {
        this.project = new Project();
        this.projectSchedule = new ProjectSchedule();
        this.project.setId(-1);
        this.project.setCost(0.00);
        this.project.setStart(Utils.now(Utils.DD_MM_YYYY_FORMAT));
        this.project.setEnd(Utils.now(Utils.DD_MM_YYYY_FORMAT));
        this.project.setIterationDays(0.00);
        this.emptyProject = true;
        this.annualGrossSalaryList = new ArrayList<Double>();
        this.insuranceList = new ArrayList<Double>();
    }

    @PostConstruct
    public void init() {
        projectList = projectController.listProjects();
        LogManager.getLogger(clazz).info("Se encontraron " + projectList.size() + " proyectos");

        employeeList = employeeController.listEmployees();
        LogManager.getLogger(clazz).info("Se encontraron " + employeeList.size() + " empleados");

        fillSalaryList();
    }

    private void fillSalaryList() {
        for (Employee employee : employeeList) {
            this.annualGrossSalaryList.add(employee.getAnnualGrossSalary());
            this.insuranceList.add(employee.getContract().getInsurance());
        }
        LogManager.getLogger(clazz).debug(
                "# elementos salario " + annualGrossSalaryList.size() + " # elementos contratos "
                        + this.insuranceList.size());

        assert this.annualGrossSalaryList.size() == this.employeeList.size() : " lista de salarios y de contratos no tienen el mismo tamaño";
    }

    public Project getProject() {
        return project;
    }

    public ProjectSchedule getProjectSchedule() {
        return projectSchedule;
    }

    public List<Project> getProjectList() {
        return projectList;
    }

    public List<Double> getAnnualGrossSalaryList() {
        return annualGrossSalaryList;
    }

    public List<Double> getInsuranceList() {
        return insuranceList;
    }

    public void onChangeProject(ValueChangeEvent e) {
        Integer selectedProject = (Integer) e.getNewValue();
        LogManager.getLogger(clazz).debug("Id de proyecto seleccionado " + selectedProject);
        if (selectedProject != -1) {
            this.project.setId(selectedProject);
            this.project = findSelectedProject();
            this.projectSchedule = setScheduleController.getProjectSchedule(project.getId());
            LogManager.getLogger(clazz).debug("Proyecto cargado " + this.project);
            LogManager.getLogger(clazz).info("Project schedule asociado " + this.projectSchedule);
            this.emptyProject = false;
            int iterationDays = (int) (this.project.getIterationDays() / 1);
            this.project.setIterationDays((double) iterationDays);
        } else {
            this.emptyProject = true;
        }
        FacesContext.getCurrentInstance().renderResponse();
    }

    public String process() {
        if (this.project.getId() != null && this.project.getId() != -1) {
            Project projectToUpdate = findSelectedProject();
            projectToUpdate.setIterationDays(this.project.getIterationDays());
            projectController.updateProject(projectToUpdate);
            LogManager.getLogger(clazz).debug("Proyecto a actualizar " + projectToUpdate);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Proyecto",
                    "Se actualizó las fases teóricas satisfactoriamente");
        }
        return "show_theorical_phases";
    }

    private Project findSelectedProject() {
        return projectController.getProject(this.project.getId());
    }

    public boolean isEmptyProject() {
        return emptyProject;
    }

}
