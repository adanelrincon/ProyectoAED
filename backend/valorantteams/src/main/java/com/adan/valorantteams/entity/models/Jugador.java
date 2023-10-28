package com.adan.valorantteams.entity.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "jugador")
public class Jugador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nombre_jugador;
    private String rol;
    private String nacionalidad;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "equipo")
    private Equipo equipo;
    
    
    public Jugador() {
    	
    }

	public Jugador(String nombre_jugador, String rol, String nacionalidad, Equipo equipo) {
		super();
		this.nombre_jugador = nombre_jugador;
		this.rol = rol;
		this.nacionalidad = nacionalidad;
		this.equipo = equipo;
	}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre_jugador() {
        return nombre_jugador;
    }

    public void setNombre_jugador(String nombre_jugador) {
        this.nombre_jugador = nombre_jugador;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
}
