import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo-update',
  templateUrl: './equipo-update.page.html',
  styleUrls: ['./equipo-update.page.scss'],
})
export class EquipoUpdatePage implements OnInit {

  equipoUpdateForm: FormGroup;
  equipoToUpdate: any;

  constructor(public fb: FormBuilder, 
    private equipoService: EquipoService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.equipoService.getEquipo(id).subscribe((equipo: any) => {
        this.equipoToUpdate = equipo;
        this.equipoUpdateForm.setValue({
          nombre_equipo: equipo.nombre_equipo,
          region: equipo.region,
          //torneo: equipo.torneo
        });
      });
    });

    this.equipoUpdateForm = this.fb.group({
      nombre_equipo: ['', [Validators.required]],
      region: ['', [Validators.required]],
      //torneo: ['', [Validators.required]]
    });
  }

  updateEquipo() {
    if (this.equipoUpdateForm.valid && this.equipoToUpdate) {
      const { nombre_equipo, region, torneo, id } = this.equipoToUpdate;
      const updatedequipo = {
        nombre_equipo: this.equipoUpdateForm.value.nombre_equipo,
        region: this.equipoUpdateForm.value.region,
        //torneo: this.equipoUpdateForm.value.torneo
      };

      this.equipoService.updateEquipo(id, updatedequipo).subscribe(response => {
        this.equipoToUpdate = null;
        this.goToEquipos();
      });
    }
  }

  goToHome() {
    window.location.href = "/home";
  }

  goToEquipos() {
    window.location.href = "/equipo";
  }
}

