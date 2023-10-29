package com.adan.valorantteams.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.adan.valorantteams.entity.models.Equipo;
import com.adan.valorantteams.entity.models.Torneo;
import com.adan.valorantteams.entity.services.IEquipoService;
import com.adan.valorantteams.entity.services.ITorneoService;

@CrossOrigin(origins = "*")
@RestController
public class EquipoController {
    @Autowired
    private IEquipoService equipoService;

    @GetMapping("/equipos")
    public List<Equipo> getAll() {
        return equipoService.getAll();
    }

    @GetMapping("/equipos/{id}")
    public Equipo getOne(@PathVariable(value = "id") long id) {
        return equipoService.getOne(id);
    }

    @PostMapping("/equipos")
    public void addEquipo(@RequestBody Equipo equipo) {
       equipoService.add(equipo);
    }

    @PutMapping("/equipos/{id}")
    public void modifyEquipo(@RequestBody Equipo equipo, @PathVariable(value = "id") long id) {
        equipoService.modify(equipo, id);
    }

    @DeleteMapping("/equipos/{id}")
    public void deleteEquipo(@PathVariable(value = "id") long id) {
        equipoService.delete(id);
    }
}
