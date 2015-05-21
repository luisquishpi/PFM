package upm.miw.pfm.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.faces.application.FacesMessage;
import javax.faces.application.FacesMessage.Severity;
import javax.faces.context.FacesContext;
import javax.validation.ConstraintViolation;

public class Utils {

    public static String DD_MM_YYYY_FORMAT = "dd/MM/yyyy";

    public static Date buildDate(int year, int month, int day) {
        return new Calendar.Builder().setDate(year, month, day).build().getTime();
    }

    public static Date now(String format) {
        return Utils.format(Calendar.getInstance().getTime(), format);
    }

    public static Date addDaysToNow(int days, String format) {
        Calendar now = Calendar.getInstance();
        now.add(Calendar.DAY_OF_MONTH, days);
        return Utils.format(now.getTime(), format);
    }

    public static Date format(Date date, String format) {
        return convertStringToDate(convertDateToString(date, format), format);
    }

    public static String convertDateToString(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    public static Date convertStringToDate(String date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        try {
            return sdf.parse(date);
        } catch (ParseException e) {
            return null;
        }
    }

    public static void addMessage(Severity severity, String summary, String detail) {
        FacesContext.getCurrentInstance().addMessage(null,
                new FacesMessage(severity, summary, detail));

    }
    
    public static <T> List<T> SetToList(Set<T> set){
        return new ArrayList<T>(set);
    }
    
    public static <T> Boolean errors(Set<ConstraintViolation<T>> errors){
        Boolean isValid = true;
        for(ConstraintViolation<T> error : errors){
            Utils.addMessage(FacesMessage.SEVERITY_ERROR, "Error", error.getMessage());
            isValid = false;
        }
        return isValid;
    }

}
