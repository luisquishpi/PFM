package upm.miw.pfm.utils;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.*;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = CheckDateRangeValidator.class)
public @interface CheckDateRange {
    String message() default "Ya existe ese rango de fechas";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
