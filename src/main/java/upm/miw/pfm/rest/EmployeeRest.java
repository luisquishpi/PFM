package upm.miw.pfm.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import upm.miw.pfm.models.daos.DaoFactory;
import upm.miw.pfm.models.entities.HoursRolePhase;

@Path(EmployeeURI.PATH_EMPLOYEES)
public class EmployeeRest {
	
	@Path(EmployeeURI.PATH_SAVE)
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response save(@QueryParam("list") List<HoursRolePhase> listHours){
		try{
			for(HoursRolePhase hours: listHours){
				DaoFactory.getFactory().getHoursRolePhaseDao().create(hours);
			}
			return Response.status(201).build();
		}catch(Exception e){
			return Response.status(500).build();
		}
		
	}

}
