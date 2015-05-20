package upm.miw.pfm.models.daos;

import java.util.Date;
import upm.miw.pfm.models.entities.Holiday;

public interface HolidayDao extends GenericDao<Holiday, Integer>{
	
	Boolean exists(Date start, Date end);
	
}
