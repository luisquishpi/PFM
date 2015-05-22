package upm.miw.pfm.views.beans;

import java.io.Serializable;
import java.util.Date;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;

import upm.miw.pfm.controllers.HolidayController;
import upm.miw.pfm.models.entities.Holiday;
import upm.miw.pfm.utils.Utils;

@ManagedBean
public class CreateHolidayBean implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final Class<CreateHolidayBean> clazz = CreateHolidayBean.class;

    @EJB
    private HolidayController holidayController;

    private String range;

    public String process() {
        Date start = Utils.convertStringToDate(range.split("-")[0].trim(), "dd/MM/yyyy");
        Date end = Utils.convertStringToDate(range.split("-")[1].trim(), "dd/MM/yyyy");
        Holiday holiday = new Holiday(start, end);

        if (Utils.errors(holidayController.validate(holiday))) {
            holidayController.createHoliday(holiday);
            Utils.addMessage(FacesMessage.SEVERITY_INFO, "Feriados", "Los feriados han sido registrados.");
        }
        updateDetails();
        return null;
    }

    public void updateDetails() {

    }

    @PostConstruct
    public void update() {

    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }
}
