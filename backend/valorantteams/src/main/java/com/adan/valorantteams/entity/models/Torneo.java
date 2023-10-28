package com.adan.valorantteams.entity.models;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name="torneo")
public class Torneo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name="nombre_torneo")
    private String nombre_torneo;
    @Column(name="localizacion")
    private String localizacion;
    
    @OneToMany(mappedBy = "torneo" ,cascade = CascadeType.ALL)
    private List<Equipo> equipos;
    
    public Torneo () {
    	
    }

	public Torneo(String nombre_torneo, String localizacion, List<Equipo> equipos) {
		super();
		this.nombre_torneo = nombre_torneo;
		this.localizacion = localizacion;
		this.equipos = equipos;
	}

	// Getters y Setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre_torneo() {
        return nombre_torneo;
    }

    public void setNombre_torneo(String nombre_torneo) {
        this.nombre_torneo = nombre_torneo;
    }

    public String getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }
    
}
