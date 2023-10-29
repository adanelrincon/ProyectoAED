import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TorneoService } from '../services/torneo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneo-add',
  templateUrl: './torneo-add.page.html',
  styleUrls: ['./torneo-add.page.scss'],
})
export class TorneoAddPage implements OnInit {

  menuType: string = 'push';

  torneoForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private torneoService: TorneoService,
    private router: Router) {
    
  }

  ngOnInit() {
    this.torneoForm = this.fb.group({
      nombre_torneo: ['', [Validators.required]],
      localizacion: ['', [Validators.required]]
    });
  }

  addTorneo() {
    if (this.torneoForm.valid) {
      const nombreControl = this.torneoForm.get('nombre_torneo');
      const localizacionControl = this.torneoForm.get('localizacion');
  
      if (nombreControl && localizacionControl) {
        const nombre_torneo = nombreControl.value;
        const localizacion = localizacionControl.value;

        this.torneoService.addTorneo({ nombre_torneo, localizacion }).subscribe(response => {
          this.torneoForm.reset();
          this.goToTorneo();
        });
      }
    }
  }

  goToTorneo() {
    this.router.navigate(['/torneo']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
