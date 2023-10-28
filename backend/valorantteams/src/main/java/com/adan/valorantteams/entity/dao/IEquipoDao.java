package com.adan.valorantteams.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.adan.valorantteams.entity.models.Equipo;

public interface IEquipoDao extends CrudRepository<Equipo, Long> {
}
