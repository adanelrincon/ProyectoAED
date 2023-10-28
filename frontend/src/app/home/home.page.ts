import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuType: string = 'push';

  constructor(private router: Router) {}

  goToTeams() {
    window.location.href = '/team';
  }

  goToAddTeams() {
    window.location.href = '/team-add';
  }
}
