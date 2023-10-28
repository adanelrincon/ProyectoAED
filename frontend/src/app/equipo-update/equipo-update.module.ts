import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoUpdatePageRoutingModule } from './equipo-update-routing.module';

import { EquipoUpdatePage } from './equipo-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EquipoUpdatePageRoutingModule
  ],
  declarations: [EquipoUpdatePage]
})
export class EquipoUpdatePageModule {}
