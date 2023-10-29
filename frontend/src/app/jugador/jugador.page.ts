import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../services/jugador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.page.html',
  styleUrls: ['./jugador.page.scss'],
})
export class JugadorPage implements OnInit {
  jugadores: any = [];

  constructor(private jugadorService: JugadorService, private router: Router) { }

  ngOnInit() {
    this.getAllJugadores();
  }

  getAllJugadores() {
    this.jugadorService.getJugadores().subscribe(response => {
      this.jugadores = response;
    });
  }

  deleteJugador(id: number) {
    this.jugadorService.deleteJugador(id).subscribe(response => {
      this.getAllJugadores();
    });
  }

  goToUpdateJugador(jugador: any) {
    this.router.navigate(['/jugador-update', jugador.id]);
  }

  goToAddJugador() {
    this.router.navigate(['/jugador-add']);
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}

