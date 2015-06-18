package upm.miw.pfm.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;






import upm.miw.pfm.models.daos.DaoFactory;
//import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.HoursRolePhase;
import upm.miw.pfm.models.entities.Project;
import upm.miw.pfm.utils.RestElement;

@Path(EmployeeURI.PATH_EMPLOYEES)
public class EmployeeRest {
	
	@Path(EmployeeURI.PATH_SAVE)
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response save(final RestElement rest){
		try{
			for(HoursRolePhase hours: rest.getHoursRolePhase()){
				DaoFactory.getFactory().getHoursRolePhaseDao().deleteAll();
				DaoFactory.getFactory().getHoursRolePhaseDao().create(hours);
			}
			Project project = rest.getHoursRolePhase().get(0).getProject();
			System.out.println(project);
			project.setPeopleInicio(rest.getPeoplePhase().get(0));
			project.setPeopleElaboracion(rest.getPeoplePhase().get(1));
			project.setPeopleConstruccion(rest.getPeoplePhase().get(2));
			project.setPeopleTransicion(rest.getPeoplePhase().get(3));
			
			DaoFactory.getFactory().getProjectDao().update(project);
			
			return Response.status(201).build();
		}catch(Exception e){
			return Response.status(500).build();
		}
	}
	
}

