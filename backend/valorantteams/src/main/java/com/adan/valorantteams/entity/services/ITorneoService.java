package com.adan.valorantteams.entity.services;

import com.adan.valorantteams.entity.models.Torneo;

import java.util.List;

public interface ITorneoService {
    public List<Torneo> getAll();
    public Torneo getOne(long id);
    public void add(Torneo torneo);
    public void modify(Torneo torneo, long id);
    public void delete(long id);
}
