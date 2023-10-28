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
  jugador = {
    nombre_jugador: '',
    rol: '',
    nacionalidad: '',
    equipo: 1,
  };

  constructor(public fb: FormBuilder, 
    private jugadorService: JugadorService,
    private router: Router) { }

  ngOnInit() {
    this.jugadorForm = this.fb.group({
      nombre_jugador: ['', [Validators.required, Validators.minLength(1)]],
      rol: ['', [Validators.required, Validators.minLength(1)]],
      nacionalidad: ['', [Validators.required, Validators.minLength(1)]],
      equipo: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  addJugador() {
    console.log('Añadiendo jugador...');
    if (this.jugadorForm.valid) {
      const nombreControl = this.jugadorForm.get('nombre_jugador');
      const rolControl = this.jugadorForm.get('rol');
      const nacionalidadControl = this.jugadorForm.get('nacionalidad');
      const equipoControl = this.jugadorForm.get('equipo');
  
      if (nombreControl && rolControl && nacionalidadControl && equipoControl) {
        const equipoValue = parseInt(equipoControl.value, 10); 
        this.jugador = {
          nombre_jugador: nombreControl.value,
          rol: rolControl.value,
          nacionalidad: nacionalidadControl.value,
          equipo: equipoValue
        }
        
        this.jugadorService.addJugador( this.jugador ).subscribe(response => {
          this.jugadorForm.reset();
          this.goToJugadores();
        });
      }
    }
  }

  goToHome() {
    window.location.href = "/home";
  }

  goToJugadores() {
    window.location.href = '/jugador';
  }

}


  
