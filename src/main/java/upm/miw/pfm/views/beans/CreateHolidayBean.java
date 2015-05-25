package upm.miw.pfm.views.beans;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

@ManagedBean
@ViewScoped
public class CreateHolidayBean implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final Class<CreateHolidayBean> clazz = CreateHolidayBean.class;

    @EJB
    private HolidayController holidayController;

    private String range;
    
    private List<Holiday> registerHolidays;
    
    private Holiday selectedHoliday;

    public String process() {
        Date start = Utils.convertStringToDate(range.split("-")[0].trim(), "dd/MM/yyyy");
        Date end = Utils.convertStringToDate(range.split("-")[1].trim(), "dd/MM/yyyy");
        Holiday holiday = new Holiday(start, end);

        if (Utils.errors(holidayController.validate(holiday))) {
            holidayController.createHoliday(holiday);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Feriados", "Los feriados han sido registrados.");
        }
        update();
        return null;
    }

    @PostConstruct
    public void update() {
    	this.registerHolidays = holidayController.holidayList();
    }
    
    public String delete(){
    	holidayController.deleteHoliday(selectedHoliday.getId());
    	Utils.addMessage(FacesMessage.SEVERITY_INFO, "Feriados", "El rango seleccionado ha sido eliminado.");
    	this.update();
    	return null;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

	public List<Holiday> getRegisterHolidays() {
		return registerHolidays;
	}

	public Holiday getSelectedHoliday() {
		return selectedHoliday;
	}

	public void setSelectedHoliday(Holiday selectedHoliday) {
		this.selectedHoliday = selectedHoliday;		
	}
	
	
}
