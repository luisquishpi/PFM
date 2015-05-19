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
                String messageText = "Debe seleccionar un " + getFieldLabel(component);
                FacesMessage msg = new FacesMessage(messageText, messageText);
                msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                throw new ValidatorException(msg);
            }
        } catch (NumberFormatException ex) {
            String messageText = "Ha seleccionado un " + getFieldLabel(component) + " no válido";
            FacesMessage msg = new FacesMessage(messageText, messageText);
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }

    }

    protected String getFieldLabel(UIComponent uiComponent) {
        String fieldLabel = (String) uiComponent.getAttributes().get("fieldLabel");

        if (fieldLabel == null) {
            fieldLabel = "";
        }

        return fieldLabel;
    }

}
