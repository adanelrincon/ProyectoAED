import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {
  menuList: string = 'push';

  equipos: any = [];

  constructor(private equipoService: EquipoService, private router: Router) { }

  ngOnInit() {
    this.getAllEquipos();
  }

  getAllEquipos() {
    this.equipoService.getEquipos().subscribe(response => {
      this.equipos = response;
    });
  }

  deleteEquipo(id: number) {
    this.equipoService.deleteEquipo(id).subscribe(response => {
      this.getAllEquipos();
    });
  }

  goToUpdateEquipo(equipo: any) {
    this.router.navigate(['/equipo-update', equipo.id]);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAddEquipo() {
    this.router.navigate(['/equipo-add']);
  }
}
