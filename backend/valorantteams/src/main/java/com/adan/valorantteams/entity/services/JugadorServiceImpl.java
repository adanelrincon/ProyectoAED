package com.adan.valorantteams.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.adan.valorantteams.entity.dao.IJugadorDao;
import com.adan.valorantteams.entity.models.Jugador;

@Service
public class JugadorServiceImpl implements IJugadorService {
    @Autowired
    private IJugadorDao jugadorDao;

    @Override
    public List<Jugador> getAll() {
        return (List<Jugador>) jugadorDao.findAll();
    }

    @Override
    public Jugador getOne(long id) {
        return jugadorDao.findById(id).orElse(null);
    }

    @Override
    public void add(Jugador jugador) {
        jugadorDao.save(jugador);
    }

    @Override
    public void modify(Jugador jugador, long id) {
        jugadorDao.findById(id).ifPresent(existingJugador -> {
            jugador.setId(id);
            jugadorDao.save(jugador);
        });
    }

    @Override
    public void delete(long id) {
        jugadorDao.deleteById(id);
    }
}
