package upm.miw.pfm.utils;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.*;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target( { TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = CheckUniqueHolidayValidator.class)
public @interface CheckUniqueHoliday {

    String message() default "El periodo ya ha sido registrado.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
