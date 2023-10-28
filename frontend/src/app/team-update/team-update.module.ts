import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamUpdatePageRoutingModule } from './team-update-routing.module';

import { TeamUpdatePage } from './team-update.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TeamUpdatePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TeamUpdatePage]
})
export class TeamUpdatePageModule {}
