package com.adan.valorantteams.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.adan.valorantteams.entity.dao.IEquipoDao;
import com.adan.valorantteams.entity.models.Equipo;

@Service
public class EquipoServiceImpl implements IEquipoService {
    @Autowired
    private IEquipoDao equipoDao;

    @Override
    public List<Equipo> getAll() {
        return (List<Equipo>) equipoDao.findAll();
    }

    @Override
    public Equipo getOne(long id) {
        return equipoDao.findById(id).orElse(null);
    }

    @Override
    public void add(Equipo equipo) {
        equipoDao.save(equipo);
    }

    @Override
    public void modify(Equipo equipo, long id) {
        equipoDao.findById(id).ifPresent(existingEquipo -> {
            equipo.setId(id);
            equipoDao.save(equipo);
        });
    }

    @Override
    public void delete(long id) {
        equipoDao.deleteById(id);
    }
}
