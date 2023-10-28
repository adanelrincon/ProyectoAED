import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../services/team.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.page.html',
  styleUrls: ['./team-update.page.scss'],
})
export class TeamUpdatePage implements OnInit {

  menuListUpdate: string = 'push';

  teamUpdateForm: FormGroup;
  teamToUpdate: any;
  

  constructor(public fb: FormBuilder, 
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.teamService.getOneTeam(id).subscribe((team: any) => {
        this.teamToUpdate = team;
        this.teamUpdateForm.setValue({
          name: team.name,
          region: team.region,
          position: team.position
        })
      })
    });

    this.teamUpdateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      region: ['', [Validators.required, Validators.minLength(3)]],
      position: ['', [Validators.required, Validators.minLength(1)]]
    });

  }

  updateTeam() {
    if (this.teamUpdateForm.valid && this.teamToUpdate) {
      const { name, region, position, id } = this.teamToUpdate;
      const updatedTeam = {
        name: this.teamUpdateForm.value.name, 
        region: this.teamUpdateForm.value.region, 
        position: this.teamUpdateForm. value.position
      };

      this.teamService.update(id, updatedTeam).subscribe(response => {
        this.teamToUpdate = null;
        this.goToTeams();
      });
    }
  }

  goToHome() {
    window.location.href = "/home";
  }

  goToTeams() {
    window.location.href = "/team";
  }
}
