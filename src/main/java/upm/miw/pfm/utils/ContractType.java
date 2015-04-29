package upm.miw.pfm.utils;

public enum ContractType {
    FIJO("Fijo"), BECARIO("Becario"), CONSULTOR("Consultor");
    private String label;

    private ContractType(String label) {
        this.setLabel(label);
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

}
