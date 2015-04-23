package upm.miw.pfm.web.beans;

import javax.faces.bean.ManagedBean;

@ManagedBean
public class TestBean {		
	    private Integer intTest=100;

		public Integer getIntTest() {
			return intTest;
		}

		public void setIntTest(Integer intTest) {
			this.intTest = intTest;
		}
}
