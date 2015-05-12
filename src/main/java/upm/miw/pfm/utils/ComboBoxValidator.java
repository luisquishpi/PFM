package upm.miw.pfm.utils;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("upm.miw.pfm.utils.ComboBoxValidator")
public class ComboBoxValidator implements Validator {

    @Override
    public void validate(FacesContext context, UIComponent component, Object value)
            throws ValidatorException {
        try {
            if (new Integer(value.toString()) == -1) {
                FacesMessage msg = new FacesMessage("Error de validación.",
                        "Debe seleccionar un elemento");
                msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                throw new ValidatorException(msg);
            }
        } catch (NumberFormatException ex) {
            FacesMessage msg = new FacesMessage("Error de validación.", "Elemento seleccionado no válido");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }

    }

}
