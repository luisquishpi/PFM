package upm.miw.pfm.utils;

import java.math.BigDecimal;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("upm.miw.pfm.utils.GreaterThanZeroValidator")
public class GreaterThanZeroValidator implements Validator {

    @Override
    public void validate(FacesContext context, UIComponent component, Object value)
            throws ValidatorException {
        try {
            if (new BigDecimal(value.toString()).signum() < 1) {
                FacesMessage msg = new FacesMessage("Error de validación.",
                        "Número debe ser mayor a 0");
                msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                throw new ValidatorException(msg);
            }
        } catch (NumberFormatException | NullPointerException ex) {
            FacesMessage msg = new FacesMessage("Error de validación.",
                    "Valor ingresado no es un número");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }

    }

}
