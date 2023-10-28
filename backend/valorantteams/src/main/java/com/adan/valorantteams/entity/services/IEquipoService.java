package com.adan.valorantteams.entity.services;

import java.util.List;

import com.adan.valorantteams.entity.models.Equipo;

public interface IEquipoService {
    public List<Equipo> getAll();
    public Equipo getOne(long id);
    public void add(Equipo equipo);
    public void modify(Equipo equipo, long id);
    public void delete(long id);
}
