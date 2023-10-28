package com.adan.valorantteams.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.adan.valorantteams.entity.models.Torneo;

public interface ITorneoDao extends CrudRepository<Torneo, Long> {
}
