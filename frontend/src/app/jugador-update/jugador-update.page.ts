import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../services/jugador.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jugador-update',
  templateUrl: './jugador-update.page.html',
  styleUrls: ['./jugador-update.page.scss'],
})
export class JugadorUpdatePage implements OnInit {

  jugadorUpdateForm: FormGroup;
  jugadorToUpdate: any;

  constructor(public fb: FormBuilder, 
    private jugadorService: JugadorService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.jugadorService.getOneJugador(id).subscribe((jugador: any) => {
        this.jugadorToUpdate = jugador;
        this.jugadorUpdateForm.setValue({
          nombre_jugador: jugador.nombre_jugador,
          rol: jugador.rol,
          nacionalidad: jugador.nacionalidad,
          idEquipo: jugador.idEquipo
        });
      });
    });

    this.jugadorUpdateForm = this.fb.group({
      nombre_jugador: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      idEquipo: ['', [Validators.required]]
    });
  }

  updateJugador() {
    if (this.jugadorUpdateForm.valid) {
      const { nombre_jugador, rol, nacionalidad, idEquipo, id } = this.jugadorToUpdate;
      const updatedJugador = {
        nombre_jugador: this.jugadorUpdateForm.value.nombre_jugador,
        rol: this.jugadorUpdateForm.value.rol,
        nacionalidad: this.jugadorUpdateForm.value.nacionalidad,
        idEquipo: this.jugadorUpdateForm.value.idEquipo
      };

      this.jugadorService.updateJugador(id, updatedJugador).subscribe(response => {
        this.jugadorToUpdate = null;
        this.goToJugadores();
      });
    }
  }

  goToJugadores() {
    window.location.href = "/jugador";
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}

