package upm.miw.pfm.views.beans;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.event.ValueChangeEvent;

import org.apache.logging.log4j.LogManager;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.controllers.ejbs.HolidayControllerEjb;
import upm.miw.pfm.models.entities.Holiday;

@ManagedBean
@ViewScoped
public class ShowAssignedPhasesBean extends DisciplinesPhasesBean{
	
	private List<Holiday> holidays;
	
	private HolidayController holidayController;

	@Override
	public void init() {
		holidayController = new HolidayControllerEjb();
		holidays = holidayController.holidayList();
		LogManager.getLogger(clazz).info("Se encontraron " + holidays + " vacaciones");
		super.init();
	}

	public List<Holiday> getHolidays() {
		return holidays;
	}

	public void setHolidays(List<Holiday> holidays) {
		this.holidays = holidays;
	}

	@Override
	public void onChangeProject(ValueChangeEvent e) {
		super.onChangeProject(e);
	}
	
	

}
