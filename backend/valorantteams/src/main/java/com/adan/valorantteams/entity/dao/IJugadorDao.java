package com.adan.valorantteams.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.adan.valorantteams.entity.models.Jugador;

public interface IJugadorDao extends CrudRepository<Jugador, Long> {
}
