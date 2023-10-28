import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.page.html',
  styleUrls: ['./team-add.page.scss'],
})
export class TeamAddPage implements OnInit {

  menuType: string = 'push';

  teamForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private teamService: TeamService,
    private router: Router) {
    
  }

  ngOnInit() {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      region: ['', [Validators.required, Validators.minLength(3)]],
      position: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  addTeam() {
    if (this.teamForm.valid) {
      const nameControl = this.teamForm.get('name');
      const regionControl = this.teamForm.get('region');
      const positionControl = this.teamForm.get('position');
  
      if (nameControl && regionControl && positionControl) {
        const name = nameControl.value;
        const region = regionControl.value;
        const position = positionControl.value;
  
        this.teamService.add({ name, region, position }).subscribe(response => {
          this.teamForm.reset();
          this.goToHome();
        });
      }
    }
  }

  goToHome() {
    window.location.href = "/home";
  }

  goToTeams() {
    window.location.href = '/team';
  }
}
