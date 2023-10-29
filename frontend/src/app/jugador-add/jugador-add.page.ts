import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-jugador-add',
  templateUrl: './jugador-add.page.html',
  styleUrls: ['./jugador-add.page.scss'],
})
export class JugadorAddPage implements OnInit {

  jugadorForm: FormGroup;
  jugador: any;

  constructor(public fb: FormBuilder, 
    private jugadorService: JugadorService,
    private router: Router) { }

  ngOnInit() {
    this.jugadorForm = this.fb.group({
      nombre_jugador: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      idEquipo: ['', [Validators.required]]
    });
  }

  addJugador() {
    if (this.jugadorForm.valid) {
      const nombreControl = this.jugadorForm.get('nombre_jugador');
      const rolControl = this.jugadorForm.get('rol');
      const nacionalidadControl = this.jugadorForm.get('nacionalidad');
      const idEquipoControl = this.jugadorForm.get('idEquipo');
  
      if (nombreControl && rolControl && nacionalidadControl && idEquipoControl) {
        this.jugador = {
          nombre_jugador: nombreControl.value,
          rol: rolControl.value,
          nacionalidad: nacionalidadControl.value,
          idEquipo: idEquipoControl.value
        }
        this.jugadorService.addJugador( this.jugador ).subscribe(response => {
          this.jugadorForm.reset();
          this.goToJugadores();
        });
      }
    }
  }

  goToJugadores() {
    window.location.href = '/jugador';
  }
  
  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }

}