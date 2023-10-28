package com.adan.valorantteams.entity.services;

import java.util.List;

import com.adan.valorantteams.entity.models.Jugador;

public interface IJugadorService {
    public List<Jugador> getAll();
    public Jugador getOne(long id);
    public void add(Jugador jugador);
    public void modify(Jugador jugador, long id);
    public void delete(long id);
}
