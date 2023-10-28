import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadorAddPageRoutingModule } from './jugador-add-routing.module';

import { JugadorAddPage } from './jugador-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JugadorAddPageRoutingModule
  ],
  declarations: [JugadorAddPage]
})
export class JugadorAddPageModule {}
