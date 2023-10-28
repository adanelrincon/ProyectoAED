package com.adan.valorantteams.entity.models;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="equipos")
public class Equipo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "nombre_equipo")
    private String nombre_equipo;
    @Column(name = "region")
    private String region;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "torneo")
    private Torneo torneo;
    
    @OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL)
    private List<Jugador> jugadores;
    
    public Equipo() {
    	
    }

	// Getters y Setters

    public Equipo(String nombre_equipo, String region, Torneo torneo, List<Jugador> jugadores) {
		super();
		this.nombre_equipo = nombre_equipo;
		this.region = region;
		this.torneo = torneo;
		this.jugadores = jugadores;
	}

	public long getId() {
        return id;
    }

    public void setId(long equipo_id) {
        this.id = equipo_id;
    }

    public String getNombre_equipo() {
        return nombre_equipo;
    }

    public void setNombre_equipo(String nombre_equipo) {
        this.nombre_equipo = nombre_equipo;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }
}
