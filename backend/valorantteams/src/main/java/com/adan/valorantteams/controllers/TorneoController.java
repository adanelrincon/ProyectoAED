package com.adan.valorantteams.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.adan.valorantteams.entity.models.Torneo;
import com.adan.valorantteams.entity.services.ITorneoService;

@CrossOrigin(origins = "*")
@RestController
public class TorneoController {
    @Autowired
    private ITorneoService torneoService;

    @GetMapping("/torneo")
    public List<Torneo> getAll() {
        return torneoService.getAll();
    }

    @GetMapping("/torneo/{id}")
    public Torneo getOne(@PathVariable(value = "id") long id) {
        return torneoService.getOne(id);
    }

    @PostMapping("/torneo")
    public void addTorneo(@RequestBody Torneo torneo) {
        torneoService.add(torneo);
    }

    @PutMapping("/torneo/{id}")
    public void modifyTorneo(@RequestBody Torneo torneo, @PathVariable(value = "id") long id) {
        torneoService.modify(torneo, id);
    }

    @DeleteMapping("/torneo/{id}")
    public void deleteTorneo(@PathVariable(value = "id") long id) {
        torneoService.delete(id);
    }
}
