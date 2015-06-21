package upm.miw.pfm.views.beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import com.sun.faces.lifecycle.Phase;

@ManagedBean
@ViewScoped
public class RealDisciplinesBean {
    
    static final String INIT_PHASE = "INIT";
    static final String ELAB_PHASE = "ELAB";
    static final String CONST_PHASE = "CONST";
    static final String TRANS_PHASE = "TRANS";
    
    private Phase initPhase;
    private Phase elabPhase;
    private Phase transPhase;
    private Phase constPhase;
    
    public RealDisciplinesBean(){
    }

    public Phase getInitPhase() {
        return initPhase;
    }

    public Phase getElabPhase() {
        return elabPhase;
    }

    public Phase getTransPhase() {
        return transPhase;
    }

    public Phase getConstPhase() {
        return constPhase;
    }

    public void setInitPhase(Phase initPhase) {
        this.initPhase = initPhase;
    }

    public void setElabPhase(Phase elabPhase) {
        this.elabPhase = elabPhase;
    }

    public void setTransPhase(Phase transPhase) {
        this.transPhase = transPhase;
    }

    public void setConstPhase(Phase constPhase) {
        this.constPhase = constPhase;
    }
    
}
