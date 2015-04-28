package upm.miw.pfm.models.entities;

import java.util.List;

import upm.miw.pfm.utils.RoleType;

public class Employee {

    private Integer id;

    private String nombre;

    private String apellidos;

    private String codigoEmpleado;

    private Double brutoAnual;

    private Contract contrato;

    private List<RoleType> roles;

    public Employee(int id, String nombre, String apellidos, String codigoEmpleado,
            double brutoAnual, Contract contrato, List<RoleType> roles) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.codigoEmpleado = codigoEmpleado;
        this.brutoAnual = brutoAnual;
        this.contrato = contrato;
        this.roles = roles;
    }

    public Employee(String nombre, String apellidos, String codigoEmpleado, Double brutoAnual,
            Contract contrato, List<RoleType> roles) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.codigoEmpleado = codigoEmpleado;
        this.brutoAnual = brutoAnual;
        this.contrato = contrato;
        this.roles = roles;
    }

    public Employee() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCodigoEmpleado() {
        return codigoEmpleado;
    }

    public void setCodigoEmpleado(String codigoEmpleado) {
        this.codigoEmpleado = codigoEmpleado;
    }

    public Double getBrutoAnual() {
        return brutoAnual;
    }

    public void setBrutoAnual(Double brutoAnual) {
        this.brutoAnual = brutoAnual;
    }

    public Contract getContrato() {
        return contrato;
    }

    public void setContrato(Contract contrato) {
        this.contrato = contrato;
    }

    public List<RoleType> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleType> roles) {
        this.roles = roles;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
        result = prime * result + ((apellidos == null) ? 0 : apellidos.hashCode());
        result = prime * result + ((codigoEmpleado == null) ? 0 : codigoEmpleado.hashCode());
        result = prime * result + ((brutoAnual == null) ? 0 : brutoAnual.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        assert obj != null;
        Employee other = (Employee) obj;
        return id == other.id && codigoEmpleado.equals(other.codigoEmpleado);
    }
}
