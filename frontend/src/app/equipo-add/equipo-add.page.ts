import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../services/equipo.service';
import { Router } from '@angular/router';
import { TorneoService } from '../services/torneo.service';

@Component({
  selector: 'app-equipo-add',
  templateUrl: './equipo-add.page.html',
  styleUrls: ['./equipo-add.page.scss'],
})
export class EquipoAddPage implements OnInit {
  equipoForm: FormGroup;
  torneoDelEquipo: any;
  id: number;

  constructor(
    public fb: FormBuilder,
    private equipoService: EquipoService,
    private torneoService: TorneoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.equipoForm = this.fb.group({
      nombre_equipo: ['', [Validators.required]],
      region: ['', [Validators.required]],
      torneo: ['', [Validators.required]]
    });
  }

  addEquipo() {
    if (this.equipoForm.valid) {
      const nombreControl = this.equipoForm.get('nombre_equipo');
      const regionControl = this.equipoForm.get('region');
      const torneoActualControl = this.equipoForm.get('torneo');
      
      if (nombreControl && regionControl && torneoActualControl) {
        const nombre_equipo = nombreControl.value;
        const region = regionControl.value;
        const torneo = torneoActualControl.value;

        this.equipoService.addEquipo({ nombre_equipo, region, torneo }).subscribe(() => {
            this.equipoForm.reset();
            this.goToEquipos();
        });
      }
    }
  }

  goToEquipos() {
    this.router.navigate(['/equipo']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
