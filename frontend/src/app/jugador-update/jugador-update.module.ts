import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JugadorUpdatePageRoutingModule } from './jugador-update-routing.module';
import { JugadorUpdatePage } from './jugador-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JugadorUpdatePageRoutingModule
  ],
  declarations: [JugadorUpdatePage]
})
export class JugadorUpdatePageModule {}
