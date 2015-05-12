package upm.miw.pfm.utils;

import java.util.List;

import javax.faces.component.UIComponent;
import javax.faces.component.UISelectItem;
import javax.faces.component.UISelectItems;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;

import upm.miw.pfm.models.entities.IGenericEntity;

@SuppressWarnings("unchecked")
public class GenericConverter implements Converter {

    @Override
    public Object getAsObject(FacesContext context, UIComponent component, String value) {
        IGenericEntity ret = null;
        UIComponent src = component;
        if (src != null) {
            List<UIComponent> childs = src.getChildren();
            UISelectItems itens = null;
            if (childs != null) {
                for (UIComponent ui : childs) {
                    if (ui instanceof UISelectItems) {
                        itens = (UISelectItems) ui;
                        break;
                    } else if (ui instanceof UISelectItem) {
                        UISelectItem item = (UISelectItem) ui;
                        try {
                            IGenericEntity val = (IGenericEntity) item.getItemValue();
                            if (value.equals("" + val.getId())) {
                                ret = val;
                                break;
                            }
                        } catch (Exception e) {
                        }
                    }
                }
            }

            if (itens != null) {
                List<IGenericEntity> values = (List<IGenericEntity>) itens.getValue();
                if (values != null) {
                    for (IGenericEntity val : values) {
                        if (value.equals("" + val.getId())) {
                            ret = val;
                            break;
                        }
                    }
                }
            }
        }
        return ret;
    }

    @Override
    public String getAsString(FacesContext context, UIComponent component, Object value) {
        String ret = "";
        if (value != null && value instanceof IGenericEntity) {
            IGenericEntity m = (IGenericEntity) value;
            if (m != null) {
                Integer id = m.getId();
                if (id != null) {
                    ret = id.toString();
                }
            }
        }
        return ret;
    }
}