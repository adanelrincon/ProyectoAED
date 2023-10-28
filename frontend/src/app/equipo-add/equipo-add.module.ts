import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoAddPageRoutingModule } from './equipo-add-routing.module';

import { EquipoAddPage } from './equipo-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EquipoAddPageRoutingModule
  ],
  declarations: [EquipoAddPage]
})
export class EquipoAddPageModule {}
