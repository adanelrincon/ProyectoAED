package com.adan.valorantteams.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.adan.valorantteams.entity.dao.ITorneoDao;
import com.adan.valorantteams.entity.models.Torneo;

@Service
public class TorneoServiceImpl implements ITorneoService {
    @Autowired
    private ITorneoDao torneoDao;

    @Override
    public List<Torneo> getAll() {
        return (List<Torneo>) torneoDao.findAll();
    }

    @Override
    public Torneo getOne(long id) {
        return torneoDao.findById(id).orElse(null);
    }

    @Override
    public void add(Torneo torneo) {
        torneoDao.save(torneo);
    }

    @Override
    public void modify(Torneo torneo, long id) {
        torneoDao.findById(id).ifPresent(existingTorneo -> {
            torneo.setId(id);
            torneoDao.save(torneo);
        });
    }

    @Override
    public void delete(long id) {
        torneoDao.deleteById(id);
    }
}
