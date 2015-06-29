package upm.miw.pfm.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.models.daos.DaoFactory;
//import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.RestElement;

@Path(EmployeeURI.PATH_EMPLOYEES)
public class EmployeeRest {

    private final static Class<EmployeeRest> clazz = EmployeeRest.class;

    @Path(EmployeeURI.PATH_SAVE)
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response save(final List<RestElement> data) {
        LogManager.getLogger(clazz).debug("Guardando data a traves de rest ");

        try {
            if (!data.isEmpty()) {
                RestElement rest = data.get(0);
                Project project = DaoFactory.getFactory().getProjectDao()
                        .read(rest.getHoursRolePhase().get(0).getProject().getId());
                
                addResourcesToProject(project, rest);
                DaoFactory.getFactory().getProjectDao().update(project);
                DaoFactory.getFactory().getHoursRolePhaseDao().deleteByProject(project);
                for (HoursRolePhase hours : rest.getHoursRolePhase()) {
                    DaoFactory.getFactory().getHoursRolePhaseDao().create(hours);
                }
                LogManager.getLogger(clazz).debug("Recursos de proyecto guardados: " + project);
                return Response.status(201).build();
            }
            LogManager.getLogger(clazz).debug("Data recibida esta vacia ");
            return Response.status(500).build();

        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(500).build();
        }
    }
    
    private void addResourcesToProject(Project project, RestElement restElement){
        project.setPeopleInicio(restElement.numberOfInitPhasePeople());
        project.setPeopleElaboracion(restElement.numberOfElaborationPhasePeople());
        project.setPeopleConstruccion(restElement.numberOfConstructionPhasePeople());
        project.setPeopleTransicion(restElement.numberOfTransitionPhasePeople());
    }

}
