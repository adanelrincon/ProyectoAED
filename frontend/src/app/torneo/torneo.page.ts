import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../services/torneo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.page.html',
  styleUrls: ['./torneo.page.scss'],
})
export class TorneoPage implements OnInit {

  menuList: string = 'push';

  torneos: any = [];

  constructor(private torneoService: TorneoService, private router: Router) { }

  ngOnInit() {
    this.getAllTorneos();
  }

  getAllTorneos() {
    this.torneoService.getTorneos().subscribe(response => {
      this.torneos = response;
    });
  }

  deleteTorneo(id: number) {
    this.torneoService.deleteTorneo(id).subscribe(response => {
      this.getAllTorneos();
    });
  }

  goToUpdateTorneo(torneo: any) {
    this.router.navigate(['/torneo-update', torneo.id]);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAddTorneo() {
    this.router.navigate(['/torneo-add']);
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
