package com.adan.valorantteams.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.adan.valorantteams.entity.models.Jugador;
import com.adan.valorantteams.entity.services.IJugadorService;

@CrossOrigin(origins = "*")
@RestController
public class JugadorController {
    @Autowired
    private IJugadorService jugadorService;

    @GetMapping("/jugador")
    public List<Jugador> getAll() {
        return jugadorService.getAll();
    }

    @GetMapping("/jugador/{id}")
    public Jugador getOne(@PathVariable(value = "id") long id) {
        return jugadorService.getOne(id);
    }

    @PostMapping("/jugador")
    public void addJugador(@RequestBody Jugador jugador) {
        jugadorService.add(jugador);
    }

    @PutMapping("/jugador/{id}")
    public void modifyJugador(@RequestBody Jugador jugador, @PathVariable(value = "id") long id) {
        jugadorService.modify(jugador, id);
    }

    @DeleteMapping("/jugador/{id}")
    public void deleteJugador(@PathVariable(value = "id") long id) {
        jugadorService.delete(id);
    }
}
