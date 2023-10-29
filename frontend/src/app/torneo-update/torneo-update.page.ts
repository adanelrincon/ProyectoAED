import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TorneoService } from '../services/torneo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-torneo-update',
  templateUrl: './torneo-update.page.html',
  styleUrls: ['./torneo-update.page.scss'],
})
export class TorneoUpdatePage implements OnInit {

  menuListUpdate: string = 'push';

  torneoUpdateForm: FormGroup;
  torneoToUpdate: any;

  constructor(public fb: FormBuilder, 
    private torneoService: TorneoService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.torneoService.getOneTorneo(id).subscribe((torneo: any) => {
        this.torneoToUpdate = torneo;
        this.torneoUpdateForm.setValue({
          nombre_torneo: torneo.nombre_torneo,
          localizacion: torneo.localizacion,
        });
      });
    });

    this.torneoUpdateForm = this.fb.group({
      nombre_torneo: ['', [Validators.required, Validators.minLength(3)]],
      localizacion: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  updateTorneo() {
    if (this.torneoUpdateForm.valid && this.torneoToUpdate) {
      const { nombre, localizacion, id } = this.torneoToUpdate;
      const updatedTorneo = {
        nombre_torneo: this.torneoUpdateForm.value.nombre_torneo,
        localizacion: this.torneoUpdateForm.value.localizacion,
      };

      this.torneoService.updateTorneo(id, updatedTorneo).subscribe(response => {
        this.torneoToUpdate = null;
        this.goToTorneo();
      });
    }
  }

  goToHome() {
    window.location.href = "/home";
  }

  goToTorneo() {
    window.location.href = "/torneo";
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
