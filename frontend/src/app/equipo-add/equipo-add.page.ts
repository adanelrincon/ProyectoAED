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
  equipoToAdd: any;

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
      idTorneo: ['', [Validators.required]]
    });
  }

  addEquipo() {
    if (this.equipoForm.valid) {
      const nombreControl = this.equipoForm.get('nombre_equipo');
      const regionControl = this.equipoForm.get('region');
      const torneoActualControl = this.equipoForm.get('idTorneo');

      if (nombreControl && regionControl && torneoActualControl) {

        const torneo = torneoActualControl.value;
        const idTorneoComoNumero: number = parseInt(torneo, 10);

        this.torneoService.getOneTorneo(idTorneoComoNumero).subscribe((torneo: any) => {
          this.torneoDelEquipo = torneo;
        });

        this.equipoToAdd = {
          nombre_equipo: nombreControl.value,
          region: regionControl.value,
          idTorneo: torneoActualControl.value,
          torneo: this.torneoDelEquipo
        };
        this.equipoService.addEquipo(this.equipoToAdd).subscribe(() => {
          this.equipoForm.reset();
          this.goToEquipos();
        });
      }
    }
  }

  goToEquipos() {
    this.router.navigate(['/equipo']);
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
