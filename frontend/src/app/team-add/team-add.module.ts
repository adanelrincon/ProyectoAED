import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TeamAddPageRoutingModule } from './team-add-routing.module';

import { TeamAddPage } from './team-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TeamAddPage]
})
export class TeamAddPageModule {}
