import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  menuList: string = 'push';

  teams:  any = [];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.teamService.getTeams().subscribe(response => {
      this.teams = response;
    });
  }

  deleteTeam(id: number) {
    this.teamService.delete(id).subscribe(response => {
      this.getAllTeams();
    });
  }

  goToEdit(team: any) {
    this.router.navigate(['/team-update', team.id]);
  }

  goToHome() {
    window.location.href = '/home';
  }

  goToAddTeams() {
    window.location.href = '/team-add';
  }

}
