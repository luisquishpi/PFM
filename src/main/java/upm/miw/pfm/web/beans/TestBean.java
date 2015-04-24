package upm.miw.pfm.web.beans;

import java.io.Serializable;

import javax.faces.bean.ManagedBean;

@ManagedBean
public class TestBean implements Serializable {		
	private static final long serialVersionUID = 1L;
		private Integer laborDay=100;

		public Integer getLaborDay() {
			return laborDay;
		}

		public void setLaborDay(Integer laborDay) {
			this.laborDay = laborDay;
		}
}
