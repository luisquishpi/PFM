package upm.miw.pfm.utils;

import java.util.Calendar;
import java.util.Date;

public class Utils {
    
    public static Date buildDate(int year, int month, int day){
        return new Calendar.Builder()
        .setDate(year, month, day)
        .build().getTime();
    }

}
